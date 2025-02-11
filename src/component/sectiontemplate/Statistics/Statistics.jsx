import React from 'react'
import PrimaryHeading from '../../atom/PrimaryHeading/PrimaryHeading'
import './Statistics.scss'

function Statistics() {
    return (
        <>
            <div className="jsx_stat_main_container">
                <PrimaryHeading title="Trending Statistics" />
                <img src="/img/stat_img1.png" alt="Statistics" />
            </div>
        </>
    )
}

export default Statistics
