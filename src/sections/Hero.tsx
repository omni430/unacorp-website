import { ChevronRight } from 'lucide-react'

const AREAS = [
  {
    eng: 'Fashion & Textile',
    kor: '패션 · 텍스타일',
    href: '#apparel',
  },
  {
    eng: 'Bio & Clean Energy',
    kor: '바이오 · 클린에너지',
    href: '#biolng',
  },
  {
    eng: 'Low Carbon Materials',
    kor: '저탄소 소재',
    href: '#apparel',
  },
  {
    eng: 'Energy Development & Trading',
    kor: '에너지 개발 · 트레이딩',
    href: '#contact',
  },
]

export default function Hero() {
  return (
    <section id="top" className="bg-black">
      <div className="relative flex min-h-[92vh] flex-col overflow-hidden">
        <img
          src="images/hero.jpg"
          alt="UNA Corporation 사업 영역"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-10 text-center md:pt-32">
          <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase sm:text-sm">
            UNA Corporation — 4 Business Areas
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl">
            4개의 사업, 하나의 미래
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
            유나코아퍼레이션은 패션·텍스타일, 바이오·클린에너지, 저탄소 소재,
            에너지 개발·트레이딩의 4개 사업 영역으로 글로벌 친환경 시장을 선도합니다.
          </p>

          {/* 4대 사업 영역 */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a, i) => (
              <a
                key={a.eng}
                href={a.href}
                className="group rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-md transition-colors hover:border-emerald-300/60 hover:bg-white/20 sm:p-5"
              >
                <span className="text-xs font-semibold tracking-widest text-emerald-300/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 text-sm font-semibold leading-snug tracking-wide text-white">
                  {a.eng}
                </p>
                <p className="mt-1 text-sm text-white/70">{a.kor}</p>
                <ChevronRight
                  size={16}
                  className="mt-3 text-emerald-300 transition-transform group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-8">
            <a
              href="#biolng"
              className="inline-flex items-center gap-0.5 text-lg text-white transition-opacity hover:opacity-70"
            >
              사업 영역 보기
              <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-0.5 text-lg text-white transition-opacity hover:opacity-70"
            >
              사업 문의
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
