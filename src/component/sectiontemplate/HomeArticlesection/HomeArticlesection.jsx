import React from 'react'
import './HomeArticlesection.scss'
import PrimaryHeading from '../../atom/PrimaryHeading/PrimaryHeading'

function HomeArticlesection() {
    return (
        <>
            <div className="jsx_articlesection_container">
                <PrimaryHeading title="Articles" />
                <div className="jsx_article_primarycard">
                    <img src="/img/primaryArticle_img1.png" alt="Article Img" />
                    <div>
                        <div className="">

                            <div className="jsx_card_header">
                                <div>
                                    <div className="">Article · 10 min read</div>
                                    <h6>Charted: A Handy List of Countries With No Income Taxes</h6>
                                    <p>This graphic lists the countries and territories that have no income taxes, per data from accounting firms PwC and KPMG.</p>
                                    <p>Hannah Ritchie</p>
                                </div>
                                <img src='/img/blog_linkarrow.svg' alt='Arrow' />
                            </div>

                            <div className="jsx_card_content">
                                <div>Announcement</div>
                                <div className="">
                                    <div className="jsx_card_content_title">Mapped: The Living Wage for a Family of Four, by State</div>
                                    <img src='/img/blog_linkarrow.svg' alt='Arrow' />
                                </div>
                                <div>Max Roser, Esteban Ortiz-Ospina and Charlie Giattino</div>
                            </div>

                        </div>

                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeArticlesection
