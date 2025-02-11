import React from 'react'
import './header.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Header() {

  return (
    <>
      <div className='js_header_main_container'>
        <div className='js_header_container'>
          <div className="js_header_container">
            <img src='/img/mainlogo.png' alt='main_logo' />
          </div>
          <div className="js_button_container">
            <button>
              Sign Up / Log In
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header
