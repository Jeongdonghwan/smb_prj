import ServiceDetail from '../components/services/ServiceDetail'
import { services } from '../data/services'

function Instagram() {
  const service = services.find((s) => s.id === 'instagram')
  return <ServiceDetail service={service} />
}

export default Instagram
