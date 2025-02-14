import React, {useRef , useEffect} from 'react'
import "./style.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const CompanyBanner = () => {
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
            container.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6,},
            "0")
        .fromTo
            (
                ".js_company_banner_img",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8})
                .fromTo(".js_companybanner_animation",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2}, "0.6").fromTo(".price_stock_animation", { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8}, "0.6" )
    
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    }, []);
    return (
        <div className="js_company_banner_img1">
            <div className="js_main_container " ref={container}>
                <div className="js_banner_company_container social_icon_animation" >
                    <div className="js_banner_main_containe">
                         <div className="js_company_banner_content">
                        <img src='/img/teslacompanny.png' alt='teslalogo' className='js_company_banner_img' />
                        <div className='js_banner_second_companyname'>
                            <h6 className='js_company_banner_heading js_companybanner_animation'>Tesla, Inc. (TSLA)</h6>
                            <div className='js_company_banner_heading2 js_companybanner_animation'>Click here to get detail report on Tesla</div>
                        </div>
                         </div>
                         <div className="js_company_stocks">
                        <div className="price_stock_animation">
                            <div>Last Price</div>
                            <div>US$404.60</div>
                        </div>
                        <div className="price_stock_animation">
                            <div>Market Cap</div>
                            <div>US$1.3t</div>
                        </div>
                        <div className="price_stock_animation">
                            <div>7D</div>
                            <div>1.9%</div>
                        </div>
                        <div className="price_stock_animation">
                            <div>1Y</div>
                            <div>1.9%</div>
                        </div>
                         </div>  
                    </div>
                 <div className='js_company_chart'>
                 <img src='/img/teslachart.png' alt='teslalogo' className='js_company_banner_img' />
                 <div className="">
                 <button className='js_company_banner_btn price_stock_animation'>Add to Watchlist</button>
                 <button className='js_company_banner_btn price_stock_animation'>Add to watchlist</button>
                 <button className='js_company_banner_btn price_stock_animation'>Compare</button>
                 </div>
                
                 </div>
                </div>
                  
            </div>
        </div>
    )
}

export default CompanyBanner