import React, { useRef, useEffect } from 'react';
import './CompanyOverview.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const CompanyOverview = ({ data }) => {
    const container = useRef();
    const sectionImg = useRef();
    const sectionHeading = useRef();
    const sectionParagraph = useRef();

    useEffect(() => {
        // const line = SplitType.create('#h_1');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top+=150 bottom",
                end: "bottom",

            },

        });
        tl.fromTo(
            sectionHeading.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8 },
            "0")
            .fromTo(".js_section_paragraph",
                { opacity: 0, y: 80 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "0.4"
            ).fromTo(sectionImg.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, "0.4")
            .fromTo(".js_company_overview_buttons .overview_btn",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, "0.6")

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    }, []);
    return (
        <div className="js_main_container">
            <div className='js_company_overview js_section_spacing ' ref={container}>



                <div className="js_company_overview_heading">
                    <h1 className='js_section_secondary_heading' ref={sectionHeading}>Company Overview</h1>
                </div>
                <div className="js_company_overview_container ">
                    <div className="js_company_overview_des">
                        {data?.des.map((item, index) => <p className='js_section_paragraph' key={index}>
                            {item}
                        </p>)}
                    </div>
                    <div className="js_company_overview_img">
                        <img className="js_company_img_width" src="/teslatown.png" alt="Company Overview" ref={sectionImg} />
                        <div className="js_company_overview_buttons">
                            {data?.buttons.map((item, index) => <button className='overview_btn' key={index}><img src={item.icon} alt={item.icon} /> <span>{item.title}</span></button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyOverview;