import AuthorCard from "./authorCard";
import "./blogs.scss";
import CategoryChip from "./categoryChip";
import PreloadImage from "react-preload-image";
import PLACEHOLDER from "../../assets/placeholder.jpg";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";
const BlogCard = ({ blog, src }) => {
  const  {theme} = useContext(ThemeContext)
  const splitImage = (text) => {
    // Splitting with ' " ' since the links are inside  " "
    const links = text && text.split('"');
    // Checking for image extension inside the string
    return (
      links &&
      links.length &&
      (links.find(
        (txt) =>
          txt.includes(".png") ||
          txt.includes(".jpg") ||
          txt.includes(".svg") ||
          txt.includes(".jpeg") ||
          txt.includes(".gif")
      ) ||
        null)
    );
  };
  return (
    <a href={blog.link} className={"blog-card-"+theme} target="_blank" rel="noreferrer">
      <AuthorCard
        author={blog.creator}
        time={blog.isoDate}
        src={src}
      ></AuthorCard>
      <h3>{blog.title}</h3>
      <figure>
        {splitImage(blog["content:encoded"]) || splitImage(blog["content"]) ? (
          <PreloadImage
            className="thumbnail"
            src={
              splitImage(blog["content:encoded"]) || splitImage(blog["content"])
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
        {(blog["content:encodedSnippet"] &&
          blog["content:encodedSnippet"].slice(0, 250)) ||
          (blog["contentSnippet"] && blog["contentSnippet"].slice(0, 250))}
      </span>
      <span className="category-section">
        {blog.categories && <strong>Categories:</strong>}{" "}
        <span className="category-container">
          {blog.categories &&
            blog.categories.map((category) => (
              <CategoryChip category={category}></CategoryChip>
            ))}
        </span>
      </span>
    </a>
  );
};
export default BlogCard;
