import PreloadImage from "react-preload-image";
import { useTranslation } from "react-i18next";
const ProjectCard = ({ link, title, githubLink, imageLink, description }) => {
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <div className="title-container">
        <div className="text-container">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>
        <div className="link-container">
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              <button className="link">{t("Link")}</button>
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className="link">{t("Source")}</button>
          </a>
        </div>
      </div>
      <div className="image-container">
        <PreloadImage
          src={imageLink}
          alt={title}
          className="project-image"
          lazy
        />
      </div>
    </div>
  );
};
export default ProjectCard;
