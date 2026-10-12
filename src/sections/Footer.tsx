import { ChevronRight, Mail } from 'lucide-react'

const FOOTER_COLS = [
  {
    title: '사업',
    links: [
      { label: 'BioLNG 소개', href: '#biolng' },
      { label: '생산 공정', href: '#process' },
      { label: '필요성 · 장점', href: '#value' },
      { label: '활용처', href: '#applications' },
    ],
  },
  {
    title: '패션 · 소재',
    links: [{ label: '사업 소개', href: '#apparel' }],
  },
  {
    title: '회사',
    links: [
      { label: '회사소개', href: '#about' },
      { label: '뉴스', href: '#news' },
      { label: '문의', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-12">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]">
              <img src="images/logo-symbol-navy.png" alt="" className="h-6 w-6" />
              (주)유나코아퍼레이션
            </p>
            <p className="mt-1 text-[11px] tracking-wide text-[#86868b]">UNA Corporation</p>
            <p className="mt-3 text-xs leading-relaxed text-[#6e6e73]">
              패션·텍스타일, 바이오·클린에너지, 저탄소 소재, 에너지 개발·트레이딩의
              4개 사업 영역을 운영하는 친환경 에너지·소재 기업입니다.
            </p>
            <a
              href="mailto:contact@unacorporation.com"
              className="mt-4 inline-flex items-center gap-1 text-xs text-[#0066cc] hover:underline"
            >
              <Mail size={12} />
              contact@unacorporation.com
            </a>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-[#1d1d1f]">{col.title}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      className="inline-flex items-center gap-0.5 text-xs text-[#424245] hover:text-[#1d1d1f] hover:underline"
                    >
                      {l.label}
                      <ChevronRight size={10} className="text-[#86868b]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#d2d2d7] pt-5">
          <p className="text-xs text-[#6e6e73]">
            (주)유나코아퍼레이션 · 서울특별시 강남구 논현로 4길 43, 302호
          </p>
          <p className="mt-2 text-xs text-[#86868b]">
            Copyright © {new Date().getFullYear()} (주)유나코아퍼레이션. 모든 권리 보유. ·
            대한민국 · Toward a Circular, Carbon-Neutral Future ·{' '}
            <a href="news-admin.html" className="hover:text-[#1d1d1f] hover:underline">
              관리자
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
