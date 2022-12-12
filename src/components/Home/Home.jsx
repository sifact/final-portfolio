import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Qualification from "../Qualification/Qualification";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <>
            <TopBanner />

            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Contact />
        </>
    );
};

export default Home;
