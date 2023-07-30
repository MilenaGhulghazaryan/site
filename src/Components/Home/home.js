import React from "react";
import Header from "../Header/Header/header";
import Section from "../Section/section";
import './home.css'
const Home = () => {
    return (
        <div className="background">
            <div className='imgColor'>
                <Header />
                <Section />
            </div>
        </div>
    )
}
export default Home