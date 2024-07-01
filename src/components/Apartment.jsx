import { apartmentList } from '../datas/ApartmentList'
import ApartmentCard from './ApartmentCard'

function Apartment() {
  return (
    <ul className="apartment-list">
      {apartmentList.map((apartment) => (
        <li key={apartment.id}>
          <ApartmentCard apartment={apartment} />
        </li>
      ))}
    </ul>
  )
}

export default Apartment
