const NAVY = '#0f385f'

type Team = { title: string; items: string[] }
type Division = {
  eng: string
  kor: string
  accent: boolean
  leader?: { name: string; title: string }
  teams: Team[]
}

function Line({ className = '' }: { className?: string }) {
  return <div className={`w-px bg-[#d2d2d7] ${className}`} />
}

function CeoCard() {
  return (
    <div
      className="w-full max-w-xs rounded-3xl px-8 py-7 text-center text-white shadow-sm"
      style={{ backgroundColor: NAVY }}
    >
      <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
        CEO · 대표이사
      </p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">박성희</p>
    </div>
  )
}

function DivisionCard({
  eng,
  kor,
  accent = false,
}: {
  eng: string
  kor: string
  accent?: boolean
}) {
  return (
    <div
      className={`w-full max-w-xs rounded-3xl px-5 py-5 text-center ${
        accent ? 'text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'
      }`}
      style={accent ? { backgroundColor: NAVY } : undefined}
    >
      <p
        className={`text-[11px] font-semibold tracking-widest uppercase ${
          accent ? 'text-white/60' : 'text-[#86868b]'
        }`}
      >
        {eng}
      </p>
      <p className="mt-1.5 text-base font-semibold tracking-tight md:text-lg">{kor}</p>
    </div>
  )
}

function TeamCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-full rounded-2xl bg-[#f5f5f7] p-4 text-center">
      <p className="text-sm font-semibold text-[#1d1d1f]">{title}</p>
      {items.length > 0 && (
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
          {items.map((i) => (
            <span
              key={i}
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1d1d1f]"
            >
              {i}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

const DIVISIONS: Division[] = [
  {
    eng: 'Corporate Management',
    kor: '경영관리본부',
    accent: false,
    teams: [
      { title: '전략 · 기획', items: [] },
      { title: '재무 · 관리', items: [] },
      { title: '인사 · 법무', items: [] },
    ],
  },
  {
    eng: 'Fashion & Low Carbon Materials',
    kor: '패션 · 저탄소 소재사업본부',
    accent: false,
    teams: [
      { title: '의류', items: ['코트 · 아우터'] },
      { title: '소재', items: ['울 · 캐시미어 · 특수모', '펜시 이중지 · 단직'] },
      { title: '저탄소 소재', items: ['저탄소 블랙카본', '저탄소 흑연'] },
    ],
  },
  {
    eng: 'Bio & Clean Energy',
    kor: '에너지사업본부',
    accent: true,
    leader: { name: '김기동', title: '부사장 · 에너지사업본부장' },
    teams: [
      { title: 'BioLNG · E-LNG', items: [] },
      { title: '청정수소', items: [] },
      { title: '청정메탄올', items: [] },
      { title: '청정암모니아', items: [] },
    ],
  },
]

const CAREER = [
  '한양대학교 화학공학 학사',
  '한국가스공사 가스연구원 — 천연가스자동차, LNG벙커링, 바이오에너지, 그린수소 생산 등 20여 년 연구 경력',
  '딜로이트컨설팅 — 수소 CoE(Center of Excellence), 수소 · 에너지 컨설팅',
  '아헤스 — 영업본부 전무(영업 및 신사업 개발)',
  '유나코아퍼레이션 — 부사장 · 에너지사업본부장(2026.10 ~ 현재)',
]

export default function OrgChart() {
  return (
    <section id="organization" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-[#6e6e73] uppercase">
            Organization
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
            유나코아퍼레이션을 이끄는 조직
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#6e6e73]">
            경영관리, 패션 · 저탄소 소재, 에너지 3개 본부 체계.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center">
          {/* 대표이사 */}
          <CeoCard />

          {/* 본부 분기 */}
          <Line className="h-10" />
          <div className="relative w-full max-w-5xl">
            {/* 모바일 세로 연결선: 세로로 쌓인 본부들을 하나로 연결 (md 미만만 표시) */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d2d2d7] md:hidden" />
            {/* 수평 분기선 (3개 본부 중심 연결, md 이상 표시) */}
            <div className="absolute left-1/6 right-1/6 top-0 hidden h-px bg-[#d2d2d7] md:block" />

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
              {DIVISIONS.map((d) => (
                <div key={d.eng} className="flex flex-col items-center">
                  <Line className="hidden h-10 md:block" />
                  <DivisionCard eng={d.eng} kor={d.kor} accent={d.accent} />
                  {d.leader && (
                    <>
                      <Line className="h-6" />
                      <div className="flex w-full max-w-xs items-center gap-3 rounded-2xl border border-[#d2d2d7] bg-white p-4">
                        <img
                          src="images/kidong-kim.jpg"
                          alt="김기동 부사장"
                          className="h-12 w-12 rounded-full object-cover object-top"
                        />
                        <div>
                          <p className="text-xs text-[#86868b]">{d.leader.title}</p>
                          <p className="text-base font-semibold text-[#1d1d1f]">{d.leader.name}</p>
                        </div>
                      </div>
                    </>
                  )}
                  <Line className="h-8" />
                  <div className="flex w-full max-w-xs flex-col gap-3">
                    {d.teams.map((t) => (
                      <TeamCard key={t.title} title={t.title} items={t.items} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 에너지사업본부장 프로필 */}
        <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl bg-[#f5f5f7]">
          <div className="grid md:grid-cols-[280px_1fr]">
            <img
              src="images/kidong-kim.jpg"
              alt="김기동 부사장"
              className="h-72 w-full object-cover object-top md:h-full"
            />
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold tracking-widest text-[#6e6e73] uppercase">
                Energy Division Leadership
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
                김기동 부사장
              </h3>
              <p className="mt-1 text-[#6e6e73]">
                에너지사업본부장 · BioLNG / E-LNG / 청정수소 / 청정메탄올 / 청정암모니아
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 text-sm leading-relaxed text-[#424245] md:text-base">
                {CAREER.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#86868b]" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[#86868b]">
                국무총리 표창(탄소중립 정책 추진 공로, 2024) · 환경부 장관상 2회
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
