import React , {useEffect , useRef }from 'react'
import './discovercard.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const DiscoverCard = ({ data }) => {
  const container = useRef();
  const containerHeading = useRef();
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
        containerHeading.current,
        { opacity: 0, y: 30},
        { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2},
        "0").fromTo(".card_discover_animation", 
          { opacity: 0, y: 100},
          { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2},)
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    }, []); 
  
  return (
    <div className="js_section_spacing">
    <div className="js_main_container" ref={container}>

      {data?.title && <h1 className="js_section_secondary_heading" ref={containerHeading}>{data.title}</h1>}
      {data.heading && <h1>{data.title}</h1>}
      <div className="js_discover_card_container">
        {data?.data.map((item, index) => (
          <div key={index} className='card_discover_animation'>
            <h4 className="js_discover_card_title">{item.title}</h4>
            <div className='js_discover_card_header'>
              <div className='js_discover_bg_img js_card_size' style={{ backgroundImage: `url(${item.img})` }}></div>
            </div>
            <div className="js_discover_card_body">
              <p className="js_discover_card_content">{item.des}</p>

            </div>

          </div>
        ))}
      </div>
    </div></div>
  )
}

export default DiscoverCard;