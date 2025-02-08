import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <>
            <div className="js_saction_spacing"></div>
            <div className="js_footer_primary_container">
                <div className='js_footer_container'>
                    <div className="js_footer_main_container">
                        <div className="js_logo_container">
                            <img src='/img/footerLogo.png' alt='True_Grid_Logo' />
                        </div>

                        <div className="js_footer_second_element">
                            <div className="js_footer_links">
                                <div className="">
                                    <div className="js_link_header">Products</div>
                                    <ul className='js_footer_links_items'>
                                        <li>Pricing</li>
                                        <li>Website Monitoring</li>
                                        <li>Newsletter Monitoring</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="js_link_header">Solutions</div>
                                    <ul className='js_footer_links_items'>
                                        <li>Pricing</li>
                                        <li>Website Monitoring</li>
                                        <li>Newsletter Monitoring</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="js_link_header">Company</div>
                                    <ul className='js_footer_links_items'>
                                        <li>Pricing</li>
                                        <li>Website Monitoring</li>
                                        <li>Newsletter Monitoring</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="js_footer_blog">
                                <div className="js_footer_blog_heading">Our Blog</div>
                                <div className="js_contryname_container">
                                    <button>IRELAND</button>
                                    <button>UK</button>
                                    <button>Health Insurance</button>
                                    <button>IRELAND</button>
                                    <button>Retirement</button>
                                    <button>IRELAND</button>
                                    <button>IRELAND</button>
                                    <button>IRELAND</button>
                                </div>
                                <div className="js_social_icon">
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
                                <div className="">© Truegrids 2025 &#xB7; Built with love from Europe</div>
                            </div>
                        </div>
                        <p>The purpose of a FAQ is generally to provide information on frequent questions or concerns.The purpose of a FAQ is generally to provide information on frequent questions or concerns.The purpose of a FAQ is generally to provide information on frequent questions or concerns.The purpose of a FAQ is generally to provide information on frequent questions or concerns.</p>
                        <div className="js_copyright_link">
                            <div className="">Terms of Service &#xB7; Privacy Policy &#xB7; Regulatory</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer
