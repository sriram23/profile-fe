import AuthorCard from "./authorCard";
import "./blogs.scss";
// import CategoryChip from "./categoryChip";
import PreloadImage from "react-preload-image";
import PLACEHOLDER from "../../assets/placeholder.jpg";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";
import ReactMarkdown from 'react-markdown'
const BlogCard = ({ blog, avatar, pub }) => {
  const  {theme} = useContext(ThemeContext)
  return (
    <div className={"blog-card-"+theme}>
      <AuthorCard
        author={pub}
        avatar={avatar}
        time={blog.dateAdded}
        src={"hashnode"} // Hardcoding this for now. Will be removed in future
      ></AuthorCard>
      <h3>{blog.title}</h3>
      <figure>
        {blog.coverImage ? (
          <PreloadImage
            className="thumbnail"
            src={
              blog.coverImage
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
          <ReactMarkdown>{blog.contentMarkdown.slice(0, 250)+"..."}</ReactMarkdown>
      </span>
      {/* Commenting now. May be used in future */}
      {/* <span className="category-section">
        {blog.categories && <strong>Categories:</strong>}{" "}
        <span className="category-container">
          {blog.categories &&
            blog.categories.map((category) => (
              <CategoryChip category={category}></CategoryChip>
            ))}
        </span>
      </span> */}
      <div className={"read-more-container-"+theme}>
        <button onClick={() => window.open("https://sriram23.hashnode.dev/"+blog.slug, "_blank")}>Read More →</button>
      </div>
      </div>
  );
};
export default BlogCard;
