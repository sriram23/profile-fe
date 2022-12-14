import React, { useContext } from "react";
import Dell from "../../assets/dell_tech.png";
import Squash from "../../assets/squash.png";
import Ugam from "../../assets/ugam.jpg";
import "./workhistory.scss";
import { ThemeContext } from "../../Context/ThemeContext";

import PreloadImage from "react-preload-image"
export default function WorkHistory() {
  const {theme} = useContext(ThemeContext)
  const workHistory = [
    {
      id: 1,
      firm: "Dell EMC",
      // period: "July 2021 - Present",
      designations: [
        {
          title: "Software Engineer II",
          period: "September 2022 - Present"
        },
        {
          title: "Software Engineer I",
          period: "July 2021 - September 2022"
        }
      ],
      image: Dell
    },
    {
      id: 2,
      firm: "Squash Apps",
      // period: "November 2019 - May 2021",
      designations: [
        {
          title: "Junior Software Engineer",
          period: "November 2019 - May 2021"
        }
      ],
      image: Squash
    },
    {
      id: 3,
      firm: "Ugam - A Merkle Company",
      // period: "May 2018 - Oct 2019",
      designations: [
        {
          title: "Analyst - Research Operations",
          period: "May 2019 - Oct 2019"
        },
        {
          title: "Associate Analyst - Research Operations",
          period: "May 2018 - May 2019"
        }
      ],
      image: Ugam
    }
  ];

  return (
    <div className={"work-container-"+theme} id="work-history">
      <h2>Work History</h2>
      {workHistory.map((work) => (
        <div className="work-card" key={work.id}>
          <figure>
            <PreloadImage  className="firm-logo" src={work.image} alt={work.firm} lazy/>
          </figure>
          <p className="firm">{work.firm}</p>
          {work.designations.map((designation) => (
            <div>
              <p className="designation">{designation.title}</p>
              <p className="period">{designation.period}</p>
            </div>
          ))}
        </div>
      ))}
      <span id="dash"></span>
    </div>
  );
}
