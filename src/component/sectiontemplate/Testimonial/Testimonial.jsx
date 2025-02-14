import React, { useEffect, useState } from 'react'
import './Testimonial.scss'

const testimonials = [
    {
        quote: "This is the best service I have ever used!",
        author: "John Doe",
        position: "CEO, Company X",
    },
    {
        quote: "Absolutely wonderful experience!",
        author: "Jane Smith",
        position: "Marketing Head, Company Y",
    },
    {
        quote: "I highly recommend this to everyone.",
        author: "Alice Johnson",
        position: "Product Manager, Company Z",
    },
];

function Testimonial() {


    return (
        <>

            <div className="jsx_primary_container">
                <div className="jsx_testimonial-container">
                    <div className="jsx_test_img_container">
                        <img src="/img/slideravtar.png" alt="Tetimonial_img" className="" />
                    </div>
                    <div className="jsx_author_container">
                        Howard Marks
                    </div>
                    <div className="jsx_quote_container">
                        <sup> <img src="/img/quotestart.png" alt="quote_start" className="" /></sup>
                        &nbsp;There's only one intelligent form of investing: figuring out what something's worth and see if you can buy it at or below that price. It's all about value
                        &nbsp;<sup><img src="/img/quoteend.png" alt="quote_start" className="" /></sup>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial
