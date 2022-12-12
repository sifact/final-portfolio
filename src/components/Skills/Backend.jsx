import React from "react";

const Backend = () => {
    return (
        <section
            className="skills__content"
            data-aos="fade-up"
            // data-aos-delay="400"
        >
            <h3 className="skills__title">Backend</h3>
            <div className="skills__box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Express</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills_group">
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Django</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">FireBase</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Backend;
