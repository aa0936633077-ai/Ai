import React, { useState } from 'react'

export default function PlaygroundPage({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('all')

  const experiments = [
    {
      id: 'exp-01',
      title: '9.5 BAR 泥漿筆刷合成實驗',
      titleEn: '9.5 BAR Mud Slurry Brush Engine',
      category: 'illustration',
      categoryLabel: '電繪筆刷實驗',
      tag: 'PROCREATE ENGINE',
      description: '將濁水溪南岸黑土顆粒掃描後轉換為動態壓感筆刷，在重壓下呈現自然開裂與沉積邊緣。',
      stats: '48 Layers · 300 DPI · Display P3',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdfkIxgaBk7k4etRPrBFBSo6cAJ3V_0U8LvS2SJkNyOcisbaSVotaPWSrcX7naB7saCMT_IPOjoAGGaHngzGxrxypc52riipKeb-UEQ8Nx7zHbGiYiZ4GcEvi8tY5_tnJSrMCDcNzaypmLna-nkWF4IJzWc4XJzXBY49hRddYjgN5FaQ4IMR9qpA-rvdXGXbjECqukQjydFuvaVMWPZgHJjv0zxevtgqdJLRzX-xuv',
    },
    {
      id: 'exp-02',
      title: '萬華巷弄底片迫衝夜行顆粒試片',
      titleEn: 'Wanhua Push-Processed 35mm Grain Study',
      category: 'photography',
      categoryLabel: '底片暗房試驗',
      tag: 'KODAK TRI-X @ 3200',
      description: '在極低光源下強制迫衝三格（Push 3 Stops），測試大光圈手動定焦在強烈眩光下的暈染極限。',
      stats: 'Leica M · 35mm f/1.4 · ISO 3200',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSvMahaymmIKgmGd8FC5MohzGzkA5gWdvUF51QpHhiP22M_vLMM55mKGYV7RNj0rrWts0wZ1ZBFdat1XxNfv2-tpGXhZvTDSSV7SvCrCxJUyV60-rzwNRsZfrq6NX3opSzVEm-GP5x1fB8iku-aefyw3nsNMjM5e0QB1UGCwFseN18o60g3QUTi3l3ZfNIFxtkKBFxJDkTgebKHEQNe48UCtIAdyoBR3SYRt9TDR_0',
    },
    {
      id: 'exp-03',
      title: '田間柴油機空轉 Sub-bass 取樣',
      titleEn: 'Agricultural Diesel Engine Sub-bass Sample',
      category: 'audio',
      categoryLabel: '聲音採集與調製',
      tag: 'MOOG FILTER 24dB',
      description: '採集老式農機引擎的規律重低音震動，透過類比濾波器切除高頻，萃取出胸腔共鳴級的 40Hz 衝擊波。',
      stats: '40Hz Fundamental · 130 BPM · Moog Ladder',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC02c7uDfHEUWQtjvyIAQaez_T9PtUwBTxHmkxEWeYUglPgNiL7aQugqw8hmigVfEVxd-i_Y48L6jpaIMzK7vV8eONpndlCcOJoggxSz6ZQBCuCpaLhc54kvx5yxDFU3Gvng1zmhw0DOVy9BbOo2ZrnTRSgCznVTqYBPAR5El8sH2fkY8Ps0Gd2iKhKEZRNGkZv0ghLZ-BPMNJ14-H6EKjvgBIRwNnYKPUsEI8GzqH',
    },
    {
      id: 'exp-04',
      title: '咖啡油脂乾涸微距視覺切片',
      titleEn: 'Espresso Crema Evaporation Macro Study',
      category: 'design',
      categoryLabel: '物質肌理採集',
      tag: '1200 DPI SCAN',
      description: '將深焙咖啡濾液滴在不同吸水率的重磅牛皮紙上，觀察高溫水分蒸發時天然形成的龜裂與深褐金屬邊。',
      stats: '1200 DPI Optical · Gmund 450g Card',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxAmLZ8FFcqkTJ4sdeetSFCzHXKHAsCDO2MkHhLMVN3w8QHNKsjmAF8BfLPZZ_TgdhEj2SMreIUglTGLLJdhEQjRMwKrpmvlf_v6r0lIYjT_kYbL8oB9csVSFmHb1y2MxlDZbi_NZuSod_44VPOjvu0ulR7pFrhk3CL4SpU3DNinKpGXSQLQyCLx6gwswyPxUpm512W2ebqaJCHohDFfVlJhF_0Sy8LbCeVld1HyGi',
    },
  ]

  const filtered = activeTab === 'all' ? experiments : experiments.filter((e) => e.category === activeTab)

  return (
    <div className="flex flex-col w-full text-[#e5e2dd]">
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center justify-between pb-2">
          <span className="font-label-code text-xs uppercase tracking-widest text-[#ffb77a]">
            LAB EXPERIMENTS // R&D BENCH
          </span>
          <span className="font-label-caps text-xs text-[#9a8e89]">ALPHA BUILDS</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e5e2dd] uppercase">
          Playground / 野性實驗室
        </h1>
        <p className="font-body-md text-sm sm:text-base text-[#d1c4be] max-w-2xl mt-1">
          不設限的感官測試場：客製筆刷塗抹、暗房微距底片迫衝、鄉村聲音採樣與未完成的狂放草稿。
        </p>

        {/* Tab Filter */}
        <div className="flex items-center gap-2 mt-6 pb-4 border-b border-[#2a2a27] overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: '全部實驗 All' },
            { id: 'illustration', label: '🎨 電繪筆刷' },
            { id: 'photography', label: '📷 底片暗房' },
            { id: 'audio', label: '🎵 聲音採樣' },
            { id: 'design', label: '📐 物質肌理' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`h-9 px-4 font-label-caps text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#ffb77a] text-[#4c2700] font-bold shadow-[2px_2px_0px_0px_#18110d]'
                  : 'bg-[#1c1c19] text-[#d1c4be] hover:bg-[#20201d] border border-[#2a2a27]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1c19] border border-[#2a2a27] hover:border-[#ffb77a]/60 p-6 flex flex-col justify-between gap-5 transition-all shadow-md group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="bg-[#774001] text-[#fcae6a] px-2 py-0.5 font-label-code text-xs font-bold">
                    {item.tag}
                  </span>
                  <span className="font-label-caps text-xs text-[#9a8e89]">{item.categoryLabel}</span>
                </div>

                <div className="relative w-full h-48 bg-[#0e0e0c] border border-[#2a2a27] overflow-hidden my-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#e5e2dd] group-hover:text-[#ffb77a] transition-colors">
                  {item.title}
                </h3>
                <p className="font-label-code text-xs text-[#ffb77a]/80">
                  {item.titleEn}
                </p>
                <p className="font-body-sm text-xs sm:text-sm text-[#d1c4be] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2a2a27] flex items-center justify-between font-label-code text-xs text-[#9a8e89]">
                <span>BENCHMARK</span>
                <span className="text-[#e5e2dd]">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
