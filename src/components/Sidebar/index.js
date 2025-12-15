import './index.scss'
import LogoS from '../../Assets/images/logo-s (2).png'
import LogoSubtitle from '../../Assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <div className="mobile-nav-toggle" onClick={() => setShowNav(!showNav)}>
        <FontAwesomeIcon icon={showNav ? faTimes : faBars} />
      </div>

      <div className={`nav-bar ${showNav ? 'mobile-show' : ''}`}>
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Jonathan" />
        </Link>

        <nav>
          <NavLink onClick={() => setShowNav(false)} to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>

          <NavLink onClick={() => setShowNav(false)} to="/about">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>

          <NavLink onClick={() => setShowNav(false)} to="/portfolio">
            <FontAwesomeIcon icon={faSuitcase} />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jonathan-tinti-a188412b3/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/yyeternal">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar