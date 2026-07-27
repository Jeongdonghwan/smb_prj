import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { useEffect, useRef } from 'react'
import { Icon } from '../icons'

// 메인 카드: 카드 이미지가 있는 5개 서비스
const mainServices = [
  { id: 'place', path: '/place', image: '/images/cards/place.png' },
  { id: 'blog', path: '/blog', image: '/images/cards/blog.png' },
  { id: 'youtube', path: '/youtube', image: '/images/cards/youtube.png' },
  { id: 'smartstore', path: '/smartstore', image: '/images/cards/smartstore.png' },
  { id: 'instagram', path: '/instagram', image: '/images/cards/instagram.png' },
]

// 미니 카드: 나머지 서비스
const subServiceIds = ['homepage', 'review', 'vbizring']

function ServiceCards() {
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

    const cards = sectionRef.current?.querySelectorAll('.scroll-animate')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const subServices = services.filter(s => subServiceIds.includes(s.id))

  return (
    <section id="services" className="section-padding bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* 배경 패턴 */}
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="relative">
        <div className="container-custom">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-primary-300 border border-white/10 mb-4">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              <span className="gradient-text-accent">전문 서비스</span>
              <span className="text-white">로</span>
              <br className="sm:hidden" /> 비즈니스를 성장시키세요
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              10년 경력의 마케팅 전문가가 귀사의 매출 성장을 책임집니다
            </p>
          </div>

          {/* 메인 서비스 카드 그리드 (이미지 카드 5개) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {mainServices.map((service, index) => (
              <Link
                key={service.id}
                to={service.path}
                className="scroll-animate group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.id}
                  className="w-full h-auto block group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>

          {/* 기타 서비스 카드 (메인과 동일한 카드 형식) */}
          <div className="mt-8">
            <p className="text-gray-500 text-sm text-center mb-6">기타 서비스</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {subServices.map((service, index) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="scroll-animate group relative flex flex-col bg-black border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gray-700 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  style={{ transitionDelay: `${(index + 5) * 0.1}s` }}
                >
                  <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                  <div className="mt-auto flex justify-center">
                    <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                      <Icon name={service.icon} className="w-14 h-14 text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 하단 CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              어떤 서비스가 필요한지 모르시겠나요?
            </p>
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            >
              무료 컨설팅 받기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
