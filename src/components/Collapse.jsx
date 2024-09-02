import { useState } from 'react'
import '../scss/Collapse.scss'

function Collapse({ title, content }) {
  const [showContent, setShowContent] = useState(false)
  const displayContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div
      className={
        'collapse-container' + (showContent ? ' expend' : ' collapsed')
      }
    >
      <h2 className="collapse-title">
        {title}
        <span>
          <i
            className="fa-solid fa-chevron-up collapse-icon"
            style={{ color: 'white' }}
            onClick={displayContent}
          ></i>
        </span>
      </h2>
      <div className="collapse-content">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          <ul className="ul-collapse-container">
            {content.map((item, index) => (
              <li key={index} className="li-collapse">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Collapse

/* mettre une condition si l contenu est du text, 
 on l'affiche, et si c'est un array, 
 on affiche une liste classe sur le parent */
