export default function Greeting() {
  return (
    <section id="greeting" className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-[#6e6e73] uppercase">
            CEO Message
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
            대표이사 인사말
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {/* 도입 */}
          <p className="text-xl font-semibold leading-relaxed text-[#1d1d1f] md:text-2xl">
            지속가능한 미래와 더 나은 일상을 만들어가는 기업, 유나코아퍼레이션
          </p>
          <p className="mt-6 text-base leading-loose text-[#424245] md:text-lg">
            안녕하십니까,
            <br />
            유나코아퍼레이션 대표이사 박성희입니다.
          </p>
          <p className="mt-4 text-base leading-loose text-[#424245] md:text-lg">
            유나코아퍼레이션 홈페이지를 찾아주신 고객 여러분과 파트너사 관계자 여러분께 진심으로
            감사의 말씀을 드립니다. 급변하는 글로벌 환경과 탄소중립이라는 시대적 과제 속에서,
            유나코아퍼레이션은 지속가능한 에너지 솔루션과 일상의 가치를 높이는 라이프스타일
            비즈니스를 두 축으로 미래 성장을 준비해 가고 있습니다.
          </p>

          {/* BioLNG */}
          <h3 className="mt-12 text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl">
            깨끗한 지구를 위한 에너지 전환, BioLNG와 청정메탄올
          </h3>
          <p className="mt-4 text-base leading-loose text-[#424245] md:text-lg">
            기후위기 대응과 친환경 에너지 전환은 이제 선택이 아닌 필수가 되었습니다.
            유나코아퍼레이션은 탄소 배출 저감과 자원 순환을 실현하는 차세대 청정 연료인 BioLNG,
            청정메탄올 사업을 적극적으로 추진하고 있습니다. 안정적인 공급망 구축과 체계적인 사업
            개발을 통해 산업과 해운, 수송 부문의 탈탄소를 지원하며, 지속가능한 에너지 생태계를
            만들어 가는 든든한 동반자가 되겠습니다.
          </p>

          {/* 의류 사업 */}
          <h3 className="mt-12 text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl">
            기본과 신뢰를 바탕으로 한 의류 사업
          </h3>
          <p className="mt-4 text-base leading-loose text-[#424245] md:text-lg">
            사람들의 가장 가까운 일상과 맞닿아 있는 의류 사업 부문에서는 우수한 품질과 차별화된
            기획력을 바탕으로 고객의 라이프스타일에 자연스럽게 스며드는 가치를 제안합니다.
            변화하는 시장 트렌드에 기민하게 대응함과 동시에, 책임 있는 제품 공급과 고객 중심의
            품질 경영을 지켜가고 있습니다.
          </p>

          {/* 결어 */}
          <p className="mt-12 text-base leading-loose text-[#424245] md:text-lg">
            유나코아퍼레이션은 앞으로도 현실에 안주하지 않고 끊임없는 도전과 전문성을 바탕으로
            고객과 사회가 신뢰할 수 있는 기업으로 성장하겠습니다. 여러분의 따뜻한 관심과 성원을
            부탁드리며, 가정과 일터에 늘 건강과 번영이 함께하시기를 기원합니다.
            <br />
            감사합니다.
          </p>

          {/* 서명 */}
          <div className="mt-12 flex items-center justify-end gap-3 border-t border-[#d2d2d7] pt-8">
            <img src="images/logo-symbol-navy.png" alt="" className="h-9 w-9" />
            <p className="text-lg font-semibold text-[#1d1d1f]">
              유나코아퍼레이션 대표이사 <span className="text-xl">박성희</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
