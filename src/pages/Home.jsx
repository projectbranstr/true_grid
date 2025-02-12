import React from 'react'
import Mainbanner from '../component/sectiontemplate/Mainbanner/Mainbanner.jsx'
import Testimonial from '../component/sectiontemplate/Testimonial/Testimonial.jsx'
import { popularBlogs, storyCard } from '../data/api.js'
import Card from '../component/molecule/Card/Card.jsx'
import Statistics from '../component/sectiontemplate/statistics/statistics.jsx'
import HomeArticlesection from '../component/sectiontemplate/HomeArticlesection/HomeArticlesection.jsx'
import CardSlider from '../component/sectiontemplate/Slider/Slider.jsx'
import TreeTable from '../component/sectiontemplate/TreeTable/TreeTable.jsx'


function Home() {
    const data = [
        {
            id: 1,
            priority: 1,
            from: 'reacttreetable@simple.com',
            subject: 'Lorem Ipsum is simply dummy text of the printing',
            sentDate: '01/01/2019'
        },
        {
            id: 2,
            priority: 2,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 1
        },
        {
            id: 3,
            priority: 3,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 1
        },
        {
            id: 4,
            priority: 4,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 3
        },
        {
            id: 5,
            priority: 5,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019'
        },
        {
            id: 6,
            priority: 6,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019'
        },
        {
            id: 7,
            priority: 7,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 3
        },
        {
            id: 8,
            priority: 8,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 3
        },
        {
            id: 9,
            priority: 9,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 3
        },
        {
            id: 10,
            priority: 10,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 8
        },
        {
            id: 11,
            priority: 11,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 8
        },
        {
            id: 12,
            priority: 12,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 10
        },
        {
            id: 13,
            priority: 13,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 5
        },
        {
            id: 17,
            priority: 13,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 13
        },
        {
            id: 18,
            priority: 13,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 13
        },
        {
            id: 19,
            priority: 13,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 13
        },
        {
            id: 14,
            priority: 14,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 5
        },
        {
            id: 15,
            priority: 14,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 5
        },{
            id: 16,
            priority: 14,
            from: 'reacttreetable@simple.com',
            subject: 'It is a long established fact that a reader will be distracted',
            sentDate: '01/01/2019',
            parentId: 5
        }];
    return (
        <>
            <Mainbanner />
            {/* <Statistics title="Trending Statistics" /> */}
            <HomeArticlesection />
            <Card data={popularBlogs} />
            <Testimonial />
            <CardSlider sliderData={storyCard} varient/>
            <TreeTable items={data}/>
        </>
    )
}

export default Home
