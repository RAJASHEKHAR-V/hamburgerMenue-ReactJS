import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="popup-container">
    <div className="header-card">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="web-logo"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="burger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="Hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="menu-card">
            <div className="close-icon-card">
              <button
                className="close-button"
                type="button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <ul className="popup-body">
              <Link to="/" onClick={() => close()} className="remove-underline">
                <li className="home-popup">
                  <AiFillHome className="home-icon" />
                  <h1 className="home-icon-heading">Home</h1>
                </li>
              </Link>
              <Link
                to="/about"
                onClick={() => close()}
                className="remove-underline"
              >
                <li className="about-popup">
                  <BsInfoCircleFill className="about-icon" />
                  <h1 className="about-icon-heading">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
