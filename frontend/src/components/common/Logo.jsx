import { Link } from 'react-router-dom'

function Logo({ className = '', size = 'default' }) {
  const sizeClasses = {
    small: 'h-14',
    default: 'h-[6.5rem] md:h-[7.8rem]',
    large: 'h-40'
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
