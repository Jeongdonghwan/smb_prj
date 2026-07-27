import { useEffect, useState } from 'react'

function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry-form')
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { number: '12,765', label: '누적 고객사' },
    { number: '98%', label: '고객 만족도' },
    { number: '10년+', label: '업계 경험' },
    { number: '24h', label: '빠른 응대' },
  ]

  const partners = [
    '올인원 마케팅', '당근마켓', '네이버 플레이스', '검색광고',
    '리뷰 마케팅', '블로그', '인스타그램', '유튜브'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배경 사진 */}
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
        alt="온라인 마케팅"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* 중립 다크 오버레이 (좌 진하게 → 우 옅게, 사진 살림) */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(10,10,12,0.88) 0%, rgba(15,15,18,0.72) 40%, rgba(20,20,24,0.45) 68%, rgba(20,20,24,0.25) 100%)' }} />

      {/* 우측 글래스 카드 스택 (데스크톱) */}
      <div className={`hidden lg:block absolute right-8 xl:right-16 top-1/2 w-[420px] xl:w-[480px] pointer-events-none transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-[-42%]'}`}>
        {/* 배지: ONLINE MARKETING 전문기업 */}
        <div className="absolute -top-6 -left-8 z-20 bg-primary-500 text-white rounded-full px-5 py-2.5 text-base font-bold shadow-lg -rotate-3">
          ONLINE MARKETING 전문기업
        </div>

        {/* 카드 1: 플레이스 리뷰 카드 */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white font-extrabold text-2xl flex-shrink-0">N</div>
            <div className="min-w-0">
              <div className="text-white font-bold text-xl">우리동네 맛집</div>
              <div className="flex items-center gap-2">
                <span className="text-amber-300 text-lg tracking-tight">★★★★★</span>
                <span className="text-white/80 text-lg font-bold">4.9</span>
              </div>
            </div>
            <span className="ml-auto bg-green-500/20 text-green-300 text-sm font-bold px-3 py-1 rounded-full">노출 1위</span>
          </div>
          <div className="mt-5 h-2.5 bg-white/15 rounded-full w-full" />
          <div className="mt-2.5 h-2.5 bg-white/15 rounded-full w-2/3" />
        </div>

        {/* 카드 2: 방문자 그래프 카드 */}
        <div className="relative z-10 ml-16 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 shadow-2xl rotate-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/80 text-base font-medium">이번 달 방문자</span>
            <span className="text-amber-300 text-xl font-extrabold">+128%</span>
          </div>
          <svg className="w-full h-20 text-white/90" fill="none" viewBox="0 0 220 56" preserveAspectRatio="none">
            <path d="M4 48 L48 34 L92 40 L140 18 L216 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M198 6 H216 V24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 md:py-32">
        <div className="max-w-2xl">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">현재 무료 상담 진행중</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              온라인 마케팅의<br />
              <span className="inline-block bg-primary-500 text-white px-4 py-1 rounded-lg mt-3 shadow-lg">새로운 기준</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              올인원, 당근, 플레이스, 검색광고, 리뷰 마케팅까지<br className="hidden sm:block" />
              <strong className="text-white">10년 경력 전문가</strong>가 직접 운영하는 맞춤형 솔루션
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToInquiry}
                className="group relative bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg
                           hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  무료 상담 신청하기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <a
                href="#services"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg
                           hover:bg-white/10 hover:border-white/50 transition-all duration-300
                           flex items-center justify-center gap-2"
              >
                서비스 알아보기
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* 신뢰 지표 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center lg:text-left transition-all duration-700`}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 모바일 전용: 컴팩트 글래스 카드 */}
            <div className="lg:hidden mt-10 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                <span className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">N</span>
                <div className="text-left">
                  <div className="text-white text-sm font-bold leading-tight">우리동네 맛집</div>
                  <div className="text-amber-300 text-xs">★★★★★ <span className="text-white/80 font-bold">4.9</span></div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                <svg className="w-7 h-7 text-white/90 flex-shrink-0" fill="none" viewBox="0 0 32 32">
                  <path d="M3 26 L11 17 L17 21 L29 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 7 H29 V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-left">
                  <div className="text-white/80 text-xs leading-tight">이번 달 방문자</div>
                  <div className="text-amber-300 text-sm font-extrabold">+128%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 파트너 로고 롤링 배너 */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 py-4 z-20">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-8 text-white/50 font-medium"
              >
                <span className="w-2 h-2 bg-white/30 rounded-full mr-3" />
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20">
        <span className="text-white/50 text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
