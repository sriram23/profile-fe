import { useState, useEffect } from "react";
import CSS_CLOCK from "../../assets/video/css_clock.gif";
import WEATHER_NOW from "../../assets/video/WeatherNow.gif";
import ReactMarkdown from "react-markdown";
// Prism for code keyword highlight
import Prism from "prismjs";
// remarkGfm for extended MD
import remarkGfm from "remark-gfm";
// rehypeRaw to accept html
import rehypeRaw from "rehype-raw";
const ProjectCard = ({ link, title, githubLink, readmeLink }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const GIF = title === "CSS Clock" ? CSS_CLOCK : WEATHER_NOW;

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
            <div className="link">{"\uD83D\uDD17"}</div>
          </a>
        )}
        <a href={githubLink} target="_blank" rel="noreferrer">
          <div className="github-link">
            <figure className="github-icon">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Github"
              />
            </figure>
          </div>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
