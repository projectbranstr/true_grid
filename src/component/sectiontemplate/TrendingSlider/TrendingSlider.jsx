"use client"
import React, { useRef , useState, useEffect } from 'react';
import Slider from 'react-slick';
import "react-slick/"
import "./trending.scss"
import Card from '../../molecule/Card/Card';
import { popularBlogs } from '../../../data/api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
 const TrendingSlider =({slideCount=3 , showHover , varient=false , sliderData}) =>{
  const container = useRef();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slideCount || 3,
    slidesToScroll: 1,
  
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2700,
    cssEase: "ease-in-out",
    
    responsive: [
      {
        breakpoint: 1200,
      
        settings: {

          slidesToShow: 0,
          slidesToScroll: 0,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 0,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
 useEffect(() => {
        // const line = SplitType.create('#h_1');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top+=130 bottom",
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
                ".js_trending_heading_animation",
                { opacity: 0, y:40 },
                { opacity: 1, y: 0, duration: 0.8} ,"0")
    
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    }, []);
  return (
    <div className='js_main_container' ref={container}>
      {sliderData?.title && <h1 className="js_section_secondary_heading js_trending_heading_animation">{sliderData.title}</h1>} 
      <div className="js_trending_slider_width">
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4 ">
      {sliderData.data.map((item, index)=>{
        return (
          <div className="js_trending_card_container">
          <div key={index} className='js_card_bg_color js_trending_card'>
          <div className='js_card_header'>
            <div className={`js_bg_img js_card_size_trending ${varient && "js_card_height"}`} style={{ backgroundImage: `url(${item.img})` }}></div>
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
        </div>
        )
      })}
    </Slider></div>
      </div>
  );
}
export default TrendingSlider;