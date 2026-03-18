import { Link } from 'react-router-dom'
import Logo from './Logo'
import { services } from '../../data/services'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <Logo className="text-white mb-4" />
            <p className="text-sm text-gray-400 mb-4">
              온라인 마케팅 전문 대행사<br />
              KIDC와 함께 성장하세요.
            </p>
            <div className="text-sm space-y-1">
              <p>전화: 1566-2137</p>
              <p>이메일: manager@inter114.kr</p>
            </div>
            <a
              href="https://pf.kakao.com/_xjxavxhX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-medium rounded-lg hover:bg-yellow-300 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.56-.99 3.77 0 0-.02.17.09.23.11.07.24.02.24.02.31-.04 3.66-2.39 4.24-2.8.57.08 1.16.13 1.77.13 5.52 0 10-3.58 10-7.95C22 6.58 17.52 3 12 3z"/>
              </svg>
              카카오톡 상담
            </a>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 상세 정보 */}
          <div>
            <h4 className="text-white font-semibold mb-4">회사 정보</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>상호: 주식회사한국인터넷정보통신</li>
              <li>대표자: 방진성</li>
              <li>사업자등록번호: 864-81-02572</li>
              <li>주소: 경기도 김포시 고촌읍 김포대로 328</li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} KIDC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
