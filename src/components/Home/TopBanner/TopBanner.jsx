// import Social from "./Social";

import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import React, { useState, useEffect, useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import Data from "../Data";
import ScrollDown from "../ScrollDown";
import Social from "../Social";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const TopBanner = (props) => {
    // const [vantaEffect, setVantaEffect] = useState(null);
    // const myRef = useRef(null);

    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(
    //             DOTS({
    //                 el: myRef.current,
    //             })
    //         );
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy();
    //     };
    // }, [vantaEffect]);

    useEffect(() => {
        Aos.init({
            duration: 2500,
            delay: 400,
        });
    }, []);
    return (
        // <div ref={myRef}>
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div
                        data-aos="fade-down"
                        data-aos-delay="500"
                        className="home__img"
                    ></div>
                    {/* <Data /> */}
                    <Data />
                </div>
                <ScrollDown />
                {/* <ScrollDown /> */}
            </div>
        </section>
        // </div>
    );
};

export default TopBanner;

// const Home = () => {
//     useEffect(() => {
//         Aos.init({
//             duration: 2500,
//             delay: 400,
//         });
//     }, []);
//     return (
{
    /* <section className="home section" id="home">
    <div className="home__container container grid">
        <div className="home__content grid">
            <Social />
            <div
                data-aos="fade-down"
                data-aos-delay="500"
                className="home__img"
            ></div>
            <Data />
        </div>
        <ScrollDown />
    </div>
</section>; */
}
//     );
// };

// export default Home;
