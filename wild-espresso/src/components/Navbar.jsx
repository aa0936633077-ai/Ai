import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ onOpenContact }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: '首頁 Home' },
    { to: '/works', label: '精選作品 Works' },
    { to: '/about', label: '關於與技能 About' },
    { to: '/audio', label: '音樂專區 Audio' },
    { to: '/playground', label: '實驗室 Lab' },
    { to: '/contact', label: '聯絡 Contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#131411]/90 backdrop-blur-xl border-b border-[#2a2a27]">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex-shrink-0 bg-[#774001] border border-[#ffb77a]/40 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <span className="text-[#ffb77a] font-serif font-bold text-sm tracking-tighter">5:1</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ff5a1f]/20 to-transparent"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs tracking-widest text-[#e5e2dd] group-hover:text-[#ffb77a] transition-colors">
                WILD ESPRESSO
              </span>
              <span className="font-label-code text-[11px] text-[#ffb77a] tracking-wider leading-none mt-0.5">
                雲林野小孩
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.to)
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 font-label-caps text-xs transition-colors border ${
                    active
                      ? 'bg-[#20201d] text-[#ffb77a] border-[#ffb77a]/50'
                      : 'text-[#d1c4be] hover:text-[#e5e2dd] hover:bg-[#1c1c19] border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Top Right Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Live extraction status tag */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#1c1c19] border border-[#2a2a27]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e24605] animate-pulse"></span>
              <span className="font-label-code text-[11px] text-[#ffb77a] uppercase">9.2 BAR // ACTIVE</span>
            </div>

            <Link
              to="/contact"
              onClick={onOpenContact}
              className="h-9 px-4 flex items-center justify-center font-label-caps text-xs uppercase bg-[#d2c4bd] text-[#372f2a] hover:bg-[#ffb77a] hover:text-[#4c2700] transition-colors"
            >
              與我聯絡
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[#e5e2dd] hover:text-[#ffb77a] border border-[#2a2a27] bg-[#1c1c19]"
              aria-label="開啟行動導覽選單"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#18110d] border-b border-[#2a2a27] px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.to)
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 font-label-caps text-xs flex items-center justify-between border ${
                    active
                      ? 'bg-[#2a2a27] text-[#ffb77a] border-[#ffb77a]/60'
                      : 'text-[#d1c4be] hover:bg-[#20201d] border-[#2a2a27]/30'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              )
            })}
          </div>
        )}
      </header>
    </>
  )
}
