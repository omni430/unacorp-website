import { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: '회사소개', href: '#about' },
  { label: '인사말', href: '#greeting' },
  { label: '조직도', href: '#organization' },
  { label: 'BioLNG', href: '#biolng' },
  { label: '필요성 · 장점', href: '#value' },
  { label: '활용처', href: '#applications' },
  { label: '패션 · 소재', href: '#apparel' },
  { label: '뉴스', href: '#news' },
  { label: '문의', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#161617]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-11 max-w-[1100px] items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2" aria-label="UNA Corporation 홈">
          <img src="images/logo-symbol-white.png" alt="" className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-tight text-[#f5f5f7] hover:text-white">
            UNA Corporation
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-[#f5f5f7]/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-0.5 text-xs text-[#2997ff] transition-colors hover:text-white md:inline-flex"
        >
          사업 문의
          <ChevronRight size={12} />
        </a>

        <button
          className="text-[#f5f5f7] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#161617] px-6 py-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/5 py-3 text-sm text-[#f5f5f7]/90"
            >
              {item.label}
              <ChevronRight size={14} className="text-[#6e6e73]" />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
