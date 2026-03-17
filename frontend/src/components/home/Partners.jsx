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

  return (
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center scroll-animate">
          <span className="badge-primary mb-4">AWARDS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            전문성과 기술력을 인정받은<br />
            <span className="gradient-text">(주)한국인터넷정보통신</span>과 함께 하세요
          </h2>
          <p className="text-gray-600 mb-10">
            다수의 공인 인증과 수상 경력으로 검증된 마케팅 전문 기업입니다
          </p>
        </div>

        <div className="scroll-animate flex justify-center">
          <img
            src="/images/awards.png"
            alt="KIDC 수상경력 - 한국 소비자 만족도평가 1위, 벤처기업인증, 특허, 기업부설연구소"
            className="max-w-full md:max-w-4xl w-full h-auto rounded-xl shadow-soft"
          />
        </div>
      </div>
    </section>
  )
}

export default Partners
