import React , {useEffect , useRef} from 'react'
import './Footer.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Footer() {
    const container = useRef();
    const container1 = useRef();
   useEffect(() => {
      // const line = SplitType.create('#h_1');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top+=30 bottom",
            end: "bottom",
            
          },
         
        });
        tl.fromTo(".js_footer_container",
          { opacity: 0, y: 100},
          { opacity: 1, y: 0, duration: 0.8 },
          "0")
        tl.fromTo(
          ".footer_logo_animate",
          { opacity: 0, y: 30},
          { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2},
          ).fromTo(
            ".js_link_header",
            { opacity: 0, y: 30},
            { opacity: 1, y: 0, duration: 0.8 }, "0.4").fromTo(
            ".footer_animate_list1 li",
            { opacity: 0, y: 30},
            { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2}, "0.5").fromTo(
                ".footer_animate_list2 li",
                { opacity: 0, y: 30},
                { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2} , "0.5").fromTo(
                    ".footer_animate_list3 li",
                    { opacity: 0, y: 30},
                    { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2} , "0.5")
    
      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      }, []); 

      useEffect(() => {
        // const line = SplitType.create('#h_1');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container1.current,
              start: "top+=80 bottom",
              end: "bottom",
              
            },
           
          });
          tl.fromTo(container1.current,
            { opacity: 0, y: 80},
            { opacity: 1, y: 0, duration: 0.8 },
            "0").fromTo(".blog_animate_heading",
                { opacity: 0, y: 40},
                { opacity: 1, y: 0, duration: 0.8  ,  stagger: 0.4},
                "0.6").fromTo(".blog_tag_animate button",
                    { opacity: 0, y: 30},
                    { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2} , "0.6").fromTo(".blog_tag_animate img",
                        { opacity: 0, y: 20},
                        { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2}, "0.7").fromTo(".footer_animate" ,
                            { opacity: 0, y: 20},
                            { opacity: 1, y: 0, duration: 0.8 , stagger: 0.09} , "1.2")
      
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        }, []); 
    return (
        <>
            <div className="js_saction_spacing"></div>
            <div className="js_footer_primary_container">
                <div className='js_footer_container' ref={container}>
                    <div className="js_footer_main_container">
                        <div className="js_logo_container">
                            <img src='/img/footerLogo.png' alt='True_Grid_Logo' className='footer_logo_animate' />
                        </div>

                        <div className="js_footer_second_element">
                            <div className="js_footer_links">
                                <div className="">
                                    <div className="js_link_header">Products</div>
                                    <ul className='js_footer_links_items footer_animate_list1'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Article - Page</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="js_link_header">Solutions</div>
                                    <ul className='js_footer_links_items footer_animate_list2'>
                                        <li>Pricing</li>
                                        <li>Service</li>
                                        <li>Newsletter Monitoring</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="js_link_header">Company</div>
                                    <ul className='js_footer_links_items footer_animate_list3'>
                                        <li>Pricing</li>
                                        <li>Website Monitoring</li>
                                        <li>Newsletter Monitoring</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="js_footer_blog" ref={container1}>
                                <div className="js_footer_blog_heading blog_animate_heading" >Our Blog</div>
                                <div className="js_contryname_container  blog_tag_animate">
                                    <button>IRELAND</button>
                                    <button>UK</button>
                                    <button>Health Insurance</button>
                                    <button>IRELAND</button>
                                    <button>Retirement</button>
                                    <button>IRELAND</button>
                                    <button>IRELAND</button>
                                    <button>IRELAND</button>
                                </div>
                                <div className="js_social_icon  blog_tag_animate">
                                    <img src="/img/github.png" alt='social_icon' />
                                    <img src="/img/footer_icon2.png" alt='social_icon' />
                                    <img src="/img/github.png" alt='social_icon' />
                                    <img src="/img/github.png" alt='social_icon' />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='js_footer_copyright_container'>
                        <div className="js_footer_copyright_header">
                            <div className="">
                                <div className="footer_animate">© Truegrids 2025 &#xB7; Built with love from Europe</div>
                            </div>
                        </div>
                        <p className='footer_animate'>The purpose of a FAQ is generally to provide information on frequent questions or concerns.The purpose of a FAQ is generally to provide information on frequent questions or concerns.The purpose of a FAQ is generally to provide information on frequent questions or concerns.The purpose of a FAQ is generally to provide information on frequent questions or concerns.</p>
                        <div className="js_copyright_link">
                            <div className="footer_animate">Terms of Service &#xB7; Privacy Policy &#xB7; Regulatory</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer
