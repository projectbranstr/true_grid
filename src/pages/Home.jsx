import React from 'react'
import Mainbanner from '../component/sectiontemplate/Mainbanner/Mainbanner.jsx'
import Testimonial from '../component/sectiontemplate/Testimonial/Testimonial.jsx'
import { popularBlogs } from '../data/api.js'
import Card from '../component/molecule/Card/Card.jsx'
import Statistics from '../component/sectiontemplate/statistics/statistics.jsx'
import HomeArticlesection from '../component/sectiontemplate/HomeArticlesection/HomeArticlesection.jsx'


function Home() {
    return (
        <>
            <Mainbanner />
            {/* <Statistics title="Trending Statistics" /> */}
            <HomeArticlesection />
            <Testimonial />
            <Card data={popularBlogs} />
        </>
    )
}

export default Home
