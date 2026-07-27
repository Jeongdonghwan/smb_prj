import { useEffect, useRef } from 'react'

function ClientLogos() {
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
    <section className="py-16 md:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center scroll-animate">
          <span className="badge-primary mb-4">CLIENTS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            대한민국의 크고 작은, 수 많은 기업들이<br />
            <span className="gradient-text">SMB(에스엠비)</span>와 함께하고 있습니다
          </h2>
        </div>

        <div className="scroll-animate flex justify-center mt-10">
          <img
            src="/images/partners.png"
            alt="SMB 파트너 기업"
            className="max-w-full md:max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
