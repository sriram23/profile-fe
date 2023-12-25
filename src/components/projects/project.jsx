import React from "react";
import "./project.scss"
import ProjectCard from "./project-card";
import { useTranslation } from "react-i18next";

const Project = () => {
    const {t} = useTranslation()
    const PROJECTS = [
        {
            title: t("SwiggyClone"),
            link: "https://swiggy-clone-23.web.app/",
            githubLink: "https://github.com/sriram23/swiggy-clone",
            readmeLink: "https://raw.githubusercontent.com/sriram23/swiggy-clone/main/README.md"
        },
        {
            title: t("CssClock"),
            link: "https://sriram23.github.io/css-clock/",
            githubLink: "https://github.com/sriram23/css-clock",
            readmeLink: "https://raw.githubusercontent.com/sriram23/css-clock/master/README.md"
        },
        {
            title: t("WeatherNow"),
            link: "https://weather-now-2.vercel.app/",
            githubLink: "https://github.com/sriram23/weather-now-2.0",
            readmeLink: "https://raw.githubusercontent.com/sriram23/weather-now-2.0/master/README.md"
        }, 
        {
            title: t("WeatherNow1"),
            link: "https://sriram23.github.io/Weather-Now/",
            githubLink: "https://github.com/sriram23/Weather-Now",
            readmeLink: "https://raw.githubusercontent.com/sriram23/Weather-Now/master/README.md"
        }, 
        {
            title: t("VanillaKeyboard"),
            link: "https://sriram23.github.io/vanilla-keyboard/",
            githubLink: "https://github.com/sriram23/vanilla-keyboard",
            readmeLink: "https://raw.githubusercontent.com/sriram23/vanilla-keyboard/main/README.md"
        },
        {
            title: t("MarkdownEditor"),
            link: "https://md-editor.web.app/",
            githubLink: "https://github.com/sriram23/md-editor",
            readmeLink: "https://raw.githubusercontent.com/sriram23/md-editor/main/README.md"
        },
        {
            title: t("BatteryTracker"),
            link: "https://medium.com/swlh/a-simple-battery-status-tracker-for-linux-using-python-4d90d68d7502",
            githubLink: "https://github.com/sriram23/Battery-Tracker",
            readmeLink: "https://raw.githubusercontent.com/sriram23/Battery-Tracker/master/README.md"
        },
        {
            title: t("InsuranceAutomation"),
            link: "",
            githubLink: "https://github.com/sriram23/Insurance-Claim-Automation-System",
            readmeLink: "https://raw.githubusercontent.com/sriram23/Insurance-Claim-Automation-System/master/README.md"
        },
        {
            title: t("FirefoxAddons"),
            link: "https://addons.mozilla.org/en-US/firefox/user/12637768/",
            githubLink: "https://github.com/sriram23/Web_Extensions",
            readmeLink: "https://raw.githubusercontent.com/sriram23/Web_Extensions/master/README.md"
        }
    ]
    return (
        <section className="projects" id="projects">
            <h2 className="project-section-heading">{t("Projects")}</h2>
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