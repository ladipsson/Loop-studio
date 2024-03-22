import './footer.css'
import logo from '../../assets/logo.svg'
import face from '../../assets/icon-facebook.svg'
import insta from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import pint from '../../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <div className="overall">
      <div className='container'>
        <div className="left-container">
          <div className='nav-area'>
            <div className="logo pad">
              <img src={logo} alt="logo" />
            </div>
            <div className="navmenu">
              <ul className="footer-nav">
                <li className="navlist">About</li>
                <li className="navlist">Careers</li>
                <li className="navlist">Events</li>
                <li className="navlist">Products</li>
                <li className="navlist">Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="icons pad">
            <img src={face} alt="" className="icon" />
            <img src={twitter} alt="" className="icon" />
            <img src={pint} alt="" className="icon" />
            <img src={insta} alt="" className="icon" />
          </div>
          <div className="site-rights">
            <p>2021 Loopstudios. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
