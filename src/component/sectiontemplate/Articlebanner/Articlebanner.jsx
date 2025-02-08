import React from 'react'
import './articlebanner.scss'

function Articlebanner() {
    return (
        <>
            <div className='js_article_main_container'>
                <div className="js_article_container">
                    <h4>Nuclear Energy Generation by Region</h4>
                    <p>Truegrids / Blog / Energy / Nuclear Energy Generation by Region</p>
                </div>

                <div className="js_banner_second">
                    <div className="js_banner_secondinner_container">
                        <button className="js_banner_second_compnaycontainer">
                            <img src='/img/teslalogo.png' alt='teslalogo' />
                            <div className='js_banner_second_companyname'>
                                <h6>Tesla, Inc. (TSLA)</h6>
                                <div>Click here to get detail report on Tesla</div>
                            </div>
                        </button>
                        <div className="js_socialicon_container">
                            <button><img src='/img/linkin.png' alt='social_icon' /></button>
                            <button><img src='/img/pintrest.png' alt='social_icon' /></button>
                            <button><img src='/img/twiter.png' alt='social_icon' /></button>
                            <button><img src='/img/facebook.png' alt='social_icon' /></button>
                            <button><img src='/img/reddit.png' alt='social_icon' /></button>
                            <button><img src='/img/mail.png' alt='social_icon' /></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Articlebanner
