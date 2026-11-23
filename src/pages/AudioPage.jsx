import React from 'react'
import { audioTracks } from '../data/audioTracks'
import AudioPlayer from '../components/AudioPlayer'

export default function AudioPage({ currentTrackIndex = 0, onTrackChange }) {
  const currentTrack = audioTracks[currentTrackIndex] || audioTracks[0]

  return (
    <div className="flex flex-col w-full text-[#e5e2dd]">
      {/* 1. EDITORIAL SECTION MASTHEAD */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffb77a] animate-pulse"></span>
            <span className="font-label-code text-xs text-[#ffb77a] tracking-widest uppercase">
              LAB NO. 04 // MASTERING DECK
            </span>
          </div>
          <span className="font-label-code text-xs text-[#9a8e89] uppercase">
            48kHz / 24-bit Lossless Web Audio
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e5e2dd] uppercase">
          Audio Lab / 音樂創作專區
        </h1>
        <p className="font-body-md text-sm sm:text-base text-[#d1c4be] max-w-2xl mt-1">
          從深夜臥房編織到母帶後期的原創聲響，雲林風土淬煉的低頻節奏與顆粒記憶。內建 Web Audio 類比振盪合成器引擎，點擊播放即可即時監聽。
        </p>
      </section>

      {/* 2. LIVE AUDIO PLAYER DECK */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <AudioPlayer
          tracks={audioTracks}
          currentTrackIndex={currentTrackIndex}
          onTrackChange={onTrackChange}
        />
      </section>

      {/* 3. TRACKLIST TABLE & STEM ARCHIVE */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="flex items-center justify-between pb-4 border-b border-[#2a2a27]">
          <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
            ORIGINAL STEM ARCHIVE ({audioTracks.length} TRACKS)
          </span>
          <span className="font-label-caps text-xs text-[#9a8e89]">點擊曲目即時切換至播放座</span>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          {audioTracks.map((track, idx) => {
            const isCurrent = currentTrackIndex === idx

            return (
              <div
                key={track.id}
                onClick={() => onTrackChange?.(idx)}
                className={`p-4 sm:p-5 border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                  isCurrent
                    ? 'bg-[#20201d] border-[#ffb77a] shadow-[4px_4px_0px_0px_#774001]'
                    : 'bg-[#1c1c19] border-[#2a2a27] hover:border-[#353532]'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors ${
                      isCurrent
                        ? 'bg-[#ffb77a] text-[#4c2700] font-bold'
                        : 'bg-[#2a2a27] text-[#d1c4be]'
                    }`}
                  >
                    <span className="font-mono text-xs">{track.trackNum}</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-serif text-base sm:text-lg font-bold truncate ${isCurrent ? 'text-[#ffb77a]' : 'text-[#e5e2dd]'}`}>
                        {track.title}
                      </h3>
                      {isCurrent && (
                        <span className="bg-[#774001] text-[#fcae6a] text-[10px] font-label-code px-1.5 py-0.2">
                          NOW PLAYING
                        </span>
                      )}
                    </div>
                    <span className="font-body-sm text-xs text-[#9a8e89] truncate">
                      {track.artist} · {track.genre}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 font-label-code text-xs">
                  <span className="hidden sm:inline bg-[#141411] px-2 py-0.5 text-[#d1c4be] border border-[#2a2a27]">
                    {track.bpm}
                  </span>
                  <span className="hidden md:inline bg-[#141411] px-2 py-0.5 text-[#d1c4be] border border-[#2a2a27]">
                    {track.key}
                  </span>
                  <span className="font-mono text-[#e5e2dd] min-w-[40px] text-right">
                    {track.duration}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
