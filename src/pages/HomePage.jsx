import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { audioTracks } from '../data/audioTracks'
import { milestones } from '../data/milestones'
import ProjectCard from '../components/ProjectCard'

export default function HomePage({ onSelectProject, onOpenContact, onPlayTrack, currentTrackIndex, isAudioPlaying }) {
  const featuredProjects = projects.slice(0, 3)
  const currentAudio = audioTracks[currentTrackIndex] || audioTracks[0]

  return (
    <div className="flex flex-col w-full text-[#e5e2dd]">
      {/* 1. TOP HERO EDITORIAL TITLE SPREAD */}
      <section className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12 flex flex-col gap-6">
        {/* Status Pill & Extraction Badge */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-[#2a2a27] border border-[#353532] px-3 py-1">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e24605] animate-pulse"></span>
            <span className="font-label-code text-xs uppercase text-[#ffb77a] font-semibold tracking-wider">
              EXTRACTION RATIO 1:1.8
            </span>
          </div>
          <div className="bg-[#774001] border border-[#ffb77a]/40 px-3 py-1 -rotate-1 shadow-[2px_2px_0px_0px_#2a0600]">
            <span className="font-label-caps text-xs uppercase text-[#fcae6a] font-bold tracking-widest">
              YUNLIN TERROIR // 野生首發
            </span>
          </div>
        </div>

        {/* Editorial High-Contrast Headline Block */}
        <div className="flex flex-col gap-2 mt-2">
          <span className="font-label-caps text-xs uppercase text-[#9a8e89] tracking-[0.25em]">
            ORIGIN & CRAFT MANIFESTO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#e5e2dd]">
            來自雲林的<span className="text-[#ffb77a] italic">野小孩</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#d2c4bd] font-normal mt-2">
              ── 五合一濃縮咖啡
            </span>
          </h1>
          <p className="font-body-md text-base sm:text-lg text-[#d1c4be] max-w-2xl mt-2 leading-relaxed">
            繪畫 <span className="text-[#ffb77a] font-bold">×</span> 攝影{' '}
            <span className="text-[#ffb77a] font-bold">×</span> 剪輯{' '}
            <span className="text-[#ffb77a] font-bold">×</span> 設計{' '}
            <span className="text-[#ffb77a] font-bold">×</span> 音樂製作
          </p>
        </div>

        {/* Espresso Extraction Sensory Card */}
        <div className="relative bg-[#1c1c19] border border-[#2a2a27] p-5 sm:p-7 flex flex-col gap-5 overflow-hidden shadow-[6px_6px_0px_0px_#774001]">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex flex-col">
              <span className="font-label-code text-xs text-[#ffb77a] tracking-widest uppercase">
                BATCH PROTOCOL // 09-BAR
              </span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#e5e2dd] mt-1">
                濃厚油脂・高壓濃縮
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-9 px-3 bg-[#2a0600] text-[#e24605] border border-[#e24605]/30 flex items-center gap-1.5 font-label-code text-xs">
                <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                <span>HIGH CONCENTRATION</span>
              </span>
            </div>
          </div>

          {/* Hero Visual Image Frame */}
          <div className="relative w-full h-64 sm:h-96 overflow-hidden bg-[#0e0e0c] border border-[#2a2a27]">
            <img
              className="w-full h-full object-cover grayscale-[25%] contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBXPthIDcBeeJVeCMzIXGco3-3XYmEzGogkl_bDpQCOmcxkU_FcWim6EV1uJwHHtZLtpbhVIds7SRtZpu0m2VbC8nPO_0wg1l1cX7m-n5CllG7yt2InCzCn-LdpvFm__jvlnecRj9K-lW9rlofDHJ11BFDMpEzKot7pmCfZs5aF9lTcMFasWv9wfDI7IuTtrG5UH0Pu1ZiqRyPj4ISX7uu1vRtrL2jXAi-5HxPSXNF"
              alt="Macro high-contrast cinematic shot of rich viscous espresso crema pouring steadily into a dark stoneware ceramic vessel"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-label-code">
              <span className="bg-[#0e0e0c]/85 border border-[#2a2a27] px-2.5 py-1 text-[#ffb77a] uppercase">
                ORIGIN: YUNLIN COUNTY
              </span>
              <span className="bg-[#0e0e0c]/85 border border-[#2a2a27] px-2.5 py-1 text-[#d2c4bd]">
                CREMA DENSITY 98.4%
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <p className="font-body-sm text-sm text-[#d1c4be] max-w-xl">
              拒絕溫吞與妥協。像九巴高壓擠出咖啡精華一般，將田野野性轉化為震撼視覺與音訊衝擊。
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/works"
                className="px-5 py-2.5 bg-[#d2c4bd] hover:bg-[#ffb77a] text-[#372f2a] hover:text-[#4c2700] font-label-caps text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>瀏覽作品集</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <button
                type="button"
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-[#20201d] hover:bg-[#2a2a27] text-[#ffb77a] border border-[#2a2a27] hover:border-[#ffb77a] font-label-caps text-xs uppercase tracking-wider transition-colors flex items-center justify-center"
              >
                聯絡我
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIVE FLAVOR PROFILES (5-IN-1 CONCEPT) */}
      <section className="w-full bg-[#1c1c19] border-y border-[#2a2a27] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#2a2a27]">
            <div className="flex flex-col">
              <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
                5-IN-1 CREATIVE CUPPING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#e5e2dd] mt-1">
                五合一濃縮風味杯測
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs font-label-caps text-[#ffb77a] hover:underline flex items-center gap-1"
            >
              <span>查看完整杯測指標與技能雷達</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {skills.map((skill, index) => (
              <div
                key={skill.flavor}
                className="bg-[#20201d] border border-[#2a2a27] hover:border-[#ffb77a]/60 p-4 flex flex-col justify-between gap-4 transition-all hover:-translate-y-1 group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-code text-[11px] text-[#ffb77a] font-bold">
                      {skill.flavor}
                    </span>
                    <span className="bg-[#2a2a27] text-[#d1c4be] px-1.5 py-0.5 font-label-code text-[10px]">
                      {skill.roastMetric}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[20px] text-[#ffb77a]">
                      {skill.icon}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#e5e2dd]">
                      {skill.domainName}
                    </h3>
                  </div>
                  <p className="font-body-sm text-xs text-[#d1c4be] line-clamp-3 mt-1">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#2a2a27]/60">
                  <span className="font-label-code text-[10px] text-[#9a8e89] block uppercase">
                    {skill.profileBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS TEASER */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#2a2a27]">
          <div className="flex flex-col">
            <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
              ARCHIVE // LOT 01-03
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#e5e2dd] mt-1">
              精選代表作 Selected Works
            </h2>
          </div>
          <Link
            to="/works"
            className="h-10 px-5 bg-[#20201d] hover:bg-[#ffb77a] text-[#ffb77a] hover:text-[#4c2700] border border-[#2a2a27] hover:border-[#ffb77a] font-label-caps text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 self-start sm:self-auto"
          >
            <span>瀏覽全庫 ({projects.length} 件作品)</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* 4. AUDIO LAB TEASER */}
      <section className="w-full bg-[#141411] border-y border-[#2a2a27] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1c1c19] border border-[#2a2a27] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="flex flex-col gap-3 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffb77a] animate-ping"></span>
                <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-wider font-bold">
                  AUDIO LAB // NOW MONITORING
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd]">
                {currentAudio.title}
              </h2>
              <p className="font-body-sm text-[#d1c4be] leading-relaxed">
                {currentAudio.notes}
              </p>
              <div className="flex items-center gap-3 font-label-code text-xs text-[#9a8e89] mt-1">
                <span>{currentAudio.genre}</span>
                <span>•</span>
                <span>{currentAudio.bpm}</span>
                <span>•</span>
                <span>{currentAudio.key}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                type="button"
                onClick={() => onPlayTrack?.(currentTrackIndex)}
                className="h-12 px-6 bg-[#ffb77a] hover:bg-[#e24605] text-[#4c2700] hover:text-white font-label-caps text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isAudioPlaying ? 'pause' : 'play_arrow'}
                </span>
                <span>{isAudioPlaying ? '暫停播放' : '試聽原創音軌'}</span>
              </button>
              <Link
                to="/audio"
                className="h-12 px-5 bg-[#20201d] hover:bg-[#2a2a27] text-[#d1c4be] hover:text-[#ffb77a] border border-[#2a2a27] font-label-caps text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>進入黑膠唱片機</span>
                <span className="material-symbols-outlined text-[16px]">album</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AWARDS & MILESTONES BANNER */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between pb-6 border-b border-[#2a2a27]">
          <span className="font-label-caps text-xs text-[#ffb77a] uppercase tracking-widest font-bold">
            TIMELINE & MILESTONES // 歷年印記
          </span>
          <span className="font-label-code text-xs text-[#9a8e89]">2021 — 2025</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {milestones.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#20201d] border border-[#2a2a27] flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#ffb77a] font-bold">{item.date}</span>
                <span className="bg-[#2a2a27] text-[#d1c4be] px-2 py-0.5 font-label-code text-[10px]">
                  {item.badge}
                </span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#e5e2dd] mt-1">{item.title}</h4>
              <p className="font-body-sm text-xs text-[#d1c4be] leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="w-full bg-[#1c1c19] border-t border-[#2a2a27] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
            READY FOR HIGH-PRESSURE EXTRACTION?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#e5e2dd]">
            準備好為你的專案注入不凡濃度了嗎？
          </h2>
          <p className="font-body-sm text-sm sm:text-base text-[#d1c4be] max-w-xl">
            無論是品牌全案識別、震撼 2D 視覺、高感度街頭攝影或原創音軌編曲，歡迎隨時投遞委託。
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="mt-2 h-12 px-8 bg-[#ffb77a] hover:bg-[#e24605] text-[#4c2700] hover:text-white font-label-caps text-xs uppercase tracking-wider font-bold transition-all shadow-[4px_4px_0px_0px_#18110d] flex items-center gap-2"
          >
            <span>立即投遞委託</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </section>
    </div>
  )
}
