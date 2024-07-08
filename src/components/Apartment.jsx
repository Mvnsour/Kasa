import { apartmentList } from '../datas/ApartmentList'
import ApartmentCard from './ApartmentCard'
import '../styles/Apartment.css'

function Apartment() {
  return (
    <ul>
      {apartmentList.map((apartment) => (
        <li className="apartment-list" key={apartment.id}>
          <ApartmentCard apartment={apartment} />
        </li>
      ))}
    </ul>
  )
}

export default Apartment
