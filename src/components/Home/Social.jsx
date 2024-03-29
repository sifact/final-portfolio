import React from "react";

const Social = () => {
    return (
        <div
            className="home__social"
            data-aos-delay="700"
            data-aos="fade-right"
        >
            <a
                href="https://instagram.com/"
                className="home__social-icon"
                target="_blank"
            >
                <i className="uil uil-instagram"></i>
            </a>
            <a
                href="https://dribbble.com/"
                className="home__social-icon"
                target="_blank"
            >
                <i className="uil uil-dribbble"></i>
            </a>
            <a
                href="https://github.com/sifact"
                className="home__social-icon"
                target="_blank"
            >
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;
