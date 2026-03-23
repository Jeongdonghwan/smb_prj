import { Link } from 'react-router-dom'

function Logo({ className = '', size = 'default' }) {
  const sizeClasses = {
    small: 'h-14',
    default: 'h-10 md:h-12',
    large: 'h-20'
  }

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img
        src="/images/logo.png"
        alt="KIDC 한국인터넷정보통신"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </Link>
  )
}

export default Logo
