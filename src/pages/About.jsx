import AboutBanner from '../assets/about-banner.png'
import './About.css'

function About() {
  return (
    <div className="about-banner-container">
      <img src={AboutBanner} alt="" className="about-banner" />
    </div>
  )
}

export default About
