import React from 'react';
import './articlesection.scss';

function ArticleSection() {
    return (
        <>
            <div className="js_main_container">


                <div className="js_article_main_container">
                    <div className="js_article_img_container">
                        <img src='/img/tesla_article.png' alt='article_img' />

                        
                    </div>

                    <div className="js_article_sidebar_top">
                        <div className="js_search_container">
                            <input type="text" placeholder='Search...' />
                            <img src='/img/search_icon.png' alt='search_icon' />
                        </div>
                        <hr />

                        <div className='js_sidebar_heading'>
                            <div className='js_sidebar_heading_active'>Latest</div>
                            <div className=''>Popular</div>
                        </div>

                        <div className='js_article_container_cards'>
                            <img src='/img/tesla_article01.png' alt='article_img' />
                            <div className='js_article_title'>
                                <div>TSLA / 12 hours ago</div>
                                <div>Charted: The Surge of Vaping in America’s Young Adults</div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='js_container_article_data'>

                    <div className="js_articledata_left_container">

                        <div className="js_article_left_inner">

                            <div className="js_accordian_container">
                                {/* accordian header  */}
                                <div className="js_accordian_title">
                                    <h6>Global Nuclear Energy Generation by Region in 2023</h6>
                                    <div>-</div>
                                </div>
                                {/* acordian content  */}
                                <div className="js_accordian_subtitle">
                                    <p>In 2023, global energy consumption reached 17,200 TWh. This incredible demand underlines the importance of exploring clean and sustainable energy solutions, like nuclear energy, particularly for developed economies. </p>

                                    <p>For this graphic, the first in the three-part Fueling the Future series, Visual Capitalist partnered with Global X ETFs to explore nuclear energy generation further, determine which regions generated the most nuclear energy in 2023, and investigate why nuclear is critical to the clean energy transition. </p>


                                </div>
                                <div className="js_accordian_title">
                                    <h6>Global Nuclear Energy Generation by Region in 2023</h6>
                                </div>
                                <div className="js_accordian_subtitle">
                                    <p>In 2023, global energy consumption reached 17,200 TWh. This incredible demand underlines the importance of exploring clean and sustainable energy solutions, like nuclear energy, particularly for developed economies. </p>

                                    <p>For this graphic, the first in the three-part Fueling the Future series, Visual Capitalist partnered with Global X ETFs to explore nuclear energy generation further, determine which regions generated the most nuclear energy in 2023, and investigate why nuclear is critical to the clean energy transition. </p>

                                </div>

                                {/* <table className='js_accordian_article'>
                            <tr>
                                <th>Region</th>
                                <th>Nuclear Energy Generation</th>
                            </tr>
                            <tr>
                                <td>North America</td>
                                <td>917.6 TWh</td>
                            </tr>
                            <tr>
                                <td>North America</td>
                                <td>917.6 TWh</td>
                            </tr>
                            <tr>
                                <td>North America</td>
                                <td>917.6 TWh</td>
                            </tr>
                        </table> */}

                            </div>
                        </div>

                        <div className="js_accordian_container">

                            {/* accordian header  */}
                            <div className="js_accordian_title">
                                <h6>Global Nuclear Energy Generation by Region in 2023</h6>
                                <div>+</div>
                            </div>

                        </div>

                    </div>
                    <div className="js_articledata_right_container">
                        <div className="">Nuclear Energy Generation by Region (2023)</div>
                        <div className="">Nuclear in the Energy Mix</div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default ArticleSection
