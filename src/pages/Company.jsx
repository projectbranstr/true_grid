import React from 'react'
import Card from '../component/molecule/Card/Card'
import { companyOverview, popularBlogs, discoverMore } from '../data/api'
import CompanyOverview from '../component/sectiontemplate/Mainbanner/CompanyOverview/CompanyOverview'
import DiscoverCard from '../component/molecule/DiscoverCard/DiscoverCard'
import AnalyseSection from '../component/sectiontemplate/AnalyseSection/AnalyseSection'

// import NestedTable from '../component/sectiontemplate/NestedTable/NestedTable'
function Company() {
    return (
        <div>
            {/* <Analyse /> */}
           <AnalyseSection />
    
            <DiscoverCard data={discoverMore} />
            <CompanyOverview data={companyOverview} />
            <Card data={popularBlogs} />
        </div>
    )
}

export default Company

