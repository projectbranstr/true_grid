


import React, { useEffect, useRef, useState } from 'react';
import './Loader.scss';
import Comingsoon from '../Comingsoon/Comingsoon';
import FormPopup from '../../molecule/FormPopup/FormPopup';
import gsap from 'gsap';

function Loader() {

  const [isOpen, setIsOpen] = useState(false);
  const popRef = useRef(null);
  useEffect(() => {
    if (isOpen) {

      // Animation for opening the pop-up
      gsap.fromTo(
        popRef.current,
        { y: -500, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    } else {
      // Animation for closing the pop-up
      gsap.to(popRef.current, {
        y: -500,
        opacity: 0,
        duration: 0.5,
        onComplete: () => setIsOpen(false), // Set isOpen to false after animation
      });
    }
  }, [isOpen]);

  const togglePopup = () => {
    // Triggering opening or closing based on current state
    if (isOpen) {
      gsap.to(popRef.current, {
        y: -500,
        opacity: 0,
        duration: 0.5,
        onComplete: () => setIsOpen(false), // Set isOpen to false after animation
      });// Start the closing animation
    } else {
      setIsOpen(true); // Start the opening animation
    }
  };
  return (
    <>
      <div className="js_formpop_container ">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="jsx-background-video-form"
        >
          <source src="/img/bannerbg.mp4" type="video/mp4" />
        </video>

        <div className="jsx_starter_container ">
          <div className={`js_loader_main_container ${ isOpen && "bg_blur_effect"}`}>
            <div className="js_logo_loader">

              <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 735.97 1048.54">

                <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                    <rect class="cls-1" x="2.5" y="211.21" width="730.97" height="52.18" />
                    <rect class="cls-1" x="628.69" y="523.63" width="156.6" height="52.95"
                      transform="translate(156.89 1257.09) rotate(-90)" />
                    <rect class="cls-1" x="497.51" y="496.79" width="210.26" height="52.95"
                      transform="translate(79.37 1125.91) rotate(-90)" />
                    <rect class="cls-1" x="367.95" y="471.59" width="260.66" height="52.95"
                      transform="translate(.21 996.35) rotate(-90)" />
                    <rect class="cls-1" x="237.74" y="446.12" width="312.83" height="51.73"
                      transform="translate(-77.83 866.13) rotate(-90)" />
                    <rect class="cls-1" x="2.5" y="106.85" width="626.61" height="52.18" />
                    <rect class="cls-1" x="2.5" y="2.5" width="522.26" height="52.18" />
                    <path class="cls-1"
                      d="M733.08,680.36v26.09c-.63,9.09-1.59,18.09-2.88,26.98-25.5,176.78-177.62,312.61-361.46,312.61-201.71,0-365.25-163.52-365.25-365.23,0-183.69,135.62-335.71,312.17-361.41.08,0,.15-.02.23-.03v52.66c-.08.01-.15.03-.23.04-148.07,24.84-260.88,153.62-260.88,308.74,0,172.89,140.15,313.06,313.05,313.06,154.97,0,283.64-112.6,308.66-260.44,2.89-17.11,4.4-34.69,4.4-52.62v-.45h52.19Z" />
                    <path class="cls-1"
                      d="M628.72,680.35v.45c0,18.02-1.83,35.62-5.31,52.62-24.34,118.86-129.53,208.26-255.59,208.26-144.08,0-260.87-116.8-260.87-260.88,0-126.23,89.63-231.51,208.71-255.67.08-.02.15-.03.23-.04v53.51c-.08.02-.15.04-.23.06-90.02,23.17-156.55,104.88-156.55,202.14,0,115.26,93.46,208.7,208.71,208.7,97.09,0,178.71-66.29,202.02-156.08h-201.55v-.45h.45v-52.62h259.98Z" />
                  </g>
                </g>
              </svg>

              <Comingsoon />
              <button className='requested_btn1 js_background_glass_effect' onClick={togglePopup}>Request Access</button>
            </div>
          </div>


      {isOpen && <div className="jsx_form_main" ref={popRef} onClick={togglePopup}>
            <FormPopup onClick={(e) => e.stopPropagation()} />
          </div>}    
        </div>

      </div>

    </>
  )
}

export default Loader;