import AboutBanner from '../assets/about-banner.png'
import './About.scss'
import Collapse from '../components/Collapse'
import aboutList from '../datas/AboutList'

function About() {
  return (
    <>
      <div className="about-banner-container">
        <img src={AboutBanner} alt="" className="about-banner" />
      </div>
      <div className="main-collapse-container">
        {aboutList.map(({ title, content, index }) => (
          <section className="about-collapse-container" key={index}>
            <Collapse title={title} content={content} />
          </section>
        ))}
      </div>
    </>
  )
}

export default About
