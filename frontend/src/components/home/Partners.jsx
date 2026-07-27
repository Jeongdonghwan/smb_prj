import { useEffect, useRef } from 'react'

function Partners() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
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
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div
          className="scroll-animate relative rounded-3xl overflow-hidden shadow-strong"
          style={{ background: 'linear-gradient(135deg, #6b2410 0%, #9a3412 55%, #c2410c 100%)' }}
        >
          {/* 배경 장식 */}
          <div className="absolute inset-0 pattern-dots opacity-[0.12]" />
          <div className="absolute -top-20 -right-16 w-80 h-80 rounded-full opacity-25"
               style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.45) 0%, transparent 70%)' }} />

          <div className="relative px-6 py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-center gap-10">
            {/* 텍스트 */}
            <div className="flex-1 text-center md:text-left">
              {/* 말풍선 배지 */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-amber-200 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">6개월의 꾸준한 관리가 매출을 바꿉니다!</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                소상공인 마케팅<br />
                <span className="text-amber-200">6개월 집중관리 패키지</span>
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
                리뷰부터 콘텐츠, 광고 세팅까지<br />
                6개월 동안 한 번에 관리하는 올인원 마케팅 패키지!
              </p>

              <button
                onClick={scrollToInquiry}
                className="group inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg
                           hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                무료 상담 신청
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* 확성기 아이콘 포인트 */}
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center animate-float">
                <svg className="w-20 h-20 md:w-24 md:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
