import ServiceDetail from '../components/services/ServiceDetail'
import { services } from '../data/services'

function Youtube() {
  const service = services.find((s) => s.id === 'youtube')
  return <ServiceDetail service={service} />
}

export default Youtube
