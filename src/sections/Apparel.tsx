import { ChevronRight, TrendingUp, Globe, PackageCheck, History, Sparkles } from 'lucide-react'

const MATERIALS = ['울', '캐시미어', '특수모', '펜시 이중지', '단직']

const FUTURE = [
  {
    title: '저탄소 블랙카본',
    desc: '저탄소 공정으로 생산되는 차세대 블랙카본 소재의 개발과 제안.',
  },
  {
    title: '저탄소 흑연',
    desc: '친환경 흑연 소재를 활용한 새로운 원단 가치의 발굴.',
  },
]

const FLOW = [
  { icon: TrendingUp, title: '패션 트렌드 분석', desc: '흐름에 맞는 소재를 먼저 읽어냅니다.' },
  { icon: Globe, title: '중국 · 한국 개발 · 소싱', desc: '양국 생산 네트워크를 통한 원단 소싱.' },
  { icon: PackageCheck, title: '브랜드 공급', desc: '국내외 브랜드에 원단 판매와 소재 기획을 제공.' },
]

export default function Apparel() {
  return (
    <section id="apparel" className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* 소개 + 이미지 */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#6e6e73] uppercase">
              Apparel Materials
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
              패션의 흐름을 읽는
              <br />
              소재 기획 회사
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#6e6e73]">
              (주)유나코아퍼레이션은 패션 트렌드를 분석하여 흐름에 맞는 소재를 중국 및 한국에서
              개발·소싱하고, 국내외 브랜드에 원단을 판매하며 소재 기획을 수행하는 회사입니다.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-0.5 text-lg text-[#0066cc] hover:underline"
            >
              소싱 · 기획 문의
              <ChevronRight size={18} />
            </a>

            <div className="mt-10 flex flex-col gap-3">
              {FLOW.map((f) => (
                <div key={f.title} className="flex items-start gap-4 rounded-2xl bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f]">
                    <f.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1d1d1f]">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#6e6e73]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="images/apparel.jpg"
              alt="울 · 캐시미어 코트 원단"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* 전문 분야 + 미래 소재 */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {/* 십여 년의 실적 */}
          <div className="rounded-3xl bg-white p-8 md:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f]">
              <History size={20} />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-3xl">
              십여 년의 전문성.
            </h3>
            <p className="mt-3 leading-relaxed text-[#6e6e73]">
              지난 십여 년간 숙녀복 코트·아우터용 원단을 개발·생산·공급해 왔습니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {MATERIALS.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-medium text-[#1d1d1f]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* 미래 소재 */}
          <div className="rounded-3xl p-8 text-white md:p-10" style={{ backgroundColor: '#0f385f' }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
              <Sparkles size={20} />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
              새로운 소재, 새로운 성장.
            </h3>
            <p className="mt-3 leading-relaxed text-white/70">
              앞으로도 신소재의 개발과 제안으로 성장을 이어가겠습니다.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {FUTURE.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white/10 p-5">
                  <p className="font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
