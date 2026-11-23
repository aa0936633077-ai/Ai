import React, { useEffect, useState } from 'react'

export default function CaseStudyModal({ project, projects, onClose, onSelectProject }) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#0e0e0c]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#1c1c19] border-2 border-[#ffb77a]/60 shadow-[8px_8px_0px_0px_#18110d] my-auto flex flex-col max-h-[92vh] overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#20201d] border-b border-[#2a2a27]">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs text-[#ffb77a] font-bold uppercase">{project.lot}</span>
            <span className="text-[#4e4540]">//</span>
            <span className="font-label-caps text-xs text-[#d1c4be]">{project.categoryName}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-label-code text-[11px] text-[#9a8e89]">ESC to Close</span>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-[#2a2a27] text-[#e5e2dd] hover:bg-[#e24605] hover:text-[#fff] transition-colors"
              aria-label="關閉案例研究視窗"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex flex-col gap-6">
          {/* Main Title Spread */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#ffb77a] text-[#4c2700] px-2 py-0.5 font-label-caps text-xs font-bold">
                {project.year}
              </span>
              <span className="bg-[#2a2a27] text-[#ffb77a] px-2 py-0.5 font-label-code text-xs">
                {project.badge}
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="bg-[#18110d] text-[#d1c4be] px-2 py-0.5 font-label-code text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#e5e2dd] mt-2">
              {project.title}
            </h2>
            <p className="font-label-code text-sm text-[#ffb77a]">
              {project.titleEn}
            </p>
          </div>

          {/* High-Resolution Media Viewport with Lightbox Zoom */}
          <div className="relative w-full bg-[#0e0e0c] border border-[#2a2a27] overflow-hidden group">
            <img
              src={project.image}
              alt={project.alt || project.title}
              className={`w-full object-cover transition-all duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out max-h-none' : 'max-h-[480px] cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-3 right-3 px-3 py-1 bg-[#0e0e0c]/85 border border-[#2a2a27] text-xs font-label-caps text-[#ffb77a] flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isZoomed ? 'zoom_out' : 'zoom_in'}
              </span>
              <span>{isZoomed ? '縮小預覽' : '放大 Lightbox'}</span>
            </button>
          </div>

          {/* Story & Conceptual Background */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#ffb77a]"></span>
              <h3 className="font-label-caps text-xs text-[#ffb77a] tracking-widest uppercase">
                CONCEPT &amp; TERROIR // 創作理念與土地背景
              </h3>
            </div>
            <p className="font-body-md text-[#e5e2dd] leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Creative Process Steps */}
          {project.creativeProcess && (
            <div className="bg-[#20201d] border border-[#2a2a27] p-4 sm:p-5 flex flex-col gap-3">
              <span className="font-label-caps text-xs text-[#ffb77a] tracking-widest uppercase">
                EXTRACTION PROCESS // 萃取工法階段
              </span>
              <ul className="flex flex-col gap-2.5">
                {project.creativeProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-label-code text-xs text-[#ffb77a] font-bold bg-[#18110d] px-2 py-0.5 border border-[#2a2a27] flex-shrink-0">
                      STEP 0{idx + 1}
                    </span>
                    <span className="font-body-sm text-[#d1c4be] mt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Specs Table (Ledger Style) */}
          {project.specs && (
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-xs text-[#ffb77a] tracking-widest uppercase">
                TECHNICAL LEDGER // 技術規格檢定
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#18110d] border border-[#2a2a27] p-3 flex flex-col justify-between"
                  >
                    <span className="font-label-caps text-[10px] text-[#9a8e89] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[#e5e2dd] font-semibold mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation Ribbon */}
        <div className="px-4 sm:px-6 py-3 bg-[#20201d] border-t border-[#2a2a27] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelectProject?.(prevProject)}
            className="flex items-center gap-1.5 text-xs font-label-caps text-[#d1c4be] hover:text-[#ffb77a] transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>上一件 ({prevProject.lot})</span>
          </button>

          <div className="font-label-code text-xs text-[#9a8e89]">
            {currentIndex + 1} / {projects.length}
          </div>

          <button
            type="button"
            onClick={() => onSelectProject?.(nextProject)}
            className="flex items-center gap-1.5 text-xs font-label-caps text-[#d1c4be] hover:text-[#ffb77a] transition-colors"
          >
            <span>下一件 ({nextProject.lot})</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}
