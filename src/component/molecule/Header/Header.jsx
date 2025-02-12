import React, { useEffect, useRef } from 'react';
import './header.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Header() {
  
    const container = useRef(null)
    useEffect(() => {
     // const line = SplitType.create('#h_1');
       const tl = gsap.timeline({
         scrollTrigger: {
           trigger: container.current,
           start: "top+=30 bottom",
           end: "bottom",
           
         },
        
       });
       tl.fromTo(
         ".true_grid",
         { opacity: 0, y: 30},
         { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2},
         "0")
  
     return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
     
     }, []); 

  return (
    <div className='js_header_bg' ref={container}>
      <div className="js_header_main_container " >
        <div className="js_header_container">
          <div className="js_header_container true_grid">
            <img src="/img/mainlogo.png" alt="main_logo" />
          </div>
          <div className="js_button_container true_grid">
            <button>
              Sign Up / Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
