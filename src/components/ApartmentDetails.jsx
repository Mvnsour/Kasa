import { useParams } from 'react-router-dom'

function ApartmentDetails() {
  const { id } = useParams()
  return <div>Apartment n°{id}</div>
}

export default ApartmentDetails
