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
    link: "https://twitter.com/imSriramB",
    imageLink:
      "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.2560.jpg"
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
      <h2>Let's Connect</h2>
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
    </footer>
  );
}
