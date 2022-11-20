import AuthorCard from "./authorCard";
import "./blogs.scss";
import CategoryChip from "./categoryChip";
const BlogCard = ({ blog, src }) => {
  const placeholderString = blog.title.length > 20 ? blog.title.slice(0,20) + ".." : blog.title
  const PLACEHOLDER = `https://via.placeholder.com/900/4285f4/ffffff/500x200.png?text=${placeholderString}`
  const splitImage = (text) => {
    // Splitting with ' " ' since the links are inside  " "
    const links = text && text.split("\"")
    // Checking for image extension inside the string
    return links && links.length && links.find(txt => txt.includes(".png" || ".jpg" || ".svg" || ".jpeg" || ".gif")) || null;
  }
  return(
  <a href={blog.link} className="blog-card" target="_blank">
    <AuthorCard
      author={blog.creator}
      time={blog.isoDate}
      src={src}
    ></AuthorCard>
    <h3>{blog.title}</h3>
    <figure className="thumbnail">
      <img src={splitImage(blog["content:encoded"]) || PLACEHOLDER} alt="Thumbnail" />
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
)};
export default BlogCard;
