import React from "react";
import "./project.scss"
import ProjectCard from "./project-card";

const Project = () => {
    const PROJECTS = [
        {
            title: "CSS Clock",
            link: "https://sriram23.github.io/css-clock/",
            githubLink: "https://github.com/sriram23/css-clock",
            readmeLink: "https://raw.githubusercontent.com/sriram23/css-clock/master/README.md"
        },
        {
            title: "Weather Now",
            link: "https://weather-now-2.vercel.app/",
            githubLink: "https://github.com/sriram23/weather-now-2.0",
            readmeLink: "https://raw.githubusercontent.com/sriram23/weather-now-2.0/master/README.md"
        }, 
        {
            title: "Vanilla Keyboard",
            link: "https://sriram23.github.io/vanilla-keyboard/",
            githubLink: "https://github.com/sriram23/vanilla-keyboard",
            readmeLink: "https://raw.githubusercontent.com/sriram23/vanilla-keyboard/main/README.md"
        },
        {
            title: "Markdown Editor",
            link: "https://md-editor.web.app/",
            githubLink: "https://github.com/sriram23/md-editor",
            readmeLink: "https://raw.githubusercontent.com/sriram23/md-editor/main/README.md"
        }
    ]
    return (
        <section className="projects">
            <h2 className="project-section-heading">Projects</h2>
            <div className="project-container">
                {PROJECTS.map(project => {
                    return (
                        <ProjectCard title={project.title} link={project.link} githubLink={project.githubLink} readmeLink={project.readmeLink}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Project;