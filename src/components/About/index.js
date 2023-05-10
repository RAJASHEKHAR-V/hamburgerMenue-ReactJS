import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import Header from '../Header'

import './index.css'

const About = () => (
  <div className="popup-container-about">
    <Popup
      modal
      trigger={
        <>
          <Header />
          <div className="about-page-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
              className="sm-about-img"
              alt="about"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
              className="md-about-img"
              alt="about"
            />
          </div>
        </>
      }
    >
      {close => (
        <>
          <div className="close-icon-card">
            <button
              className="close-button"
              type="submit"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
          <div className="popup-body">
            <div className="home-popup">
              <AiFillHome className="home-icon" />
              <h1 className="home-icon-heading">Home</h1>
            </div>
            <div className="about-popup">
              <BsInfoCircleFill className="about-icon" />
              <h1 className="about-icon-heading">Home</h1>
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default About
