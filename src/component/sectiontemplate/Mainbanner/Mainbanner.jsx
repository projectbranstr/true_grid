import React, { useRef, useEffect } from 'react'
import './mainbanner.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Mainbanner() {
    const container = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top+=30 bottom",
                end: "bottom",

            },

        });
        tl.fromTo(
            ".banner_animation",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.4 }).fromTo(
                ".banner_animate_btn",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
                "0.8")
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    }, []);



    return (
        <>

            <div className="jsx-video-container">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="jsx-background-video"
                >
                    <source src="/img/bannerbg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="jsx_banner_primary_container" ref={container}>
                    <div className="jsx_bannermain_container">
                        <div className="jsx_banner_heading banner_animation">
                            Authenticity in every Chart
                            Integrity in every Number
                        </div>
                        <div className="jsx_banner_searchbar_container banner_animation">
                            <input type="text" placeholder='Search...' />
                            <img src='/img/search_icon.png' alt='search_icon' />
                        </div>
                        <div className="jsx_companyname_maincontainer">


                            <button className="jsx_companyname_container banner_animate_btn">
                                <img src="/img/teslalogo.png" alt="" className="" />
                                TSLA
                            </button>
                            <button className="jsx_companyname_container  banner_animate_btn">
                                <img src="/img/teslalogo.png" alt="" className="" />
                                TSLA
                            </button><button className="jsx_companyname_container  banner_animate_btn">
                                <img src="/img/teslalogo.png" alt="" className="" />
                                TSLA
                            </button><button className="jsx_companyname_container  banner_animate_btn">
                                <img src="/img/teslalogo.png" alt="" className="" />
                                TSLA
                            </button><button className="jsx_companyname_container  banner_animate_btn">
                                <img src="/img/teslalogo.png" alt="" className="" />
                                TSLA
                            </button><button className="jsx_companyname_container  banner_animate_btn">
                                <img src="/img/teslalogo.png" alt="" className="" />
                                TSLA
                            </button>


                        </div>
                    </div>
                </div>

                <button className='requested_btn'>Request Access</button>


            </div>

        </>
    )
}

export default Mainbanner
