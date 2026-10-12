import {
  CloudFog,
  Flame,
  FlaskConical,
  Snowflake,
  Truck,
  ShieldCheck,
  Layers,
  Warehouse,
  Wind,
  Plug,
  Award,
} from 'lucide-react'

const PROCESS = [
  { icon: CloudFog, label: '유기성 폐기물 · 바이오매스', desc: '음식물·축산 폐기물, 농·임업 잔재물 수거' },
  { icon: Flame, label: '바이오가스 생산', desc: '혐기성 소화(발효) 공정으로 바이오가스 발생' },
  { icon: FlaskConical, label: '바이오메탄 정제', desc: 'CO₂·불순물 분리 후 메탄 90% 이상 정제' },
  { icon: Snowflake, label: '액화 (-162°C)', desc: '극저온 냉각으로 바이오메탄을 액체로 액화' },
  { icon: Truck, label: 'BioLNG 공급', desc: '저장·운송·주입 인프라를 통해 수요처 공급' },
]

const NECESSITY = [
  {
    title: '글로벌 탄소중립 규제 강화',
    desc: 'IMO 해운 온실가스 규제, EU 탄소국경조정제도(CBAM) 등으로 화석연료 전환이 산업 생존의 필수 조건이 되었습니다.',
  },
  {
    title: '화석연료 의존 구조의 한계',
    desc: '배출권 비용 상승과 공급 불안정이 커지며, 재생 가능한 대체 연료 확보가 시급합니다.',
  },
  {
    title: '바이오가스의 물리적 한계',
    desc: '기체 바이오가스는 부피가 커 저장·운송이 어렵습니다. 액화해야 실용적인 연료 공급이 가능합니다.',
  },
  {
    title: '재생에너지 변동성의 보완',
    desc: '태양광·풍력의 간헐성을 보완해 계절·시간과 관계없이 안정적인 탄소중립 에너지를 공급합니다.',
  },
]

const ADVANTAGES = [
  { icon: ShieldCheck, title: '생명주기 탄소중립', desc: '유기성 폐기물을 원료로 하므로 연소 CO₂를 실질 상쇄하는 Net Zero 연료입니다.' },
  { icon: Layers, title: '압도적 에너지 밀도', desc: '액화 시 부피가 기체 대비 약 1/600로 줄어 저장·운송 효율이 극대화됩니다.' },
  { icon: Warehouse, title: '기존 LNG 인프라 활용', desc: '천연가스 액화 설비와 저장탱크, 충전소, 선박 엔진을 그대로 활용합니다.' },
  { icon: Wind, title: '뛰어난 연소 친환경성', desc: '경유 대비 NOx와 미세먼지 배출이 낮아 항만 도시의 대기 질을 개선합니다.' },
  { icon: Plug, title: '수소 제조 원료', desc: '액화 상태로 운송·저장이 용이해 수소 제조(SMR)의 효율적 원료가 됩니다.' },
  { icon: Award, title: '부가가치 극대화', desc: '탄소 크레딧과 바이오 연료 의무 혼합 제도로 환경 가치를 수익으로 연결합니다.' },
]

export default function BioLNG() {
  return (
    <>
      {/* BioLNG 소개 (밝은 배경) */}
      <section id="biolng" className="bg-[#f5f5f7] py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="text-sm font-semibold tracking-widest text-[#6e6e73] uppercase">
            BioLNG
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
            바이오메탄을 액화한
            <br />
            차세대 친환경 연료
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73] md:text-xl">
            <span className="text-[#1d1d1f]">BioLNG는 바이오메탄을 극저온으로 액화한 연료</span>
            입니다. 음식물 폐기물, 축산 분뇨, 농·임업 부산물에서 나온 바이오가스를 정제해
            바이오메탄을 얻고, 이를 -162°C로 냉각·액화합니다. 천연가스와 동일한 물성이라 기존
            LNG 인프라에 바로 적용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 생산 공정 */}
      <section id="process" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6">
          <h3 className="whitespace-nowrap text-center text-[22px] font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl md:text-5xl">
            BioLNG가 만들어지는 5단계
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[#6e6e73]">
            폐기물에서 연료가 되기까지의 여정.
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <div key={step.label} className="rounded-3xl bg-[#f5f5f7] p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d1d1f] text-white">
                    <step.icon size={20} />
                  </span>
                  <span className="text-4xl font-semibold text-[#1d1d1f]/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="mt-5 font-semibold leading-snug text-[#1d1d1f]">{step.label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 필요성 (검정 섹션) */}
      <section id="value" className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6">
          <h3 className="text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
            왜 BioLNG인가
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[#a1a1a6]">
            규제와 경제성, 양쪽에서 답이 있습니다.
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {NECESSITY.map((n, i) => (
              <div key={n.title} className="rounded-3xl bg-[#161617] p-8 md:p-10">
                <span className="text-5xl font-semibold text-white/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-4 text-xl font-semibold text-white md:text-2xl">{n.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#a1a1a6] md:text-base">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 장점 (밝은 배경) */}
      <section className="bg-[#f5f5f7] py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6">
          <h3 className="text-center text-3xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
            압도적인 6가지 장점
          </h3>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="rounded-3xl bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f]">
                  <a.icon size={20} />
                </span>
                <h4 className="mt-5 text-xl font-semibold text-[#1d1d1f]">{a.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
