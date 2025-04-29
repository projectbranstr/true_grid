import React from 'react'
import ArticleSection from '../component/sectiontemplate/Articlesection/ArticleSection'
import Articlebanner from '../component/sectiontemplate/Articlebanner/Articlebanner.jsx'
import Card from '../component/molecule/Card/Card.jsx'
import { popularBlogs, storyCard , articleOtherblogs } from '../data/api.js'
import Header from '../component/molecule/Header/Header.jsx'
import Footer from '../component/molecule/Footer/Footer.jsx'

function Article() {
  return (
    <>
      <Header />
      <Articlebanner />
      <ArticleSection />
      <Card data={storyCard} varient />
      <Card data={articleOtherblogs} />
      <Footer />
    </>
  )
}

export default Article
