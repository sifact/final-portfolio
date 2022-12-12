import React from "react";
import "./Qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {/* <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div> */}
                    {/* <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon">
                            Experience
                        </i>
                    </div> */}
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        {/* data */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    BSC in Statistics
                                </h3>
                                <span className="qualification__subtitle">
                                    Jatiya Kabi Kazi Nazrul Islam University
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2019-present
                                </div>
                            </div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Web Development
                                </h3>
                                <span className="qualification__subtitle">
                                    Programming Hero
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    July 30, 2020 - present
                                </div>
                            </div>
                        </div>
                        {/* data */}
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">
                                    Ta'mirul Millat Kamil Madrasah
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                        {/* <div className="qualification__data">
                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">
                                    Ta'mirul Millat Kamil Madrasah
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="qualification__content">
                   
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">
                                    Ta'mirul Millat Kamil Madrasah
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">
                                    Ta'mirul Millat Kamil Madrasah
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">
                                    Ta'mirul Millat Kamil Madrasah
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Qualification;
