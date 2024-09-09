import redStar from '../assets/red-star.svg'
import greyStar from '../assets/grey-star.svg'

function StarRating({ rating }) {
  const rate = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {rate.map((rateElem) => (
        <span key={rateElem.toString()}>
          {rating >= rateElem ? (
            <img src={redStar} alt="red-star" className="star-rate" />
          ) : (
            <img src={greyStar} alt="grey-star" className="star-rate" />
          )}
        </span>
      ))}
    </div>
  )
}

export default StarRating
