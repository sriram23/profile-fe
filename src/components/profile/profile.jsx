import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import "./profile.scss";
import image from "../../assets/sriram_normal.jpg";
import image_bw from "../../assets/sriram_bnw.jpg";
import banner from "../../assets/banner.png";
import { FaMapMarker } from "react-icons/fa";
import PreloadImage from "react-preload-image";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";
export default function Profile() {
  const {t} = useTranslation()
  const intro = [
    "React",
    "React Native",
    "Vue",
    "JavaScript",
    "Typescript",
    "Kubernetes",
    "Python",
  ];
  const { theme } = useContext(ThemeContext);
  const renderTyperWriter = () => {
    return (
      <Typewriter
        options={{
          strings: intro,
          autoStart: true,
          loop: true,
        }}
      />
    );
  };
  return (
    <div className={"profile-container-" + theme}>
      <div className="profile-text-container">
        <figure>
          <PreloadImage className="profile-image" src={image} lazy />
        </figure>
        <div>
          <h1>{t('SriramBalasubramanian')}</h1>
          <h2>{t('SoftwareEngineer')}</h2>
          {/* <h2>I work with &nbsp;{renderTyperWriter()}</h2> */}
          <p>
            <span className="marker">
              <FaMapMarker />
            </span>
            &nbsp;{t("Address")}
          </p>
        </div>
      </div>
      <div className="profile-about-container"></div>
      <div className="bg-img">
        <PreloadImage src={banner} />
      </div>
    </div>
  );
}
