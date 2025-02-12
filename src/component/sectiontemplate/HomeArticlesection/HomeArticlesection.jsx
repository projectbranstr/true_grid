import React , {useRef , useEffect} from 'react'
import './HomeArticlesection.scss'
import PrimaryHeading from '../../atom/PrimaryHeading/PrimaryHeading'
import Card1 from '../../molecule/Card1/Card1'
import CardSlider from '../Slider/Slider'
import { mobileArticle } from '../../../data/api'
const item = {
    img: "/img/article12.png",
    tag: "Technology",
    date: "2025-02-07",
    title: "Charted:Average Workers per U.S Startup (1994-2023)",
    des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
}
const item1 = [{
    img: "",
    tag: "Technology",
    date: "2025-02-07",
    title: "Charted:Average Workers per U.S Startup (1994-2023)",
    des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
},{
    img: "",
    tag: "Technology",
    date: "2025-02-07",
    title: "Charted:Average Workers per U.S Startup (1994-2023)",
    des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
},{
    img: "",
    tag: "Technology",
    date: "2025-02-07",
    title: "Charted:Average Workers per U.S Startup (1994-2023)",
    des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
},{
    img: "",
    tag: "Technology",
    date: "2025-02-07",
    title: "Charted:Average Workers per U.S Startup (1994-2023)",
    des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
}]
const recentlyArticle = [
    {
        img: "/img/story1.png",
        tag: "Technology",
        date: "2025-02-07",
        title: "Charted:Average Workers per U.S Startup (1994-2023)",
        des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.Startups are famous for starting small."
    },
    {
        img: "/tesla1.png",
        tag: "Technology",
        date: "2025-02-07",
        title: "Charted:Average Workers per U.S Startup (1994-2023)",
        des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.We look at the trends.",
    }
]
function HomeArticlesection() {
 const container = useRef();
    // useEffect(() => {
    //     // const line = SplitType.create('#h_1');
    //       const tl = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: container.current,
    //           start: "top+=30 bottom",
    //           end: "bottom",
              
    //         },
           
    //       });
    //       tl.fromTo(
    //         ".true_grid",
    //         { opacity: 0, y: 30},
    //         { opacity: 1, y: 0, duration: 0.8 , stagger: 0.2},
    //         "0")
     
    //     return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
    //     }, []); 
    return (
        <>
            <div className="jsx_articlesection_container slider_show_in_desktop" ref={container}>
                <PrimaryHeading title="Articles" />
                <div className='js_home_article_container'>
                    <div className="js_card_bg_color">
                        <div className=""><Card1 index={1} cardContent={item} varient/></div>
                        <div className="js_home_article1_container">
                        {item1.map((item, index)=>{
                        return (
                            <Card1 cardContent={item}  index={index}/>
                        )
                       })}
                        </div>
                    </div>
                    <div className='js_home_article2_container'>
                       {recentlyArticle.map((item, index)=>{
                        return (
                            <Card1 cardContent={item}  index={index}/>
                        )
                       })}
                    </div>
                </div>



                {/* <div className='js_card_header'>
                        <div className={`js_bg_img js_card_size`} style={{ backgroundImage: `url(${item.img})` }}></div>
                    </div>
                    <div className="js_card_body">
                        <div className="js_card_tag"><b>{item.tag}</b>&nbsp; / &nbsp;{item.date}</div>
                        <div className="js_heading_with_btn">
                            <h4 className="js_card_title">{item.title}</h4>
                            {/* <span>&#x2197;</span> */}
                {/* </div> */}

                {/* <p className="js_card_content">{item.des}</p> */}
                {/* </div> */}
                {/* // </div> */}
            </div>
            <CardSlider sliderData={mobileArticle} />
        </>
    )
}

export default HomeArticlesection
