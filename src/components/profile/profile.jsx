import React from "react";
import "./profile.scss";
import image from "../../assets/sriram_normal.jpg";
import image_bw from "../../assets/sriram_bnw.jpg";
import { FaMapMarker } from "react-icons/fa";
export default function Profile() {
  return (
    <div className="profile-container">
      <figure className="profile-image">
        <img src={image} alt="Profile Image" />
      </figure>
      <div className="profile-text-container">
        <h1>Sriram Balasubramanian</h1>
        <h2>Software Engineer, Dell EMC</h2>
        <p>
          <span className="marker">
            <FaMapMarker />
          </span>
          &nbsp;Coimbatore, India
        </p>
      </div>
      <div className="bg-img">
        <img src={image_bw} alt="image background" />
      </div>
    </div>
  );
}
