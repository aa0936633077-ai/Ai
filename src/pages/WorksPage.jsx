import React, { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function WorksPage({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: '全部 All', icon: 'apps' },
    { id: 'illustration', label: '🎨 2D插畫 Illustration', icon: 'palette' },
    { id: 'design', label: '📐 視覺設計 Design', icon: 'layers' },
    { id: 'photography', label: '📷 攝影寫真 Photography', icon: 'photo_camera' },
    { id: 'video', label: '🎬 動態剪輯 Video', icon: 'movie' },
    { id: 'audio', label: '🎵 音樂製作 Audio', icon: 'graphic_eq' },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col w-full text-[#e5e2dd]">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center justify-between pb-2">
          <span className="font-label-code text-xs uppercase tracking-widest text-[#ffb77a]">
            ARCHIVE // 2023-2025
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ffb77a] animate-pulse"></span>
            <span className="font-label-caps text-xs text-[#d1c4be] uppercase tracking-wider">
              Index Vol.04
            </span>
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e5e2dd] uppercase">
          Selected Works
        </h1>
        <p className="font-label-code text-xs sm:text-sm text-[#ffb77a] tracking-wider mt-1">
          精選作品集 ── 2D 平面繪畫 · 視覺設計 · 攝影寫真 · 影像剪輯 · 音樂製作
        </p>

        {/* Filter Pills & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#2a2a27]">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const count = cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length
              const active = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  className={`h-9 px-3.5 whitespace-nowrap font-label-caps text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 flex-shrink-0 ${
                    active
                      ? 'bg-[#ffb77a] text-[#4c2700] font-bold shadow-[2px_2px_0px_0px_#18110d]'
                      : 'bg-[#20201d] text-[#d1c4be] hover:bg-[#2a2a27] hover:text-[#e5e2dd] border border-[#2a2a27]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${active ? 'bg-[#774001] text-[#ffdcc2]' : 'bg-[#18110d] text-[#9a8e89]'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋作品名稱、標籤..."
              className="w-full bg-[#1c1c19] border border-[#2a2a27] focus:border-[#ffb77a] pl-9 pr-4 py-2 text-xs text-[#e5e2dd] outline-none transition-colors"
            />
            <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[#9a8e89] text-[16px]">
              search
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-[#9a8e89] hover:text-[#e5e2dd] text-[14px]"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mb-16">
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center bg-[#1c1c19] border border-[#2a2a27] flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-4xl text-[#9a8e89]">inventory_2</span>
            <h3 className="font-serif text-xl font-bold text-[#e5e2dd]">未找到相符的作品</h3>
            <p className="font-body-sm text-sm text-[#d1c4be]">
              請嘗試調整分類篩選或輸入不同的關鍵字搜尋。
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all')
                setSearchQuery('')
              }}
              className="mt-2 px-4 py-2 bg-[#ffb77a] text-[#4c2700] font-label-caps text-xs uppercase font-bold"
            >
              重設所有篩選
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
