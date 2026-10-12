import { ChevronRight, Recycle, Globe2, Handshake } from 'lucide-react'

const VALUES = [
  { icon: Recycle, title: '순환 경제', desc: '유기성 폐기물에서 출발한 에너지와 소재로 자원의 순환 구조를 만듭니다.' },
  { icon: Globe2, title: '글로벌 탄소중립', desc: '해운, 산업, 모빌리티 전 분야의 탄소 저감 솔루션을 제안합니다.' },
  { icon: Handshake, title: '오픈 파트너십', desc: '기술·생산·수요를 연결하는 통합 비즈니스 모델로 함께 성장합니다.' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-[#6e6e73] uppercase">
          UNA Corporation
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
          버려지는 것에서 시작하는
          <br />
          에너지의 순환
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73] md:text-xl">
          (주)유나코아퍼레이션은 <span className="text-[#1d1d1f]">BioLNG 사업</span>과{' '}
          <span className="text-[#1d1d1f]">의류 소재 사업</span>을 두 축으로 하는 친환경 에너지·소재
          기업입니다. 폐기물에서 만든 바이오메탄을 액화해 세상에 공급하고, 트렌드에 맞는 원단을
          개발·소싱해 국내외 브랜드에 소재 기획으로 제안합니다.
        </p>
        <div className="mt-6 flex items-center justify-center gap-8">
          <a
            href="#biolng"
            className="inline-flex items-center gap-0.5 text-lg text-[#0066cc] hover:underline"
          >
            BioLNG 사업 보기
            <ChevronRight size={18} />
          </a>
          <a
            href="#apparel"
            className="inline-flex items-center gap-0.5 text-lg text-[#0066cc] hover:underline"
          >
            의류 소재 사업
            <ChevronRight size={18} />
          </a>
        </div>

        {/* 가치 3종 */}
        <div className="mt-16 grid gap-4 text-left md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl bg-[#f5f5f7] p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d1d1f] text-white">
                <v.icon size={20} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#1d1d1f]">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
