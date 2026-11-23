import React, { useState } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '全案五合一合作 Full 5-in-1',
    budget: 'NT$ 30,000 - 80,000',
    message: '',
  })

  if (!isOpen) return null

  const email = 'Opesmusic.www@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose?.()
    }, 2500)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0e0e0c]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#1c1c19] border-2 border-[#ffb77a]/60 shadow-[8px_8px_0px_0px_#18110d] my-auto flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#20201d] border-b border-[#2a2a27]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ffb77a]"></span>
            <span className="font-label-caps text-xs text-[#ffb77a] uppercase tracking-widest font-bold">
              DISPATCH PROTOCOL // 聯絡與專案合作
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-[#2a2a27] text-[#e5e2dd] hover:bg-[#e24605] hover:text-white transition-colors"
            aria-label="關閉視窗"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 flex flex-col gap-5 max-h-[85vh] overflow-y-auto">
          <div>
            <span className="font-label-code text-xs text-[#ffb77a] uppercase tracking-wider">
              LET'S EXTRACT SOMETHING WILD
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#e5e2dd] mt-1">
              投遞合作委託・萃取不凡創意
            </h2>
            <p className="font-body-sm text-[#d1c4be] mt-1.5 leading-relaxed">
              無論是 2D 插畫概念、品牌識別、影像剪輯調色、音樂編曲配樂，或是全案五合一量身定制，歡迎隨時來信。
            </p>
          </div>

          {/* Quick Direct Email Box */}
          <div className="bg-[#20201d] border border-[#2a2a27] p-3.5 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex flex-col">
              <span className="font-label-code text-[11px] text-[#9a8e89] uppercase">DIRECT INBOX</span>
              <span className="font-mono text-xs sm:text-sm text-[#e5e2dd] font-semibold">{email}</span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="px-3 py-1.5 bg-[#2a2a27] text-[#ffb77a] hover:bg-[#ffb77a] hover:text-[#4c2700] text-xs font-label-caps transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? '已複製信箱' : '一鍵複製'}</span>
            </button>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#20201d] border border-[#ffb77a] flex flex-col items-center justify-center text-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#ffb77a]">check_circle</span>
              <h3 className="font-serif text-xl font-bold text-[#e5e2dd]">委託已送達野小孩工作台！</h3>
              <p className="font-body-sm text-[#d1c4be]">
                感謝你的來信，我們將在 24 小時內以義式濃縮之高效率回信與你接洽。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-xs text-[#d1c4be] uppercase tracking-wider">
                    姓名 / 品牌名稱 *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="例如：林野 / 野小孩工作室"
                    className="w-full bg-[#131411] border border-[#2a2a27] focus:border-[#ffb77a] px-3.5 py-2.5 text-sm text-[#e5e2dd] outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-xs text-[#d1c4be] uppercase tracking-wider">
                    聯絡電子郵件 *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your-email@domain.com"
                    className="w-full bg-[#131411] border border-[#2a2a27] focus:border-[#ffb77a] px-3.5 py-2.5 text-sm text-[#e5e2dd] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-xs text-[#d1c4be] uppercase tracking-wider">
                    合作項目領域
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#131411] border border-[#2a2a27] focus:border-[#ffb77a] px-3.5 py-2.5 text-sm text-[#e5e2dd] outline-none transition-colors"
                  >
                    <option value="全案五合一合作 Full 5-in-1">☕️ 全案五合一合作 Full 5-in-1</option>
                    <option value="2D平面插畫 Illustration">🎨 2D 平面插畫 Illustration</option>
                    <option value="視覺設計與品牌包裝 Design">📐 視覺設計與品牌包裝 Design</option>
                    <option value="攝影寫真與底片調色 Photography">📷 攝影寫真與底片調色 Photography</option>
                    <option value="動態影像與節奏剪輯 Video">🎬 動態影像與節奏剪輯 Video</option>
                    <option value="音樂編曲與聲音設計 Audio">🎵 音樂編曲與聲音設計 Audio</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-xs text-[#d1c4be] uppercase tracking-wider">
                    專案預算區間
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#131411] border border-[#2a2a27] focus:border-[#ffb77a] px-3.5 py-2.5 text-sm text-[#e5e2dd] outline-none transition-colors"
                  >
                    <option value="NT$ 15,000 - 30,000">NT$ 15,000 - 30,000</option>
                    <option value="NT$ 30,000 - 80,000">NT$ 30,000 - 80,000</option>
                    <option value="NT$ 80,000 - 150,000">NT$ 80,000 - 150,000</option>
                    <option value="NT$ 150,000+">NT$ 150,000+ (大型全案統籌)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-code text-xs text-[#d1c4be] uppercase tracking-wider">
                  專案需求概述與預計時程 *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="請簡單描述專案背景、預計交付成果與期望完成時間..."
                  className="w-full bg-[#131411] border border-[#2a2a27] focus:border-[#ffb77a] p-3 text-sm text-[#e5e2dd] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-label-code text-[11px] text-[#9a8e89]">
                  RESPONSE TIME: WITHIN 24 HOURS
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#ffb77a] hover:bg-[#e24605] text-[#4c2700] hover:text-white font-label-caps text-xs uppercase tracking-wider font-bold transition-all shadow-[2px_2px_0px_0px_#18110d] flex items-center gap-2"
                >
                  <span>發送委託信件</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
