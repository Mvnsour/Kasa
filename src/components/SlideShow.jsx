import { useState } from 'react'
import '../sass/SlideShow.sass'

function SlideShow({ pictures }) {
  const [showPicture, setShowPicture] = useState(0)
  return (
    <>
      {pictures.map((pic) => (
        <>
          <img src={pic} alt="" key={pic} className="apartment-slide" />
          <div className="arrow-container">
            <div>
              <i class="fa-solid fa-angle-left" onClick></i>
            </div>
            <div>
              <i class="fa-solid fa-angle-right" onClick></i>
            </div>
          </div>
          <span></span>
        </>
      ))}
    </>
  )
}

export default SlideShow
