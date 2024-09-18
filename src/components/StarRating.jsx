import redStar from '../assets/red-star.svg'
import greyStar from '../assets/grey-star.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function StarRating({ rating }) {
  const rate = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {rate.map((rateElem) => (
        <span key={rateElem.toString()}>
          {rating >= rateElem ? (
            <FontAwesomeIcon icon={redStar} />
          ) : (
            <img src={greyStar} alt="grey-star" className="star-rate" />
          )}
        </span>
      ))}
    </div>
  )
}

export default StarRating

// <img className={ rating >= rateElem ? redIcon : greyIcon} alt="rating" src="/" />