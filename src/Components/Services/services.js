import React from "react";
import './services.css'
const Services = () => {
    return (
        <>
            <div className="services">
                <h2>Our Services</h2>
                <p style={{ width: "47%", margin: 'auto' }}>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                <div className="columns">
                    <div className="column1">
                        <img src="/images/tractor.svg" />
                        <h3>Lorem Ipsum Operations</h3>
                        <p>Quisque auctor sit amet urna ac suscipit. Orci varius natoque penatibus et magnis.</p>
                    </div>
                    <div className="column2">
                        <img src="/images/kirpich.svg" />
                        <h3>Materials Operations</h3>
                        <p>Quisque auctor sit amet urna ac suscipit. Orci varius natoque penatibus et magnis.</p>
                    </div>
                    <div className="column3">
                        <img src="/images/maliar.svg" />
                        <h3>Painting Operations</h3>
                        <p>Quisque auctor sit amet urna ac suscipit. Orci varius natoque penatibus et magnis.</p>
                    </div>
                    <div className="column4">
                        <img src="/images/truck.svg" />
                        <h3>Sit Amet Operations</h3>
                        <p>Quisque auctor sit amet urna ac suscipit. Orci varius natoque penatibus et magnis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;