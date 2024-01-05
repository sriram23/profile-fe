import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// Prism for code keyword highlight
import Prism from "prismjs";
// remarkGfm for extended MD
import remarkGfm from "remark-gfm";
// rehypeRaw to accept html
import rehypeRaw from "rehype-raw";
import { useTranslation } from "react-i18next";
const ProjectCard = ({ link, title, githubLink, readmeLink }) => {
  const {t} = useTranslation()
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const githubRawUrl = readmeLink;

    // Fetch the raw Markdown content
    fetch(githubRawUrl)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error("Error fetching Markdown:", error));
  }, []);
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="project-card">
      <div className="title">
        <h2 className="project-title">{title}</h2>
      </div>
      <ReactMarkdown
        className="md-container"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {markdownContent}
      </ReactMarkdown>
      <div className="link-container">
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            {/* <div className="link">{"\uD83D\uDD17"}</div> */}
            <button className="link">{t("Link")}</button>
          </a>
        )}
        <a href={githubLink} target="_blank" rel="noreferrer">
          <button className="link">{t("Source")}</button>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
