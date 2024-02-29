import React from "react";
import "./project.scss";
import ProjectCard from "./project-card";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  const PROJECTS = [
    {
      id: 10,
      title: t("CineCorner"),
      link: "https://cine-corner.web.app/",
      githubLink: "https://github.com/sriram23/CineCorner",
      imageLink:
        "https://private-user-images.githubusercontent.com/18396996/308983373-b75dcda9-dcff-4586-a5dc-a458a7f59e09.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkyMjIwMzQsIm5iZiI6MTcwOTIyMTczNCwicGF0aCI6Ii8xODM5Njk5Ni8zMDg5ODMzNzMtYjc1ZGNkYTktZGNmZi00NTg2LWE1ZGMtYTQ1OGE3ZjU5ZTA5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI5VDE1NDg1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlYjI1OGM5MDhkMDkzNDVmYjhlMzY1NGI1YWRjZGMyODk0MDFiMWJiMzY3YTRhY2UxZjIyMzY4ZWU0NjAxYTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.HdJtOsiqGf5eif_HZZ5y0-1w4h-38RNJT06uBFbfkmE",
      description: "A movie application leveraging TMDB API",
    },
    {
      id: 1,
      title: t("SwiggyClone"),
      link: "https://swiggy-clone-23.web.app/",
      githubLink: "https://github.com/sriram23/swiggy-clone",
      imageLink:
        "https://sriram-23.vercel.app/image?file=swiggy.png",
      description: "React clone of swiggy.com landing page",
    },
    {
      id: 2,
      title: t("CssClock"),
      link: "https://sriram23.github.io/css-clock/",
      githubLink: "https://github.com/sriram23/css-clock",
      imageLink:
        "https://sriram-23.vercel.app/image?file=css-clock.gif",
      description: "Analog clock made with HTML, CSS and JavaScript",
    },
    {
      id: 3,
      title: t("WeatherNow"),
      link: "https://weather-now-2.vercel.app/",
      githubLink: "https://github.com/sriram23/weather-now-2.0",
      imageLink:
        "https://sriram-23.vercel.app/image?file=weathernow-2.gif",
      description:
        "React weather application, fetching weather data from openweathermap",
    },
    {
      id: 4,
      title: t("WeatherNow1"),
      link: "https://sriram23.github.io/Weather-Now/",
      githubLink: "https://github.com/sriram23/Weather-Now",
      imageLink:
        "https://sriram-23.vercel.app/image?file=weathernow-1.gif",
      description: "Weather application made with HTML, CSS and JavaScript",
    },
    {
      id: 5,
      title: t("VanillaKeyboard"),
      link: "https://sriram23.github.io/vanilla-keyboard/",
      githubLink: "https://github.com/sriram23/vanilla-keyboard",
      imageLink:
        "https://sriram-23.vercel.app/image?file=keyboard.png",
      description: "A simple HTML, CSS & JS keyboard",
    },
    {
      id: 6,
      title: t("MarkdownEditor"),
      link: "https://md-editor.web.app/",
      githubLink: "https://github.com/sriram23/md-editor",
      imageLink:
        "https://sriram-23.vercel.app/image?file=md-editor.png",
      description: "A markdown editor made with React",
    },
    {
      id: 7,
      title: t("BatteryTracker"),
      link: "https://medium.com/swlh/a-simple-battery-status-tracker-for-linux-using-python-4d90d68d7502",
      githubLink: "https://github.com/sriram23/Battery-Tracker",
      imageLink:
        "https://sriram-23.vercel.app/image?file=battery-tracker.png",
      description:
        "A simple battery charge tracker that tracks the battery status and alerts the user when battery is low (<30%) when discharging and when battery is full when charging",
    },
    {
      id: 8,
      title: t("InsuranceAutomation"),
      link: "",
      githubLink:
        "https://github.com/sriram23/Insurance-Claim-Automation-System",
      imageLink:
        "https://sriram-23.vercel.app/image?file=uipath.webp",
      description:
        "An Automation System that assesses and approves the insurance claim requests, implemented with UiPath",
    },
    {
      id: 9,
      title: t("FirefoxAddons"),
      link: "https://addons.mozilla.org/en-US/firefox/user/12637768/",
      githubLink: "https://github.com/sriram23/Web_Extensions",
      imageLink:
        "https://sriram-23.vercel.app/image?file=mozilla.png",
      description: `Developed Firefox Addons:
            1. Google Signout: Sign out from Google account on one click
            2. Search Selection: Addon that search selected texts across different search engines
            3. PX to REM Converter: A simple addon to convert pixel values to rem
            4. Analog Clock: A simple analog clock made with html, css and javascript`,
    },
  ];
  return (
    <section className="projects" id="projects">
      <h2 className="project-section-heading">{t("Projects")}</h2>
      <div id="project-container" className="project-container">
        {PROJECTS.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              link={project.link}
              githubLink={project.githubLink}
              imageLink={project.imageLink}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
