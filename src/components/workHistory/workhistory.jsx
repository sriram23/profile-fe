import React, { useContext } from "react";
import Dell from "../../assets/dell_tech.png";
import Squash from "../../assets/squash.png";
import Ugam from "../../assets/ugam.jpg";
import "./workhistory.scss";
import { ThemeContext } from "../../Context/ThemeContext";

import PreloadImage from "react-preload-image";
import { useTranslation } from "react-i18next";
export default function WorkHistory() {
  const {t} = useTranslation()
  const { theme } = useContext(ThemeContext);
  const workHistory = [
    {
      id: 1,
      firm: t("Company.DellEMC"),
      // period: "July 2021 - Present",
      designations: [
        {
          id:1,
          title: t("Role.SE2"),
          period: t("Month.Sep")+" 2022 - "+t("Month.Present"),
        },
        {
          id:2,
          title: t("Role.SE1"),
          period: t("Month.Jul")+" 2021 - "+t("Month.Sep")+" 2022",
        },
      ],
      techStacks: [
        "React JS",
        "Graphql",
        "Typescript",
        "Python",
        "Flask",
        "CSS",
        "Docker",
        "Kubernetes",
        "Bash",
      ],
      image: Dell,
    },
    {
      id: 2,
      firm: t("Company.SquashApps"),
      // period: "November 2019 - May 2021",
      designations: [
        {
          id:3,
          title: t("Role.JSE"),
          period: t("Month.Nov")+" 2019 - "+t("Month.May")+" 2021",
        },
      ],
      techStacks: ["React JS", "React Native", "Vue", "Nuxt"],
      image: Squash,
    },
    {
      id: 3,
      firm: t("Company.Ugam"),
      // period: "May 2018 - Oct 2019",
      designations: [
        {
          id:4,
          title: t("Role.Analyst"),
          period: t("Month.May")+" 2019 - "+t("Month.Oct")+" 2019",
        },
        {
          id:5,
          title: t("Role.AssociateAnalyst"),
          period: t("Month.May")+" 2018 - "+t("Month.May")+" 2019",
        },
      ],
      techStacks: ["Excel", "SPSS", "ASKIA"],
      image: Ugam,
    },
  ];

  return (
    <div className={"work-container-" + theme} id="work-history">
      <h2>{t("Experience")}</h2>
      {workHistory.map((work) => (
        <div className="work-card" key={work.id}>
          <figure>
            <PreloadImage
              className="firm-logo"
              src={work.image}
              alt={work.firm}
              lazy
            />
          </figure>
          <p className="firm">{work.firm}</p>
          {work.designations.map((designation) => (
            <div key={designation.id}>
              <p className="designation">{designation.title}</p>
              <p className="period">{designation.period}</p>
            </div>
          ))}
          <div className="tech-container">
            {work.techStacks.map((techStack, key) => (
              <div key={key} className="tech">
                {techStack}
              </div>
            ))}
          </div>
        </div>
      ))}
      <span id="dash"></span>
    </div>
  );
}
