import React, { useContext } from "react";
import "./footer.scss";
import PreloadImage from "react-preload-image"
import { ThemeContext } from "../../Context/ThemeContext";
const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/DudeWhoCode",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png"
  },
  {
    name: "Twitter",
    link: "https://x.com/imSriramB",
    imageLink:
      "https://static.toiimg.com/thumb/msid-102075304,imgsize-5578,width-400,resizemode-4/102075304.jpg"
  },
  {
    name: "Github",
    link: "https://github.com/sriram23",
    imageLink:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "Medium",
    link: "https://medium.com/@sriram23",
    imageLink:
      "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"
  },
  {
    name: "Hashnode",
    link: "https://sriram23.hashnode.dev/",
    imageLink:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/imsriramb",
    imageLink: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  }
];

export default function Footer() {
  const {theme} = useContext(ThemeContext);
  return (
    <footer className={"footer-container-"+theme}>
      <h2>Social Links</h2>
      <div className="social-section">
        {socialLinks.map((media) => (
          <a className="social-card" href={media.link} target="_blank" rel="noreferrer">
            <figure>
              <PreloadImage className="social-image" src={media.imageLink} lazy/>
            </figure>
            <div className="social-title">
              <h3>{media.name}</h3>
            </div>
          </a>
        ))}
      </div>
      {/* TODO: Uncomment in future if required */}
      {/* <p>
        Made with{" "}
        <span className="heart">
          <FaHeart />
        </span>{" "}
        in React
      </p> */}
      {/**  Below copyright text needs to be checked */}
      <p>{"\u00A9 2023 - Sriram Balasubramanian"}</p>
    </footer>
  );
}
