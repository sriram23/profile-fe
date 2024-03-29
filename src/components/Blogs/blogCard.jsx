import AuthorCard from "./authorCard";
import "./blogs.scss";
import CategoryChip from "./categoryChip";
import PreloadImage from "react-preload-image";
import PLACEHOLDER from "../../assets/placeholder.jpg";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import { useTranslation } from "react-i18next";
const BlogCard = ({ blog, avatar, pub }) => {
  const {t} = useTranslation()
  const  {theme} = useContext(ThemeContext)
  return (
    <div className={"blog-card-"+theme}>
      <AuthorCard
        author={pub}
        avatar={avatar}
        time={blog.node.publishedAt}
        src={"hashnode"}
        views={blog.node.views}
        readTime={blog.node.readTimeInMinutes}
         // Hardcoding this for now. Will be removed in future
      ></AuthorCard>
      <h3 className="blog-title">{blog.node.title}</h3>
      <h4 className="blog-subtitle">{blog.node.subtitle}</h4>
      <figure>
        {blog.node.coverImage && blog.node.coverImage.url ? (
          <PreloadImage
            className="thumbnail"
            src={
              blog.node.coverImage.url
            }
            alt="Thumbnail"
          />
        ) : (
          <PreloadImage
            className="thumbnail"
            src={PLACEHOLDER}
            alt="Photo by Eduardo Dutra"
          />
        )}
      </figure>
      <span>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog.node.content.markdown.slice(0, 250)+"..."}</ReactMarkdown>
      </span>
      <span className="category-section">
        {blog.node.tags && <strong>{t("Tags")}:</strong>}{" "}
        <span className="category-container">
          {blog.node.tags &&
            blog.node.tags.map((category) => (
              <CategoryChip key={category.name} category={category.name}></CategoryChip>
            ))}
        </span>
      </span>
      <div className={"read-more-container-"+theme}>
        <button onClick={() => window.open("https://sriram23.hashnode.dev/"+blog.node.slug, "_blank")}>{t("ReadMore")} {'\u2192'}</button>
      </div>
      </div>
  );
};
export default BlogCard;
