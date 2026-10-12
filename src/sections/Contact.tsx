import { ChevronRight, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24 md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-[#a1a1a6] uppercase">Contact</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          함께 만들 준비가
          <br />
          되셨나요?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
          BioLNG 도입 상담, 의류 소재 소싱, 투자 및 파트너십 제안까지 어떤 문의든 환영합니다.
        </p>

        <a
          href="mailto:contact@unacorporation.com"
          className="mt-8 inline-flex max-w-full items-center gap-2 break-all text-xl font-semibold text-[#2997ff] hover:underline sm:text-2xl md:text-3xl"
        >
          <Mail size={26} className="shrink-0" />
          <span className="text-left">contact@unacorporation.com</span>
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {['BioLNG 도입 상담', '수소 사업 협력', '의류 소재 소싱', '투자 · 파트너십'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#a1a1a6]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="mailto:contact@unacorporation.com"
          className="mt-10 inline-flex items-center gap-0.5 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black transition-opacity hover:opacity-80"
        >
          이메일 보내기
          <ChevronRight size={18} />
        </a>

        <p className="mt-10 flex flex-col items-center justify-center gap-1.5 text-sm text-[#a1a1a6] sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-emerald-400" />
            (주)유나코아퍼레이션
          </span>
          <span>서울특별시 강남구 논현로 4길 43, 302호</span>
        </p>
      </div>
    </section>
  )
}
