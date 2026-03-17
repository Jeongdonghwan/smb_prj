import ServiceDetail from '../components/services/ServiceDetail'
import { services } from '../data/services'

function Blog() {
  const service = services.find((s) => s.id === 'blog')
  return <ServiceDetail service={service} />
}

export default Blog
