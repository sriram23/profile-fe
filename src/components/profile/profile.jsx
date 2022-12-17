import React from "react";
import Typewriter from "typewriter-effect";
import "./profile.scss";
import image from "../../assets/sriram_normal.jpg";
import image_bw from "../../assets/sriram_bnw.jpg";
import { FaMapMarker } from "react-icons/fa";
import PreloadImage from "react-preload-image"
export default function Profile() {
  const intro = [
    "Software Engineer",
    "Fan of JS",
    "UI Developer",
    "Dude who code",
    "I work with React, React Native & Vue.js",
  ];
  const renderTyperWriter = () => {
    return (
      <Typewriter
        options={{
          strings: intro,
          autoStart: true,
          loop: true
        }}
      />
    );
  };
  return (
    <div className="profile-container">
      <figure>
        <PreloadImage className="profile-image" src={image} lazy/>
      </figure>
      <div className="profile-text-container">
        <h1>Sriram Balasubramanian</h1>
        <h2>{renderTyperWriter()}</h2>
        <p>
          <span className="marker">
            <FaMapMarker />
          </span>
          &nbsp;Coimbatore, India
        </p>
      </div>
      <div className="bg-img">
        <PreloadImage src={image_bw} />
      </div>
    </div>
  );
}
