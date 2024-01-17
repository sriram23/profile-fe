import React, { useContext } from "react";
import "./profile.scss";
import image from "../../assets/sriram_new.webp";
import banner from "../../assets/banner.jpg";
import { FaMapMarker } from "react-icons/fa";
import PreloadImage from "react-preload-image";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div id="about" className={"profile-container-" + theme}>
      <div className="profile-text-container">
        <figure>
          <PreloadImage className="profile-image" src={image} duration="0ms"/>
        </figure>
        <div>
          <h1>{t("SriramBalasubramanian")}</h1>
          <h2>{t("SoftwareEngineer")}</h2>
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
        <PreloadImage src={banner} duration="0ms"/>
        <div className="credit-section">
          Photo By{" "}
          <a
            href="https://unsplash.com/@anasalshanti?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noreferrer"
          >
            Anas Alshanti
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/focus-photography-of-computer-keyboard-with-red-lights-feXpdV001o4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </div>
      </div>
    </div>
  );
}
