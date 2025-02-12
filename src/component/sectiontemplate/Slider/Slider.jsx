"use client"
import React from 'react';
import Slider from 'react-slick';
import "react-slick/"
import Card from '../../molecule/Card/Card';
import { popularBlogs } from '../../../data/api';
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/indicaseport.png',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_32.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_33.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_34.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_31.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_32.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_33.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_34.jpeg',
  },
];
 const CardSlider =({slideCount=1 , showHover , varient=false , sliderData}) =>{
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <div
  //     {...props}
  //     className={
  //       'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === 0 ? true : false}
  //   >
  //     <Icon icon="bi:arrow-left" />
  //   </div>
  // );
  // const SlickArrowRight = ({ currentSlide ,slideCount, ...props }) => (
  //   <div
  //     {...props}
  //     className={
  //       'slick-next slick-arrow' +
  //       (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === slideCount - 1 ? true : false}
  //   >
  //     <Icon icon="bi:arrow-right" />
  //   </div>
  // );
  const settings = {
    dots: false,
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
          dots: false,
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

  return (
    <div className='js_main_container js_section_spacing slider_show_in_mobile '>
      {sliderData?.title && <h1 className="js_section_secondary_heading">{sliderData.title}</h1>} 
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4 ">
      {sliderData.data.map((item, index)=>{
        return (
          <div key={index} className='js_card_bg_color'>
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
        )
      })}
    </Slider>
      </div>
  );
}
export default CardSlider;