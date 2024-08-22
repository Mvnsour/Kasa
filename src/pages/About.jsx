import AboutBanner from '../assets/about-banner.png'
import './About.css'
import Collapse from '../components/Collapse'
import aboutList from '../datas/AboutList'

function About() {
  return (
    <div className="about-banner-container">
      <img src={AboutBanner} alt="" className="about-banner" />
      {aboutList.map(({ title, content, index }) => (
        <div className="about-collapse-container" key={index}>
          <Collapse title={title} content={content} />
        </div>
      ))}
    </div>
  )
}

export default About
