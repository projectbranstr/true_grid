import React from 'react'
import ArticleSection from '../component/sectiontemplate/Articlesection/ArticleSection'
import Articlebanner from '../component/sectiontemplate/Articlebanner/Articlebanner.jsx'
import Card from '../component/molecule/Card/Card.jsx'
import { popularBlogs, storyCard } from '../data/api.js'

function Article() {
  return (
    <>
      <Articlebanner />
      <ArticleSection />
      <Card data={storyCard} varient/>
      <Card data={popularBlogs} />
    </>
  )
}

export default Article
