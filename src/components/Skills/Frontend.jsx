import React from "react";

const Frontend = () => {
    return (
        <section
            className="skills__content "
            data-aos="fade-up"
            // data-aos-delay="400"
        >
            <h3 className="skills__title">Frontend</h3>
            <div className="skills__box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills_group">
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Frontend;
