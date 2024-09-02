import footerBanner from '../assets/footer-banner.png'
import '../scss/Footer.scss'

function Footer() {
  return (
    <footer>
      <img src={footerBanner} alt="" className="footer-banner" />
    </footer>
  )
}

export default Footer
