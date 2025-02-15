import React, { useEffect, useRef, useState } from 'react'
import './Testimonial.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
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
  const container = useRef({});
    useEffect(() => {
        // const line = SplitType.create('#h_1');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top+=30 bottom",
                end: "bottom",
            },
        });
        tl.fromTo(
            container.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6,},
            "0")
        .fromTo
            (
                ".js_testimonial_animation",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8})    
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    }, []);
    return (
        <>

            <div className="jsx_primary_container">
                <div className="jsx_testimonial-container" ref={container}>
                    <div className="jsx_test_img_container js_testimonial_animation">
                        <img src="/img/slideravtar.png" alt="Tetimonial_img" className="" />
                    </div>
                    <div className="jsx_author_container js_testimonial_animation">
                        Howard Marks
                    </div>
                    <div className="jsx_quote_container js_testimonial_animation">
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
