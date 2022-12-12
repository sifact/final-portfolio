import React from "react";
import "./ProjectDetail.css";

const ProjectDetail = ({ item, id }) => {
    const { images, title, tech, overview, description } = item;
    return (
        <div>
            {item.id == id && (
                <>
                    <h1 className="section__title">{title}</h1>
                    <span className="section__subtitle description">
                        {item.description}
                    </span>
                    <div className="img-wrapper">
                        {images.map((img) => {
                            return (
                                <div>
                                    <img src={img} alt="" className="img" />
                                </div>
                            );
                        })}
                        <div className="tech-wrapper">
                            {tech.map((item) => {
                                return <h3>{item}</h3>;
                            })}
                        </div>
                    </div>
                    <div className="overview">
                        <h1 className="section__title">Overview</h1>
                        {overview.map((item) => {
                            return (
                                <ul className="overview-items">
                                    <li>{item}</li>
                                </ul>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectDetail;
