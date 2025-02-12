import React from 'react';
import './PrimaryHeading.scss';

function PrimaryHeading({ title }) {
    return (
        <>
          {title && <h1 className="js_section_secondary_heading">{title}</h1>} 
        </>
    )
}

export default PrimaryHeading
