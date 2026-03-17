import ServiceDetail from '../components/services/ServiceDetail'
import { services } from '../data/services'

function Homepage() {
  const service = services.find((s) => s.id === 'homepage')
  return <ServiceDetail service={service} />
}

export default Homepage
