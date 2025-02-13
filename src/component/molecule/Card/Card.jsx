import React  , {useEffect , useRef}from 'react'
import './card.scss';
import CardSlider from '../../sectiontemplate/Slider/Slider';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Card = ({ data, varient , ref}) => {
const container = useRef();
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
      `${varient ? ".secondary_heading_animation-1" : ".secondary_heading_animation"}`,
      { opacity: 0, y: 40},
      { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2},
      "0").fromTo(
        `${ varient ? ".js_card_animation-1": ".js_card_animation"}`,
        { opacity: 0, y: 100,},
        { opacity: 1, y: 0, duration: 1 , stagger:0.2 },
        "0.4")

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  }, [data]); 
  return (

    <>
       <div className="
    js_section_spacing slider_show_in_desktop">
      <div className="js_main_container " ref={container}>

        {data?.title && <h1 className={`js_section_secondary_heading ${varient ? "secondary_heading_animation-1" : "secondary_heading_animation"}`}>{data.title}</h1>}
        {data.heading && <h1>{data.title}</h1>}
        <div className="js_card_container">
          {data?.data.map((item, index) => (
            <div key={index} className={` ${varient ? "js_card_animation-1" : "js_card_animation"}`}>
              <div className='js_card_header'>
                <div className={`js_bg_img js_card_size ${varient && "js_card_height"}`} style={{ backgroundImage: `url(${item.img})` }}></div>
              </div>
              <div className="js_card_body">
                <div className="js_card_tag"><b>{item.tag}</b>&nbsp; / &nbsp;{item.date}</div>
                <div className="js_heading_with_btn">
                  <h4 className="js_card_title">{item.title}</h4>
                  {/* <span>&#x2197;</span> */}
                </div>

                <p className="js_card_content">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   <CardSlider sliderData={data}/>
    </>
 
  )
}

export default Card;