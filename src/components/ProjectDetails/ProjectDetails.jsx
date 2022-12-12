import React from "react";
import { useLoaderData } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { projectData } from "../work/Data";
import ProjectDetail from "./ProjectDetail/ProjectDetail";

const ProjectDetails = () => {
    const id = useLoaderData();

    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (
        <section
            data-theme={theme}
            style={{
                color: "black",
                marginTop: "72px",
                minHeight: "100vh",
            }}
            className="section"
        >
            <div className="container">
                <Navbar switchTheme={switchTheme} theme={theme} />
                {projectData.map((item) => (
                    <ProjectDetail key={item.id} item={item} id={id} />
                ))}
            </div>
        </section>
    );
};

export default ProjectDetails;
