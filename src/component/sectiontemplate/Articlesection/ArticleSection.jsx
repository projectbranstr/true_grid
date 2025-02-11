import React, { useState } from 'react';
import './articlesection.scss';
function ArticleSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const dummyData = [
        {
            title: "Global Nuclear Energy Generation by Region in 2023",
            content: [
                "In 2023, global energy consumption reached 17,200 TWh. This incredible demand underlines the importance of exploring clean and sustainable energy solutions, like nuclear energy, particularly for developed economies.",
                "Countries with robust nuclear energy infrastructure are contributing significantly to global clean energy generation. These regions continue to invest heavily in the expansion of nuclear energy capacity, ensuring that nuclear power remains a critical component of the clean energy future.",
                "For this graphic, the first in the three-part Fueling the Future series, Visual Capitalist partnered with Global X ETFs to explore nuclear energy generation further, determine which regions generated the most nuclear energy in 2023, and investigate why nuclear is critical to the clean energy transition."
            ]
        },
        {
            title: "Nuclear in the Energy Mix",
            content: [
                "Nuclear energy plays a significant role in the global energy mix, offering a reliable and carbon-free power source.",
                "Countries with strong nuclear programs tend to have more stable energy grids and lower emissions compared to those reliant on fossil fuels.",
                "As of 2023, nuclear energy accounts for around 10% of the global electricity generation, with some countries like France and the U.S. relying on nuclear for more than 20% of their electricity."
            ]
        },
        {
            title: "Top Nuclear Energy Producers by Country",
            content: [
                "The top producers of nuclear energy in the world include the United States, France, China, and Russia. These countries have heavily invested in nuclear power generation as part of their efforts to reduce carbon emissions.",
                "France leads the world in the share of electricity generated from nuclear energy, with over 70% of its electricity being sourced from nuclear plants.",
                "China and Russia are expanding their nuclear energy fleets, with significant investments in new reactors as part of their strategies to reduce reliance on fossil fuels and increase energy security."
            ]
        },
        {
            title: "Nuclear Power and Sustainability",
            content: [
                "Nuclear energy is considered a low-carbon energy source, which makes it an important player in efforts to combat climate change.",
                "Unlike fossil fuels, nuclear power does not produce greenhouse gas emissions during operation. This helps reduce the carbon footprint of countries that rely on it for a significant portion of their energy needs.",
                "However, nuclear energy does have environmental concerns, such as the handling and storage of nuclear waste, and the risk of accidents or disasters, such as those at Chernobyl and Fukushima."
            ]
        },
        {
            title: "Advancements in Nuclear Technology",
            content: [
                "There are ongoing advancements in nuclear reactor design, including small modular reactors (SMRs) and next-generation reactors, which promise to improve safety, reduce waste, and make nuclear power more cost-effective.",
                "SMRs are particularly promising because they can be constructed in factories, reducing construction costs, and can be deployed in smaller, decentralized locations to enhance energy security in remote areas.",
                "Next-generation reactors, such as thorium reactors, are being explored as alternatives to traditional uranium reactors, with the potential for higher efficiency and less radioactive waste."
            ]
        },
        {
            title: "Challenges Facing the Nuclear Industry",
            content: [
                "Despite its potential, nuclear energy faces significant challenges, including high initial construction costs, long lead times for building plants, and public perception concerns regarding safety.",
                "The issue of nuclear waste disposal remains unresolved in many parts of the world, with storage facilities for high-level waste being limited and often controversial.",
                "Additionally, the decommissioning of aging nuclear plants requires substantial resources and presents environmental challenges."
            ]
        },
        {
            title: "Global Nuclear Energy Policy",
            content: [
                "The development and expansion of nuclear energy are heavily influenced by national policies, regulations, and international agreements.",
                "In some countries, like Germany, policies are shifting away from nuclear energy in favor of renewable sources, following public opposition to nuclear power.",
                "In contrast, other countries, such as China and Russia, are actively expanding their nuclear energy capacities as part of their long-term energy strategies to reduce carbon emissions and meet growing demand."
            ]
        }]
    
    return (
        <>
            <div className="jsx_main_container">


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

                <div className='js_article_main_container'>

                    <div className="js_articledata_left_container">

                        <div className="js_article_left_inner">

                         



                                {dummyData.map((item, index) => {
                                    return (
                                          <div className="js_accordian_container border p-4 mb-2 rounded shadow" key={index}>
                                            <div
                                                className="js_accordian_title flex justify-between items-center cursor-pointer bg-gray-200 p-2 rounded"
                                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)} // Toggle logic for open/close
                                            >
                                                <h6 className="font-semibold">{item.title}</h6>
                                                <div>{openIndex === index ? "-" : "+"}</div>
                                            </div>
                                            {openIndex === index && (
                                                <div className="js_accordian_subtitle p-2 border-t mt-2">
                                                    {item.content.map((para, index) => (
                                                        <p key={index} className="mb-2">{para}<br /></p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}



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
