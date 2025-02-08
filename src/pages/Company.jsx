import React from 'react'
import Card from '../component/molecule/Card/Card'
import { companyOverview, popularBlogs, discoverMore } from '../data/api'
import CompanyOverview from '../component/sectiontemplate/Mainbanner/CompanyOverview/CompanyOverview'
import DiscoverCard from '../component/molecule/DiscoverCard/DiscoverCard'
import SankeyDiagram from '../component/molecule/SankeyDiagram/SankeyDiagram'
import { MantineProvider } from '@mantine/core';
import AnalyseSection from '../component/sectiontemplate/AnalyseSection/AnalyseSection'
import Articlebanner from '../component/sectiontemplate/Articlebanner/Articlebanner'
import CompanyBanner from '../component/sectiontemplate/CompanyBanner/CompanyBanner'
import StockChart from '../component/sectiontemplate/StockChart/StockChart'
// import NestedTable from '../component/sectiontemplate/NestedTable/NestedTable'
function Company() {
    return (
        <div>
            {/* <Analyse /> */}
            <CompanyBanner />
            {/* <StockChart /> */}
            {/* <MantineProvider > */}
            {/* <NestedTable /> */}

            {/* </MantineProvider> */}
            {/* <AnalyseSection /> */}
            <DiscoverCard data={discoverMore} />
            <CompanyOverview data={companyOverview} />
            <Card data={popularBlogs} />
        </div>
    )
}

export default Company

