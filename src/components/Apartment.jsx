import apartmentList from '../datas/ApartmentList'
import ApartmentCard from './ApartmentCard'
import '../sass/Apartment.sass'

fetch('./datas/ApartmentList')
  .then((res) => console.log(res.json()))
  .then((res) => console.log(res))
  .catch(console.error)

function Apartment() {
  return (
    <ul className="background-apartments-grid">
      {apartmentList.map((apartment) => (
        <li className="apartment-list" key={apartment.id}>
          <ApartmentCard apartment={apartment} />
        </li>
      ))}
    </ul>
  )
}

export default Apartment
