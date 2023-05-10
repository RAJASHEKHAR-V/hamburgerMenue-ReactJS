import {GiHamburgerMenu} from 'react-icons/gi'
import {withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {history} = props

  const onWebsiteLogo = () => {
    history.replace('/')
  }

  return (
    <div className="header-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        className="web-logo"
        alt="website logo"
        onClick={onWebsiteLogo}
      />
      <div>
        <button className="burger-button" type="button">
          <GiHamburgerMenu className="Hamburger-icon" />
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
