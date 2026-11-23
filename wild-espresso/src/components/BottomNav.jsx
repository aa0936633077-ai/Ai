import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()

  const tabs = [
    { to: '/', label: 'Home', icon: 'home' },
    { to: '/works', label: 'Works', icon: 'grid_view' },
    { to: '/about', label: 'About', icon: 'local_cafe' },
    { to: '/audio', label: 'Audio', icon: 'graphic_eq' },
    { to: '/contact', label: 'Contact', icon: 'send' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#131411]/95 backdrop-blur-xl border-t border-[#2a2a27] shadow-[0_-1px_12px_rgba(0,0,0,0.4)]">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.to)
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors ${
                active ? 'text-[#ffb77a]' : 'text-[#d1c4be] hover:text-[#e5e2dd]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              <span className="font-label-caps text-[10px] uppercase mt-1 tracking-wider">{tab.label}</span>
              {active && <span className="w-1.5 h-0.5 bg-[#ffb77a] mt-0.5"></span>}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
