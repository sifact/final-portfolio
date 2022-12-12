import React from "react";
import { Link } from "react-router-dom";

const WorksItems = ({ item }) => {
    return (
        <div className="work__card">
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            <Link to={`/projectDetails/${item.id}`} className="work__button">
                View Details{" "}
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </Link>
        </div>
    );
};

export default WorksItems;
