import { useState } from 'react'
import '../styles/Collapse.css'

function Collapse({ title, content }) {
  const [showContent, setShowContent] = useState(false)
  const displayContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div className={'collapse-container' + (showContent ? '' : ' collapsed')}>
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
      <p className="collapse-content">{content}</p>
    </div>
  )
}
export default Collapse

/* mettre une condition si l contenu est du text, 
 on l'affiche, et si c'est un array, 
 on affiche une liste classe sur le parent */
