import ServiceDetail from '../components/services/ServiceDetail'
import { services } from '../data/services'

function VBizRing() {
  const service = services.find((s) => s.id === 'vbizring')
  return <ServiceDetail service={service} />
}

export default VBizRing
