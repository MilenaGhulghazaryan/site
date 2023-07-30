import React from "react";
import './section.css'
const Section = () => {
    return (
        <>
            <div className="sec1">
                <h1>Lorem Ipsum Dolor Sit Amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum interdum libero. Sed a dui pretium arcu ornare accumsan. Duis in mi libero.</p>
            </div>
            <div className="sec2">
                <input placeholder="Enter Your Email" />
                <button>Get started</button>
            </div>
        </>
    )
}
export default Section;