import React from "react";
import "./Services.css";
// import MyComponent from "./MyComponent";
import { GoBrowser } from "react-icons/go";

import { AiFillApi, AiFillDatabase } from "react-icons/ai";

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <div className="services-info-wrapper container">
                <div className="offer__box">
                    <GoBrowser style={{ width: "30px", height: "30px" }} />
                    <h3 className="offer__name">User Interfaces</h3>
                    {/* <a className="offer__details">View More</a> */}
                </div>
                <div className="offer__box">
                    <AiFillApi style={{ width: "30px", height: "30px" }} />
                    <h3 className="offer__name">Api Integration</h3>
                    {/* <a className="offer__details" >
                        View More
                    </a> */}
                </div>
                <div className="offer__box">
                    <AiFillDatabase style={{ width: "30px", height: "30px" }} />
                    <h3 className="offer__name">Back-end</h3>
                    {/* <a className="offer__details" href="">
                        View More
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default Services;
