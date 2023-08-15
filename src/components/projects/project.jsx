import React from "react";
import "./project.scss"
import ProjectCard from "./project-card";

const Project = () => {
    const PROJECTS = [
        {
            title: "CSS Clock",
            link: "https://sriram23.github.io/css-clock/",
            githubLink: "https://github.com/sriram23/css-clock"
        },
        {
            title: "Weather Now",
            link: "https://weather-now-2.vercel.app/",
            githubLink: "https://github.com/sriram23/weather-now-2.0"
        }
    ]
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                {PROJECTS.map(project => {
                    return (
                        <ProjectCard title={project.title} link={project.link} githubLink={project.githubLink}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Project;