import React from 'react'
import './card.scss';
const Card = ({ data }) => {
  return (
    <div className="
    js_section_spacing">
    <div className="js_main_container ">

       {data?.title && <h1 className="js_section_secondary_heading">{data.title}</h1>} 
        {data.heading && <h1>{data.title}</h1>}
        <div className="js_card_container">
          {data?.data.map((item, index) => (
            <div key={index}>
              <div className='js_card_header'>
                <div className='js_bg_img js_card_size' style={{ backgroundImage: `url(${item.img})` }}></div>
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
  )
}

export default Card;