import React from 'react'

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect?.(project)}
      className="project-card flex flex-col bg-[#20201d] border border-[#2a2a27] overflow-hidden group cursor-pointer hover:border-[#ffb77a]/60 transition-all duration-300 shadow-md hover:shadow-[4px_4px_0px_0px_#18110d]"
    >
      {/* Media Frame */}
      <div className="relative w-full aspect-[4/3] bg-[#0e0e0c] overflow-hidden">
        <img
          src={project.image}
          alt={project.alt || project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131411]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

        {/* Lot & Badge */}
        <div className="absolute top-2 left-2 bg-[#0e0e0c]/90 border border-[#2a2a27] px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
          <span className="font-label-code text-xs uppercase text-[#ffb77a] font-bold">{project.lot}</span>
          <span className="text-[#4e4540] font-label-code text-xs">//</span>
          <span className="font-label-caps text-[10px] uppercase text-[#e5e2dd]">{project.badge}</span>
        </div>

        {/* Year stamp */}
        <div className="absolute bottom-2 right-2 bg-[#ffb77a] text-[#4c2700] px-2 py-0.5 font-label-caps text-xs font-bold shadow-sm">
          {project.year}
        </div>
      </div>

      {/* Content & Specs */}
      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          {/* Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#2a2a27] text-[#d1c4be] px-2 py-0.5 font-label-code text-[11px] border border-[#353532]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#e5e2dd] group-hover:text-[#ffb77a] transition-colors leading-tight">
              {project.title}
            </h3>
            <span className="block font-label-code text-[11px] text-[#ffb77a]/80 mt-0.5">
              {project.titleEn}
            </span>
          </div>

          {/* Description */}
          <p className="font-body-sm text-[#d1c4be] line-clamp-2 mt-1">
            {project.summary}
          </p>
        </div>

        {/* Bottom Specs & Action */}
        <div className="bg-[#1c1c19] border border-[#2a2a27] p-2.5 flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="font-label-caps text-[10px] text-[#9a8e89] uppercase tracking-wider">
              {project.metricLabel}
            </span>
            <span className="font-mono text-xs font-semibold text-[#e5e2dd]">
              {project.metricValue}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onSelect?.(project)
            }}
            className="h-8 px-3 bg-[#e5e2dd] text-[#131411] font-label-caps text-xs uppercase tracking-wider transition-colors hover:bg-[#ffb77a] hover:text-[#4c2700] flex items-center gap-1"
          >
            <span>Case Study</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </article>
  )
}
