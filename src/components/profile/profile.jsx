import React, { useContext, useEffect, useRef, useState } from "react";
// import Typewriter from "typewriter-effect";
import "./profile.scss";
import image from "../../assets/sriram_new.png";
// import banner from "../../assets/banner.png";
import { FaMapMarker } from "react-icons/fa";
import PreloadImage from "react-preload-image";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

import STARS from "../../assets/stars.mp4"
import ASTEROIDS from "../../assets/asteroids.mp4"
import COSMOS from "../../assets/cosmo.mp4"
import NIGHT_SKY from "../../assets/night-sky.mp4"
const VIDEOS = [
  {video: STARS, credit: "Video by Postcard Pictures", link: "https://www.pexels.com/video/starry-night-sky-timelapse-5818973/"},
  {video: ASTEROIDS, credit: "Video by Pixabay", link: "https://www.pexels.com/video/outer-space-856309/"},
  {video: COSMOS, credit: "Video by Robert Daniel", link: "https://www.pexels.com/video/push-in-shot-of-space-9440173/"},
  {video: NIGHT_SKY, credit: "Video by Andrew Dyer", link: "https://www.pexels.com/video/time-lapse-footage-of-of-the-night-sky-speckled-with-stars-2792967/"}
]
export default function Profile() {
  const videoRef = useRef(null);
  const {t} = useTranslation()
  const [currentVideo, setCurrentVideo] = useState(VIDEOS[0])
  const [videoIndex, setVideoIndex] = useState(0);
  useEffect(() => {
    const video = videoRef.current;
    if(video) {
      video.src = currentVideo.video
      video.play()
    }
  }, [currentVideo])
  const handleEnded = async () => {
    setVideoIndex(prev => prev + 1)
    console.log("Video Ended: ", videoIndex, videoIndex%VIDEOS.length)
    setCurrentVideo(VIDEOS[videoIndex%VIDEOS.length])
  }
  // const intro = [
  //   "React",
  //   "React Native",
  //   "Vue",
  //   "JavaScript",
  //   "Typescript",
  //   "Kubernetes",
  //   "Python",
  // ];
  const { theme } = useContext(ThemeContext);
  /** React Typewriter - Commented temporarily */
  // const renderTyperWriter = () => {
  //   return (
  //     <Typewriter
  //       options={{
  //         strings: intro,
  //         autoStart: true,
  //         loop: true,
  //       }}
  //     />
  //   );
  // };
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
        {/* <PreloadImage src={banner} /> */}
        <video ref={videoRef} style={{width:"100%", height:"100%", objectFit: "cover"}} autoPlay muted onContextMenu={(e) => e.preventDefault()} onEnded={handleEnded}/>
        <div className="credit-section">
          <a href={currentVideo.link} target="_blank" rel="noreferrer">{currentVideo.credit}</a>
        </div>
      </div>
    </div>
  );
}
