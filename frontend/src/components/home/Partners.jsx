import { useEffect, useRef } from 'react'

function Partners() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const items = sectionRef.current?.querySelectorAll('.scroll-animate')
    items?.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const scrollToInquiry = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div className="scroll-animate relative overflow-hidden rounded-[28px] bg-white border border-gray-100 shadow-[0_10px_45px_rgba(0,0,0,0.07)]">
          {/* 은은한 주황 배경 장식 */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-50" />
          <div className="absolute -left-16 -bottom-24 w-72 h-72 rounded-full bg-amber-50" />

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-8 items-center px-7 py-12 md:px-12 md:py-12">
            {/* 좌: 카피 */}
            <div className="text-center lg:text-left">
              {/* 말풍선 배지 */}
              <div className="relative inline-block mb-6">
                <span className="inline-block bg-gray-900 text-white text-sm md:text-base font-bold px-5 py-2.5 rounded-full shadow-md">
                  6개월의 꾸준한 관리가 매출을 바꿉니다!
                </span>
                <span className="absolute -bottom-1 left-8 w-3.5 h-3.5 bg-gray-900 rotate-45" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                <span className="text-gray-900">소상공인 마케팅</span>
                <br />
                <span className="text-primary-600">6개월 집중관리 패키지</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                리뷰부터 콘텐츠, 광고 세팅까지<br />
                6개월 동안 한 번에 관리하는 올인원 마케팅 패키지!
              </p>

              {/* 포함 항목 칩 */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 mb-8">
                {[
                  { label: '리뷰 관리', d: 'M11.48 3.5a.56.56 0 0 1 1.04 0l2.12 4.29 4.73.69a.56.56 0 0 1 .31.96l-3.42 3.33.81 4.71a.56.56 0 0 1-.82.59L12 15.9l-4.23 2.22a.56.56 0 0 1-.82-.59l.81-4.71-3.42-3.33a.56.56 0 0 1 .31-.96l4.73-.69 2.12-4.29Z' },
                  { label: '콘텐츠 제작', d: 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z' },
                  { label: '광고 세팅', d: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84' },
                  { label: '월간 리포트', d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 bg-primary-50 border border-primary-100 rounded-xl px-4 py-3">
                    <span className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.d} />
                      </svg>
                    </span>
                    <span className="text-gray-800 text-sm font-bold">{f.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToInquiry}
                className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
              >
                무료 상담 신청
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* 우: 폰 + 마케팅 일러스트 */}
            <div className="relative flex justify-center">
              {/* 배경 블롭 + 링 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-100/70 blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full border-2 border-primary-100" />

              {/* 폰 + 칩 그룹 */}
              <div className="relative">
              <div className="relative w-60 md:w-72 h-[460px] md:h-[520px] rounded-[2.6rem] bg-gray-900 p-3 shadow-2xl rotate-6">
                <div className="w-full h-full rounded-[1.7rem] bg-gradient-to-b from-primary-400 to-primary-600 overflow-hidden relative">
                  <div className="mx-auto mt-2.5 w-14 h-1.5 rounded-full bg-white/40" />
                  {/* 플레이스 카드 */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-48 md:w-56 bg-white rounded-xl shadow-lg p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-green-500 flex items-center justify-center text-white font-extrabold text-sm">N</div>
                      <div className="text-gray-900 text-xs font-bold">우리동네 맛집</div>
                    </div>
                    <div className="mt-2 text-amber-400 text-sm tracking-tight">★★★★★</div>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded w-full" />
                    <div className="mt-1.5 h-1.5 bg-gray-100 rounded w-2/3" />
                  </div>
                  {/* 하단 상승 그래프 */}
                  <svg className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-20 text-white/90" fill="none" viewBox="0 0 120 60">
                    <path d="M4 52 L34 34 L58 40 L88 16 L116 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M104 8 H116 V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* 확성기 칩 — 폰 좌상단에 겹치게 */}
              <div className="absolute -left-7 top-8 bg-white rounded-2xl shadow-xl p-3 -rotate-6">
                <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18a23.85 23.85 0 0 1 8.835 2.535M10.34 6.66a23.85 23.85 0 0 0 8.835-2.535m0 0c.79 1.756 1.23 3.704 1.23 5.755 0 2.05-.44 3.998-1.23 5.754" />
                </svg>
              </div>

              {/* ★ 평점 칩 — 폰 우측에 겹치게 */}
              <div className="absolute -right-8 top-28 bg-white rounded-full shadow-xl px-3.5 py-1.5 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.12 4.29 4.73.69a.56.56 0 0 1 .31.96l-3.42 3.33.81 4.71a.56.56 0 0 1-.82.59L12 15.9l-4.23 2.22a.56.56 0 0 1-.82-.59l.81-4.71-3.42-3.33a.56.56 0 0 1 .31-.96l4.73-.69 2.12-4.29Z" />
                </svg>
                <span className="text-gray-900 text-sm font-extrabold">4.9</span>
              </div>

              {/* 하트 칩 — 폰 우하단에 겹치게 */}
              <div className="absolute -right-4 bottom-10 w-11 h-11 bg-primary-500 rounded-full shadow-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.25 15.25 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.18 25.18 0 0 1-4.243 3.17 15.25 15.25 0 0 1-.384.219l-.022.012-.007.004a.752.752 0 0 1-.704 0Z" />
                </svg>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
