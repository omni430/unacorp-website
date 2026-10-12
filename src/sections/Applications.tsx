import { ChevronRight } from 'lucide-react'

const APPS = [
  {
    image: 'images/app-ship.jpg',
    tag: 'Green Shipping',
    title: '선박용 연료',
    desc: '기존 LNG 추진선에 그대로 적용 가능한 해운 탈탄소의 최적 해답. IMO 온실가스 규제 대응과 항만 미세먼지 저감을 동시에.',
    wide: true,
  },
  {
    image: 'images/app-hydrogen.jpg',
    tag: 'Hydrogen Feedstock',
    title: '수소 제조',
    desc: '수소 제조 공정(SMR)의 소화제로 활용해 블루·그린 수소보다 빠르고 경제적으로 탄소중립 수소를 생산합니다.',
    wide: false,
  },
  {
    image: 'images/app-mobility.jpg',
    tag: 'H₂ Mobility',
    title: '수소 모빌리티',
    desc: '충전 인프라가 부족한 지역에서도 수소 연료전지 모빌리티의 안정적인 원료 공급원이 됩니다.',
    wide: false,
  },
  {
    image: 'images/app-factory.jpg',
    tag: 'Industrial Decarbonization',
    title: '산업체 탈탄소',
    desc: '시멘트·철강·화학 등 공정 연료를 BioLNG로 전환해 CBAM 비용 절감과 탈탄소를 실현합니다.',
    wide: false,
  },
  {
    image: 'images/app-rocket.jpg',
    tag: 'Rocket Propellant',
    title: '로켓 연료',
    desc: '극저온 고순도 메탄은 고성능 로켓 추진 연료로 우주 발사 산업의 차세대 연료입니다.',
    wide: false,
  },
]

export default function Applications() {
  return (
    <section id="applications" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="whitespace-nowrap text-center text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl md:text-6xl">
          BioLNG가 열어가는 세계
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[#6e6e73]">
          바다 위 선박에서 우주의 로켓까지, 5대 활용 분야.
        </p>

        {/* Apple 스타일 프로모 타일 그리드 */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {APPS.map((app) => (
            <div
              key={app.title}
              className={`group relative overflow-hidden rounded-3xl bg-[#f5f5f7] ${
                app.wide ? 'md:col-span-2 h-[400px] md:h-[520px]' : 'h-[400px] md:h-[420px]'
              }`}
            >
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent px-5 pt-6 text-center md:px-10 md:pt-10">
                <p className="text-[11px] font-semibold tracking-widest text-[#0066cc] uppercase md:text-xs">
                  {app.tag}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
                  {app.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-[#6e6e73] md:text-sm">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA 타일 */}
          <div className="flex h-[420px] flex-col items-center justify-center rounded-3xl bg-[#f5f5f7] px-8 text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
              새로운 활용처를
              <br />
              찾고 계신가요?
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6e6e73] md:text-base">
              귀사의 산업에 맞는 BioLNG 도입 솔루션을 제안해 드립니다.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-0.5 rounded-full bg-[#0066cc] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077ed]"
            >
              도입 상담 신청
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
