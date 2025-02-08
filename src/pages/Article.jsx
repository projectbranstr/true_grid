import React from 'react'
import Card from '../component/molecule/Card/Card'
import { companyOverview, popularBlogs, discoverMore} from '../data/api'
import CompanyOverview from '../component/sectiontemplate/Mainbanner/CompanyOverview/CompanyOverview'
import DiscoverCard from '../component/molecule/DiscoverCard/DiscoverCard'
import SankeyDiagram from '../component/molecule/SankeyDiagram/SankeyDiagram'
import AnalyseSection from '../component/sectiontemplate/AnalyseSection/AnalyseSection'
function Article() {
    return (
        <div>
            {/* <Analyse /> */}
            <SankeyDiagram />
            {/* <AnalyseSection /> */}
            <DiscoverCard data={discoverMore}/>
            <CompanyOverview data={companyOverview}/>
            <Card data={popularBlogs}/>
        </div>
    )
}

export default Article
