import React from "react";
import './gallery.css'
const Gallery = () => {
    return (
        <>
            <div class="galleryText">
                <h2>Gallery</h2>
                <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat cupidatat proident culpa.</p>
            </div>
            <div className="images">
                <div className="img1">
                    <img src="/images/1.jpg" />
                    <img src="/images/2.jpg" />
                    <img src="/images/3.jpg" />
                </div>
                <div className="img2">
                    <img src="/images/4.jpg" />
                    <img src="/images/5.jpg" />
                    <img src="/images/6.jpg" />
                </div>
            </div>
        </>
    )
}
export default Gallery;