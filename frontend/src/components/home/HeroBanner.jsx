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
    { number: '500+', label: '누적 고객사' },
    { number: '98%', label: '고객 만족도' },
    { number: '10년+', label: '업계 경험' },
    { number: '24h', label: '빠른 응대' },
  ]

  const partners = [
    '스마트스토어', '쿠팡', '네이버 플레이스', '카카오',
    '구글 애드', '메타', '당근마켓', '오늘의집'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배경 그라데이션 (공통 베이스) */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #112240 40%, #1a3355 70%, #1e3a5f 100%)' }} />

      {/* 데스크톱: 풀 배경 이미지 + 왼쪽 패널 오버레이 */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src="/images/hero.png"
          alt="KIDC 한국인터넷정보통신 사옥"
          className="w-full h-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[55%]" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(17,34,64,0.85) 60%, rgba(17,34,64,0.4) 85%, transparent 100%)' }} />

      {/* 모바일/태블릿: 건물 이미지 배경 + 그라데이션 */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/images/hero.png"
          alt=""
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.93) 0%, rgba(10,22,40,0.8) 40%, rgba(10,22,40,0.4) 70%, rgba(10,22,40,0.15) 100%)' }} />
      </div>

      {/* 콘텐츠 */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">현재 무료 상담 진행중</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              온라인 마케팅의<br />
              <span className="relative">
                <span className="gradient-text-accent">새로운 기준</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 3 150 3 298 10" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#06b6d4"/>
                      <stop offset="1" stopColor="#3b82f6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              스마트스토어, 쿠팡, 플레이스, 검색광고, 리뷰 마케팅까지<br className="hidden sm:block" />
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
