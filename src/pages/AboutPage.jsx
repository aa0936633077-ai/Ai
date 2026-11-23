import React, { useState } from 'react'
import { skills } from '../data/skills'
import { milestones, creativeStack } from '../data/milestones'

export default function AboutPage({ onOpenContact }) {
  const [selectedFlavor, setSelectedFlavor] = useState(0)

  return (
    <div className="flex flex-col w-full text-[#e5e2dd]">
      {/* 1. EDITORIAL HERO & MONOGRAM SPINE */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center justify-between pb-2">
          <span className="font-label-code text-xs uppercase tracking-widest text-[#ffb77a] flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#ffb77a]"></span>
            LOT 03 // ORIGIN & ROAST ARCHIVE
          </span>
          <span className="font-label-caps text-xs text-[#d1c4be] tracking-widest uppercase">
            REV. 2025.SPEC
          </span>
        </div>

        <div className="flex flex-col py-2">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e5e2dd] uppercase">
            Story & Flavor Notes
          </h1>
          <span className="font-title-md text-base sm:text-xl text-[#ffb77a] tracking-wider mt-1">
            關於我與五合一濃縮風味筆記
          </span>
        </div>

        {/* Editorial Accent Ribbon */}
        <div className="grid grid-cols-4 gap-1.5 py-4">
          <div className="h-1 bg-[#ffb77a]"></div>
          <div className="h-1 bg-[#353532]"></div>
          <div className="h-1 bg-[#353532]"></div>
          <div className="h-1 bg-[#ffb77a]"></div>
        </div>
      </section>

      {/* 2. NARRATIVE MANIFESTO SECTION */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-14">
        <div className="bg-[#1c1c19] border border-[#2a2a27] p-6 sm:p-8 flex flex-col lg:flex-row gap-8 shadow-md">
          {/* Portrait & Origin Snapshot */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] bg-[#0e0e0c] overflow-hidden border border-[#2a2a27] flex-shrink-0">
            <img
              className="w-full h-full object-cover grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-HBXuOCBSjBccH6iL8XTOlAsc9RUn_QrLJd4c2fkpAbQpe7ffQwkII2oIE76liUiluc7y6LhfUH-ctQ3pUsFy2jpFZIHJwIwfpwxXdS4smxHypR13DD2l63u31fhf6c74-exTrkMa9tYf5YLrZeVMCLLiph5niPwbDwHe1SfBeIa3UaUNnZWsf-UXXrgX3-_pKRsvz7eBBr6RZTPEPzLWbxFrDiVmZsprqMipkyk2"
              alt="Monochromatic gritty high-fashion editorial portrait of Taiwanese rural creative designer in Yunlin"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
              <div className="bg-[#774001] px-2.5 py-1">
                <span className="font-label-code text-xs text-[#ffb77a] font-bold uppercase tracking-wider">
                  YUNLIN TERROIR // 雲林平原
                </span>
              </div>
              <span className="font-label-caps text-xs text-[#d1c4be] bg-[#0e0e0c]/80 px-2 py-0.5 border border-[#2a2a27]">
                23.7092° N, 120.4313° E
              </span>
            </div>
          </div>

          {/* Story Copy */}
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#ffb77a]">local_cafe</span>
                <span className="font-label-caps text-xs uppercase tracking-widest text-[#ffb77a] font-bold">
                  CREATOR MANIFESTO
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd] leading-snug">
                「我是來自雲林平原的野小孩。帶著鄉村泥土的韌性，闖入數位創作的世界。」
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#d1c4be] leading-relaxed">
                拒絕被單一標籤定義，我將繪畫、攝影、剪輯、設計與音樂濃縮為一杯最烈、最純粹的 Espresso。在極致粗獷的原生質地與高訂設計的結構張力間，萃取出不受馴服的視覺新浪潮。
              </p>
              <p className="font-body-md text-sm sm:text-base text-[#d1c4be] leading-relaxed">
                每一份作品，都是在 9-bar 活塞高壓之嚴苛萃取下的結晶：不添加多餘水分，只留下最深層的風味與餘韻。
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="px-6 py-2.5 bg-[#ffb77a] hover:bg-[#e24605] text-[#4c2700] hover:text-white font-label-caps text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>發起專案對談</span>
                <span className="material-symbols-outlined text-[16px]">chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5-IN-1 CUPPING FLAVORS */}
      <section className="w-full bg-[#141411] border-y border-[#2a2a27] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col pb-8 border-b border-[#2a2a27]">
            <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
              EXTRACTION SENSORY WHEEL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#e5e2dd] mt-1">
              五合一專業技能與風味輪
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Flavor Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {skills.map((skill, idx) => {
                const active = selectedFlavor === idx
                return (
                  <button
                    key={skill.flavor}
                    type="button"
                    onClick={() => setSelectedFlavor(idx)}
                    className={`p-4 text-left border transition-all flex items-center justify-between ${
                      active
                        ? 'bg-[#20201d] border-[#ffb77a] shadow-[4px_4px_0px_0px_#774001]'
                        : 'bg-[#1c1c19] border-[#2a2a27] hover:border-[#353532] text-[#d1c4be]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-[24px] ${active ? 'text-[#ffb77a]' : 'text-[#9a8e89]'}`}>
                        {skill.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-code text-xs text-[#ffb77a]">{skill.flavor}</span>
                        <span className="font-serif text-base font-bold text-[#e5e2dd]">{skill.domainName} // {skill.domain}</span>
                      </div>
                    </div>
                    <span className="bg-[#2a2a27] text-[#ffb77a] px-2 py-0.5 font-label-code text-xs">
                      {skill.roastMetric}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Selected Flavor Deep Dive Card */}
            <div className="lg:col-span-7 bg-[#1c1c19] border border-[#ffb77a]/60 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="bg-[#774001] text-[#fcae6a] px-2.5 py-1 font-label-code text-xs font-bold">
                    {skills[selectedFlavor].profileBadge}
                  </span>
                  <span className="font-mono text-xs text-[#ffb77a]">
                    EXTRACTION INTENSITY: {skills[selectedFlavor].roastMetric}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd]">
                  {skills[selectedFlavor].title}
                </h3>
                <p className="font-label-code text-xs text-[#ffb77a]">
                  {skills[selectedFlavor].titleEn}
                </p>

                <p className="font-body-md text-sm sm:text-base text-[#d1c4be] leading-relaxed">
                  {skills[selectedFlavor].description}
                </p>

                {/* Specific Skills List */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="font-label-caps text-xs text-[#9a8e89] uppercase tracking-wider">
                    核心技能矩陣 CORE PROFICIENCIES
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {skills[selectedFlavor].skillsList.map((item) => (
                      <span
                        key={item}
                        className="bg-[#20201d] border border-[#2a2a27] text-[#e5e2dd] px-3 py-1 font-label-code text-xs"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Frame */}
              <div className="w-full h-48 sm:h-56 bg-[#0e0e0c] border border-[#2a2a27] overflow-hidden">
                <img
                  src={skills[selectedFlavor].image}
                  alt={skills[selectedFlavor].alt}
                  className="w-full h-full object-cover filter contrast-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CREATIVE STACK & ARSENAL */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between pb-6 border-b border-[#2a2a27]">
          <div className="flex flex-col">
            <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
              LAB HARDWARE & SOFTWARE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd] mt-1">
              野小孩創作軍火庫 Stack
            </h2>
          </div>
          <span className="font-label-caps text-xs text-[#9a8e89]">GEAR SPEC</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {creativeStack.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#1c1c19] border border-[#2a2a27] p-5 sm:p-6 flex flex-col gap-4"
            >
              <h3 className="font-serif text-lg font-bold text-[#ffb77a] pb-2 border-b border-[#2a2a27]">
                {group.category}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map((tool) => (
                  <div key={tool.name} className="flex flex-col">
                    <span className="font-label-code text-xs text-[#e5e2dd] font-semibold">
                      {tool.name}
                    </span>
                    <span className="font-body-sm text-[11px] text-[#9a8e89]">
                      {tool.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FULL MILESTONES TIMELINE */}
      <section className="w-full bg-[#141411] border-t border-[#2a2a27] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-6 border-b border-[#2a2a27]">
            <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-widest">
              CHRONOLOGY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd]">
              歷年里程碑與參展獲獎
            </h2>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#1c1c19] border border-[#2a2a27] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#ffb77a]/60 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="font-mono text-sm text-[#ffb77a] font-bold min-w-[70px]">
                    {m.date}
                  </span>
                  <span className="bg-[#774001] text-[#fcae6a] px-2 py-0.5 font-label-code text-xs flex-shrink-0">
                    {m.badge}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#e5e2dd]">
                      {m.title}
                    </h3>
                    <p className="font-body-sm text-xs sm:text-sm text-[#d1c4be] mt-0.5">
                      {m.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
