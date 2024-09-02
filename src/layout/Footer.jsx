import footerBanner from '../assets/footer-banner.png'
import '../sass/Footer.sass'

function Footer() {
  return (
    <footer>
      <img src={footerBanner} alt="" className="footer-banner" />
    </footer>
  )
}

export default Footer
