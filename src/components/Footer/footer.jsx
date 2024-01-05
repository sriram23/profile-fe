import React, { useContext } from "react";
import "./footer.scss";
import PreloadImage from "react-preload-image";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} = useTranslation();
  const { theme } = useContext(ThemeContext);

  const socialLinks = [
    {
      id: 1,
      name: t("Social.FB"),
      link: "https://www.facebook.com/DudeWhoCode",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png",
    },
    {
      id:2,
      name: t("Social.X"),
      link: "https://x.com/imSriramB",
      imageLink:
        "https://static.toiimg.com/thumb/msid-102075304,imgsize-5578,width-400,resizemode-4/102075304.jpg",
    },
    {
      id:3,
      name: t("Social.Github"),
      link: "https://github.com/sriram23",
      imageLink:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      id: 4,
      name: t("Social.Medium"),
      link: "https://medium.com/@sriram23",
      imageLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*psYl0y9DUzZWtHzFJLIvTw.png",
    },
    {
      id: 5,
      name: t("Social.Hashnode"),
      link: "https://sriram23.hashnode.dev/",
      imageLink:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress",
    },
    {
      id: 6,
      name: t("Social.Linkedin"),
      link: "https://linkedin.com/in/imsriramb",
      imageLink: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      id: 7,
      name: t("Social.Hackernoon"),
      link: "https://hackernoon.com/u/sriram",
      imageLink: "https://hackernoon.imgix.net/hn-icon.png",
    },
  ];
  return (
    <footer className={"footer-container-" + theme}>
      <h2>{t("Social.SocialLinks")}</h2>
      <div className="social-section">
        {socialLinks.map((media) => (
          <a
            key={media.id}
            className="social-card"
            href={media.link}
            target="_blank"
            rel="noreferrer"
          >
            <figure>
              <PreloadImage
                className="social-image"
                src={media.imageLink}
                lazy
              />
            </figure>
            <div className="social-title">
              <h3>{media.name}</h3>
            </div>
          </a>
        ))}
      </div>
      {/**  Below copyright text needs to be checked */}
      <p>
        <b>Icon Credits:</b>
        <li>
          <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">
            Sun icons created by Supi Adawiah - Flaticon
          </a>
        </li>
        <li>
          <a
            href="https://www.flaticon.com/free-icons/half-moon"
            title="half moon icons"
          >
            Half moon icons created by joalfa - Flaticon
          </a>
        </li>
      </p>
      <p>{"\u00A9 2024 - "+t("SriramBalasubramanian")}</p>
    </footer>
  );
}
