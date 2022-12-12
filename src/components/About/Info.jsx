import React from "react";

const infos = [
    {
        id: 1,
        title: "Experience",
        time: "1.5 Years learning",
        icon: "bx bxs-award about__icon",
        delay: 500,
    },
    {
        id: 2,
        title: "Completed",
        time: "24 + projects",
        icon: "bx bx-briefcase about__icon",
        delay: 800,
    },
    {
        id: 3,
        title: "Support",
        time: "online 24/7",
        icon: "bx bx-support about__icon",
        delay: 1000,
    },
];
const Info = () => {
    return (
        <div className="about__info grid">
            {infos.map((info) => {
                return (
                    <div
                        className="about__box "
                        data-aos-delay={info.delay}
                        data-aos="fade-up"
                    >
                        <i className={info.icon}></i>
                        <h3 className="about__title">{info.title}</h3>
                        <span className="about__subtitle">{info.time}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Info;
