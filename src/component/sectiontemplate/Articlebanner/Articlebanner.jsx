import React, { useEffect, useRef } from 'react';
import './articlebanner.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Articlebanner() {
    const container = useRef();
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
            ".js_article_container h4",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
            "0").fromTo
            (
                ".article_img_animation",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, }, "0.3").fromTo(
                    ".social_icon_animation",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2})

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    }, []);

    return (
        <>
            <div className='js_article_main_container' ref={container}>
                <div className="js_article_container">
                    <h4>Nuclear Energy Generation by Region</h4>
                    <p className='article_img_animation'>Truegrids / Blog / Energy / Nuclear Energy Generation by Region</p>
                </div>

                <div className="js_banner_second">
                    <div className="js_banner_secondinner_container">
                        <button className="js_banner_second_compnaycontainer social_icon_animation" >
                            <img src='/img/teslalogo.png' alt='teslalogo' className='article_img_animation' />
                            <div className='js_banner_second_companyname'>
                                <h6 className='article_img_animation'>Tesla, Inc. (TSLA)</h6>
                                <div className='article_img_animation'>Click here to get detail report on Tesla</div>
                            </div>
                        </button>
                        <div className="js_socialicon_container">
                            <button className='social_icon_animation'><img src='/img/linkin.png' alt='social_icon' /></button>
                            <button className='social_icon_animation'><img src='/img/pintrest.png' alt='social_icon' /></button>
                            <button className='social_icon_animation'><img src='/img/twiter.png' alt='social_icon' /></button>
                            <button className='social_icon_animation'><img src='/img/facebook.png' alt='social_icon' /></button>
                            <button className='social_icon_animation'><img src='/img/reddit.png' alt='social_icon' /></button>
                            <button className='social_icon_animation'><img src='/img/mail.png' alt='social_icon' /></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Articlebanner
