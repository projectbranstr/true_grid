import React, { useRef } from 'react'
import Mainbanner from '../component/sectiontemplate/Mainbanner/Mainbanner.jsx'
import Testimonial from '../component/sectiontemplate/Testimonial/Testimonial.jsx'
import { popularBlogs, storyCard } from '../data/api.js'
import Card from '../component/molecule/Card/Card.jsx'
import Statistics from '../component/sectiontemplate/statistics/statistics.jsx'
import HomeArticlesection from '../component/sectiontemplate/HomeArticlesection/HomeArticlesection.jsx'
import CardSlider from '../component/sectiontemplate/Slider/Slider.jsx'
import TreeTable from '../component/sectiontemplate/TreeTable/TreeTable.jsx'
import Header from '../component/molecule/Header/Header.jsx'
import Footer from '../component/molecule/Footer/Footer.jsx'


function Home() {
    const simpleCardContainer = useRef();
    const headingSimpleCard = useRef();
    const simpleCard = useRef();
    const storyCardRefContainer = useRef();
    const storyCardRefHeading = useRef();
    const storyCardRefCard = useRef();
    return (
        <>
            <Header />
            <Mainbanner />
            {/* <Statistics title="Trending Statistics" /> */}
            <HomeArticlesection />
            <Card data={popularBlogs} />
            <Testimonial />
            <Card data={storyCard} containerRef={storyCardRefContainer} varient />
            <Footer />
            {/* <TreeTable items={data}/> */}
        </>
    )
}

export default Home
