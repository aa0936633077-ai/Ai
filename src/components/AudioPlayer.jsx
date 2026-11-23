import React, { useState, useEffect, useRef } from 'react'

export default function AudioPlayer({ tracks, currentTrackIndex = 0, onTrackChange }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(35) // percentage
  const [currentTime, setCurrentTime] = useState('01:12')
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

  const audioCtxRef = useRef(null)
  const synthNodesRef = useRef([])
  const timerRef = useRef(null)

  const track = tracks[currentTrackIndex] || tracks[0]

  // Web Audio Synth engine for real sound playback
  const startSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext()
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume()
      }

      stopSynth()

      const ctx = audioCtxRef.current
      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime((isMuted ? 0 : volume / 100) * 0.15, ctx.currentTime)
      masterGain.connect(ctx.destination)

      const nodes = [masterGain]
      const chords = track.synthConfig?.chords || [155.56, 185.0, 233.08]
      const bassFreq = track.synthConfig?.bassFreq || 77.78

      // Bass drone oscillator
      const bassOsc = ctx.createOscillator()
      const bassGain = ctx.createGain()
      bassOsc.type = 'triangle'
      bassOsc.frequency.setValueAtTime(bassFreq, ctx.currentTime)
      bassGain.gain.setValueAtTime(0.4, ctx.currentTime)
      bassOsc.connect(bassGain)
      bassGain.connect(masterGain)
      bassOsc.start()
      nodes.push(bassOsc, bassGain)

      // Chords warm pad
      chords.forEach((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, ctx.currentTime)

        // Subtle slow vibrato LFO
        const lfo = ctx.createOscillator()
        const lfoGain = ctx.createGain()
        lfo.frequency.setValueAtTime(0.3 + idx * 0.1, ctx.currentTime)
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime)
        lfo.connect(osc.frequency)
        lfo.start()

        gain.gain.setValueAtTime(0.25 / chords.length, ctx.currentTime)
        osc.connect(gain)
        gain.connect(masterGain)
        osc.start()
        nodes.push(osc, gain, lfo, lfoGain)
      })

      synthNodesRef.current = nodes
    } catch (e) {
      console.warn('Web Audio playback error:', e)
    }
  }

  const stopSynth = () => {
    synthNodesRef.current.forEach((node) => {
      try {
        if (typeof node.stop === 'function') node.stop()
        if (typeof node.disconnect === 'function') node.disconnect()
      } catch (err) {
        // ignore cleanup
      }
    })
    synthNodesRef.current = []
  }

  // Update volume on master gain
  useEffect(() => {
    if (synthNodesRef.current.length > 0 && audioCtxRef.current) {
      const masterGain = synthNodesRef.current[0]
      if (masterGain && masterGain.gain) {
        masterGain.gain.setValueAtTime(
          (isMuted ? 0 : volume / 100) * 0.15,
          audioCtxRef.current.currentTime
        )
      }
    }
  }, [volume, isMuted])

  // Play / Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      stopSynth()
      setIsPlaying(false)
    } else {
      startSynth()
      setIsPlaying(true)
    }
  }

  // Handle track switch
  useEffect(() => {
    if (isPlaying) {
      startSynth()
    }
    setProgress(0)
    setCurrentTime('00:00')
  }, [currentTrackIndex])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSynth()
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close()
        } catch (e) {}
      }
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // Timer progression simulation while playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (isRepeat) {
              return 0
            } else {
              handleNext()
              return 0
            }
          }
          const nextVal = prev + 0.5
          const totalSec = track.durationSec || 200
          const currentSec = Math.floor((nextVal / 100) * totalSec)
          const mins = String(Math.floor(currentSec / 60)).padStart(2, '0')
          const secs = String(currentSec % 60).padStart(2, '0')
          setCurrentTime(`${mins}:${secs}`)
          return nextVal
        })
      }, 500)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, currentTrackIndex, isRepeat])

  const handleNext = () => {
    if (isShuffle) {
      const rand = Math.floor(Math.random() * tracks.length)
      onTrackChange?.(rand)
    } else {
      const nextIdx = (currentTrackIndex + 1) % tracks.length
      onTrackChange?.(nextIdx)
    }
  }

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length
    onTrackChange?.(prevIdx)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percent = Math.min(Math.max((clickX / rect.width) * 100, 0), 100)
    setProgress(percent)
    const totalSec = track.durationSec || 200
    const currentSec = Math.floor((percent / 100) * totalSec)
    const mins = String(Math.floor(currentSec / 60)).padStart(2, '0')
    const secs = String(currentSec % 60).padStart(2, '0')
    setCurrentTime(`${mins}:${secs}`)
  }

  return (
    <div className="relative w-full bg-[#1c1c19] border border-[#2a2a27] p-4 sm:p-6 flex flex-col overflow-hidden shadow-[4px_4px_0px_0px_#18110d]">
      {/* Top Plaque Strip */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-[#2a2a27]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ffb77a] animate-pulse"></span>
          <span className="font-label-caps text-xs text-[#ffb77a] uppercase tracking-widest">
            NOW MONITORING // 即時監聽 DECK
          </span>
        </div>
        <span className="font-label-code text-xs text-[#d1c4be] uppercase">
          ANALOG TAPE IN: A-0{currentTrackIndex + 1}
        </span>
      </div>

      {/* Center Layout: Vinyl on Mobile & Tablet, Side-by-Side on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-4 items-center">
        {/* Vinyl Rotating Deck Simulation */}
        <div className="md:col-span-5 flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Vinyl Groove Outer Disc */}
            <div
              className={`absolute inset-0 rounded-full bg-[#0e0e0c] border-4 border-[#20201d] shadow-2xl flex items-center justify-center transition-all ${
                isPlaying ? 'animate-[spin_12s_linear_infinite]' : ''
              }`}
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            >
              {/* Vinyl Micro-grooves concentric rings */}
              <div className="w-[92%] h-[92%] rounded-full border border-[#2a2a27]/60 flex items-center justify-center">
                <div className="w-[84%] h-[84%] rounded-full border border-[#2a2a27]/40 flex items-center justify-center">
                  <div className="w-[72%] h-[72%] rounded-full border border-[#2a2a27]/60 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] rounded-full border border-[#2a2a27]/80 flex items-center justify-center">
                      {/* Center Label Artwork */}
                      <div className="relative w-[48%] h-[48%] rounded-full overflow-hidden flex items-center justify-center bg-[#774001] border-2 border-[#ffb77a]">
                        <img
                          src={track.coverImage}
                          alt={track.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#18110d]/40"></div>
                        <div className="relative z-10 w-4 h-4 rounded-full bg-[#131411] border border-[#ffb77a] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ffb77a]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylus Tonearm Accent */}
            <div
              className={`absolute -top-2 -right-2 flex flex-col items-center pointer-events-none transition-transform duration-500 origin-top-right ${
                isPlaying ? 'rotate-[-5deg]' : 'rotate-[-32deg]'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-[#ffb77a] shadow-md border border-[#2a2a27]"></div>
              <div className="w-1 h-16 bg-[#4e4540]"></div>
              <div className="w-2.5 h-3 bg-[#e24605]"></div>
            </div>
          </div>
        </div>

        {/* Track Info & Visualizer Controls */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {/* Track Meta Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 bg-[#774001] text-[#fcae6a] font-label-caps text-xs uppercase font-bold">
              {track.genre}
            </span>
            <span className="px-2.5 py-1 bg-[#2a2a27] text-[#ffb77a] font-label-code text-xs">
              {track.bpm}
            </span>
            <span className="px-2.5 py-1 bg-[#2a2a27] text-[#d1c4be] font-label-code text-xs">
              KEY: {track.key}
            </span>
            <span className="px-2 py-0.5 border border-[#4e4540] text-[#9a8e89] font-label-code text-[11px]">
              {track.peakSpectrum}
            </span>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#e5e2dd] leading-snug">
              {track.title}
            </h2>
            <p className="font-label-code text-xs text-[#ffb77a] mt-1">
              {track.artist}
            </p>
            <p className="font-body-sm text-[#d1c4be] mt-2">
              {track.notes}
            </p>
          </div>

          {/* Dynamic Waveform Visualizer */}
          <div className="w-full bg-[#0e0e0c] border border-[#2a2a27] p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-label-code text-[#9a8e89]">
              <span className="uppercase">AUDIO SPECTRUM // 即時頻譜</span>
              <span className="text-[#ffb77a]">{isPlaying ? 'LIVE 48kHz' : 'STANDBY'}</span>
            </div>

            {/* Waveform Bars */}
            <div className="h-10 w-full flex items-end justify-between gap-[2px] py-1">
              {[
                30, 65, 80, 45, 95, 100, 75, 55, 85, 60, 90, 70, 40, 85, 90, 50, 35, 75,
                65, 95, 45, 80, 100, 55, 30, 65, 40, 80, 70, 90, 45, 60, 85,
              ].map((val, idx) => {
                const height = isPlaying ? `${Math.max(15, (val * ((progress % 10) + 5)) / 12)}%` : '15%'
                return (
                  <span
                    key={idx}
                    className="flex-1 bg-[#ffb77a] transition-all duration-150"
                    style={{
                      height,
                      opacity: idx / 33 <= progress / 100 ? 1 : 0.25,
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Scrubber Timeline */}
          <div className="flex flex-col gap-1.5">
            <div
              onClick={handleSeek}
              className="relative w-full h-2.5 bg-[#2a2a27] cursor-pointer hover:bg-[#353532] transition-colors"
            >
              <div
                className="h-full bg-[#ffb77a] relative transition-all duration-200"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 bg-[#e5e2dd] border-2 border-[#18110d] shadow-md"></span>
              </div>
            </div>

            <div className="flex items-center justify-between font-label-code text-xs text-[#9a8e89]">
              <span>{currentTime}</span>
              <span className="text-[#ffb77a]">{isPlaying ? 'PLAYING REAL AUDIO' : 'PAUSED'}</span>
              <span>{track.duration}</span>
            </div>
          </div>

          {/* Transport Controls & Volume */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setIsShuffle(!isShuffle)}
                className={`w-9 h-9 flex items-center justify-center transition-colors ${
                  isShuffle ? 'text-[#ffb77a] bg-[#2a2a27]' : 'text-[#9a8e89] hover:text-[#e5e2dd]'
                }`}
                title="隨機播放"
              >
                <span className="material-symbols-outlined text-[18px]">shuffle</span>
              </button>

              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center text-[#e5e2dd] hover:text-[#ffb77a] transition-colors"
                title="上一首"
              >
                <span className="material-symbols-outlined text-[24px]">skip_previous</span>
              </button>

              {/* Main Play CTA Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="w-12 h-12 bg-[#ffb77a] text-[#4c2700] hover:bg-[#e24605] hover:text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#18110d] active:translate-y-0.5 transition-all"
                title={isPlaying ? '暫停播放' : '開始播放'}
              >
                <span className="material-symbols-outlined text-[28px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center text-[#e5e2dd] hover:text-[#ffb77a] transition-colors"
                title="下一首"
              >
                <span className="material-symbols-outlined text-[24px]">skip_next</span>
              </button>

              <button
                type="button"
                onClick={() => setIsRepeat(!isRepeat)}
                className={`w-9 h-9 flex items-center justify-center transition-colors ${
                  isRepeat ? 'text-[#ffb77a] bg-[#2a2a27]' : 'text-[#9a8e89] hover:text-[#e5e2dd]'
                }`}
                title="單曲循環"
              >
                <span className="material-symbols-outlined text-[18px]">repeat</span>
              </button>
            </div>

            {/* Volume bar */}
            <div className="flex items-center gap-2 bg-[#20201d] px-3 py-1.5 border border-[#2a2a27]">
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="text-[#d1c4be] hover:text-[#ffb77a]"
                title="靜音開關"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isMuted || volume === 0 ? 'volume_off' : 'volume_up'}
                </span>
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(Number(e.target.value))
                  setIsMuted(false)
                }}
                className="w-20 accent-[#ffb77a] h-1.5 bg-[#2a2a27] cursor-pointer"
              />
              <span className="font-label-code text-[11px] text-[#9a8e89] w-7 text-right">
                {isMuted ? '0%' : `${volume}%`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
