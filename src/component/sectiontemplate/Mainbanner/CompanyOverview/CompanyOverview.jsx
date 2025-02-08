import React from 'react';
import './CompanyOverview.scss';

const CompanyOverview = ({ data }) => {
    return (
        <div className="js_main_container">
            <div  className='js_company_overview js_section_spacing'>


            
            <div className="js_company_overview_heading">
                <h1 className='js_section_secondary_heading'>Company Overview</h1>
            </div>
            <div className="js_company_overview_container">
                <div className="js_company_overview_des">
                    {data?.des.map((item, index) => <p className='js_section_paragraph' key={index}>
                        {item}
                    </p>)}
                </div>
                <div className="js_company_overview_img">
                    <img src="/teslatown.png" alt="Company Overview" />
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