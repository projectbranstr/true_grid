import React from 'react'
import './mainbanner.scss'
function Mainbanner() {
    return (
        <>
            <div className="jsx_banner_primary_container">
                <div className="jsx_bannermain_container">
                    <div className="jsx_banner_heading">
                        Authenticity in every Chart
                        Integrity in every Number
                    </div>
                    <div className="jsx_banner_searchbar_container">
                        <input type="text" placeholder='Search...' />
                        <img src='/img/search_icon.png' alt='search_icon' />
                    </div>
                    <div className="jsx_companyname_maincontainer">


                        <button className="jsx_companyname_container">
                            <img src="/img/teslalogo.png" alt="" className="" />
                            TSLA
                        </button>
                        <button className="jsx_companyname_container">
                            <img src="/img/teslalogo.png" alt="" className="" />
                            TSLA
                        </button><button className="jsx_companyname_container">
                            <img src="/img/teslalogo.png" alt="" className="" />
                            TSLA
                        </button><button className="jsx_companyname_container">
                            <img src="/img/teslalogo.png" alt="" className="" />
                            TSLA
                        </button><button className="jsx_companyname_container">
                            <img src="/img/teslalogo.png" alt="" className="" />
                            TSLA
                        </button><button className="jsx_companyname_container">
                            <img src="/img/teslalogo.png" alt="" className="" />
                            TSLA
                        </button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainbanner
