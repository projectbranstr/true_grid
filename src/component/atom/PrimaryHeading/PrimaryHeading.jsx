import React from 'react';
import './PrimaryHeading.scss';

function PrimaryHeading({ title }) {
    return (
        <>
            {title && <h3 className='jsx_primary_heading'>{title}</h3>}
        </>
    )
}

export default PrimaryHeading
