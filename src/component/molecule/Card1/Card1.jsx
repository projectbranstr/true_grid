import React from 'react'

 const Card1= ({varient, cardContent , index , fontSize}) => {
  return (
    <div className='js_card_bg_color' key={index}>
  {cardContent.img &&  <div className='js_card_header'>
      <div className={`js_bg_img js_card_size ${varient && "js_card_height"}`} style={{ backgroundImage: `url(${cardContent.img})` }}></div>
    </div>} 
    <div className="js_card_body">
      <div className="js_card_tag"><b>{cardContent.tag}</b>&nbsp; / &nbsp;{cardContent.date}</div>
      <div className="js_heading_with_btn">
        <h4 className={`${fontSize ? "js_card_title1" : "js_card_title"} `}>{cardContent.title}</h4>
        {/* <span>&#x2197;</span> */}
        </div>
      <p className="js_card_content">{cardContent.des}</p>
    </div>
  </div>
  )
}
export default Card1;