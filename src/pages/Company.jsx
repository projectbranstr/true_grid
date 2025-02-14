import React , {useEffect, useRef} from 'react'
import Card from '../component/molecule/Card/Card';
import { companyOverview, popularBlogs, discoverMore } from '../data/api'
import CompanyOverview from '../component/sectiontemplate/Mainbanner/CompanyOverview/CompanyOverview'
import DiscoverCard from '../component/molecule/DiscoverCard/DiscoverCard'
import AnalyseSection from '../component/sectiontemplate/AnalyseSection/AnalyseSection'
import Header from '../component/molecule/Header/Header'
import Footer from '../component/molecule/Footer/Footer'
import CompanyBanner from '../component/sectiontemplate/CompanyBanner/CompanyBanner'

// import NestedTable from '../component/sectiontemplate/NestedTable/NestedTable'
function Company() {
    return (
        <div>
            {/* <Analyse /> */}

            <Header/>
            <CompanyBanner />
           <AnalyseSection />
    
            <DiscoverCard data={discoverMore} />
            <CompanyOverview data={companyOverview} />
            <Card data={popularBlogs} />
            <Footer/>
        </div>
    )
}

export default Company

