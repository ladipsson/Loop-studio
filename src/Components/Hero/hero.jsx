import { useState } from "react";
import './hero.css'
import logo from '../../assets/logo.svg'
import Hamburger from '../../assets/icon-hamburger.svg'
import Close from '../../assets/icon-close.svg'
import { NavLink } from "react-router-dom";
const Hero = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);

  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setActive(false);
    }
  };

  return (
    <div className='herotab'>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-open" id="nav-open" onClick={toggleMenu}>
          {/* <Hamburger /> */}
          <img src={Hamburger} alt="" className="hamburger" />
        </div>
        <div className="nav-close" id="nav-close" onClick={toggleMenu}>
          {/* <Close /> */}
          <img src={Close} alt="" className="close"/>
        </div>
        
          <ul className={`navitems ${active ? "active" : ""}`}>
            <li className="navlist">
              <NavLink to="/About" className="nav-link" onClick={closeMenuOnMobile}>
                About
              </NavLink></li>
            <li className="navlist">
              <NavLink to="/Careers" className="nav-link" onClick={closeMenuOnMobile}>
                Careers
              </NavLink></li>
            <li className="navlist">
              <NavLink to="/Events" className="nav-link" onClick={closeMenuOnMobile}>
                Events
              </NavLink></li>
            <li className="navlist">
              <NavLink to="/Products" className="nav-link" onClick={closeMenuOnMobile}>
                Products
              </NavLink></li>
            <li className="navlist">
              <NavLink to="/Support" className="nav-link" onClick={closeMenuOnMobile}>
                Support
              </NavLink></li>
          </ul>
      </nav>

      <div className="heading">
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
    </div>
  )
}

export default Hero
