import React from 'react'
import './discovercard.scss';
const DiscoverCard = ({ data }) => {
  return (
    <div className="js_main_container">

      {data?.title && <h1 className="js_section_secondary_heading">{data.title}</h1>}
      {data.heading && <h1>{data.title}</h1>}
      <div className="js_discover_card_container">
        {data?.data.map((item, index) => (
          <div key={index}>
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
    </div>
  )
}

export default DiscoverCard;