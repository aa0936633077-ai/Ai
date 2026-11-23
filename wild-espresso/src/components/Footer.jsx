import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = 'Opesmusic.www@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#0e0e0c] border-t border-[#2a2a27] pt-12 pb-24 md:pb-12 text-[#d1c4be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2a2a27]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ffb77a]"></span>
              <span className="font-label-caps text-xs text-[#ffb77a] uppercase tracking-widest">
                WILD ORIGIN ESPRESSO
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd] leading-snug">
              「不稀釋的創作濃度，<br />五項全能的精煉淬鍊。」
            </h2>
            <p className="font-body-sm text-[#d1c4be] max-w-md">
              來自雲林黑金泥土的野性本能，注入現代視覺設計、影音剪輯與高訂印刷語彙。以 9-bar 義式高壓之嚴苛，萃出最純粹的 2D 藝術與音訊體驗。
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-label-caps text-xs text-[#ffb77a] uppercase tracking-wider">
              導覽 SITEMAP
            </span>
            <ul className="flex flex-col gap-2 font-label-code text-xs text-[#e5e2dd]">
              <li>
                <Link to="/" className="hover:text-[#ffb77a] transition-colors">01 // 主頁 Home</Link>
              </li>
              <li>
                <Link to="/works" className="hover:text-[#ffb77a] transition-colors">02 // 作品集 Selected Works</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ffb77a] transition-colors">03 // 關於我 5-in-1 Skills</Link>
              </li>
              <li>
                <Link to="/audio" className="hover:text-[#ffb77a] transition-colors">04 // 音樂實驗室 Audio Lab</Link>
              </li>
              <li>
                <Link to="/playground" className="hover:text-[#ffb77a] transition-colors">05 // 野性實驗室 & 工具箱 Stack</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ffb77a] transition-colors">06 // 聯絡合作 Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Coordinates */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-label-caps text-xs text-[#ffb77a] uppercase tracking-wider">
              DIRECT DISPATCH // 直接投遞
            </span>
            <div className="bg-[#1c1c19] border border-[#2a2a27] p-4 flex flex-col gap-2">
              <span className="font-label-code text-[11px] text-[#9a8e89] uppercase">DIRECT INBOX</span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-[#e5e2dd] truncate">{email}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1 bg-[#2a2a27] text-[#ffb77a] hover:bg-[#ffb77a] hover:text-[#4c2700] text-xs font-label-caps transition-colors flex items-center gap-1 flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? '已複製' : '複製'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-label-code text-[#9a8e89]">
              <span>TERROIR: YUNLIN, TAIWAN</span>
              <span>23.7092° N, 120.4313° E</span>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { name: 'Behance', url: 'https://behance.net' },
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'YouTube', url: 'https://youtube.com' },
                { name: 'Soundcloud', url: 'https://soundcloud.com' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-[#18110d] border border-[#2a2a27] text-xs font-label-caps text-[#d1c4be] hover:text-[#ffb77a] hover:border-[#ffb77a]/50 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-label-code text-[#9a8e89]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} WILD ESPRESSO ARCHIVE.</span>
            <span>·</span>
            <span>SPEC. 2025.EDITORIAL</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#ffb77a] transition-colors"
          >
            <span>BACK TO EXTRACTION TOP</span>
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
