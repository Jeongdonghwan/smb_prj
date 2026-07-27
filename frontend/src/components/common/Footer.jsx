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
            <Logo className="text-white mb-2" size="small" />
            <p className="text-sm text-gray-400 mb-4">
              소상공인 온라인 마케팅 전문 대행사<br />
              SMB와 함께 성장하세요.
            </p>
            <div className="text-sm space-y-1">
              <p>고객센터: 1566-2137</p>
            </div>
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
              <li>상호: 에스엠비(주)</li>
              <li>대표이사: 방성문</li>
              <li>사업자등록번호: 832-81-01157</li>
              <li>고객센터: 1566-2137</li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SMB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
