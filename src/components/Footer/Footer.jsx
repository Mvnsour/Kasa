import darkLogoKasa from 'assets/logo/dark-logo-kasa.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img src={darkLogoKasa} alt="logo Kasa" className='footer__logo'/>
      <p className="footer__text">
        <span>© 2020 Kasa. All</span>
        <span>rights reserved</span>
      </p>
    </footer>
  );
}
export default Footer;