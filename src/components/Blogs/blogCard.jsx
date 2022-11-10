
import AuthorCard from "./authorCard";
import "./blogs.scss";
import CategoryChip from "./categoryChip";
const MEDIUM = "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"
const HASH_NODE = "https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
const BlogCard = ({blog, src}) => (
    <a href={blog.link} className="blog-card" target="_blank">
      <AuthorCard author={blog.creator} time={blog.isoDate}></AuthorCard>
              <div className="blog-card-title">
                <h3>{blog.title}</h3>
                <figure className="blog-icon">
                  <img src={src==='medium'? MEDIUM : HASH_NODE} alt="Blog Logo" />
                </figure>
              </div>
              <span>
                {(blog["content:encodedSnippet"] &&
                  blog["content:encodedSnippet"].slice(0, 250)) ||
                  (blog["contentSnippet"] &&
                    blog["contentSnippet"].slice(0, 250))}
              </span>
              <span className="category-section">
                {blog.categories && <strong>Categories:</strong>}{" "}
                {/* {blog.categories && String(blog.categories)} */}
                <span className="category-container">
                  {blog.categories && blog.categories.map(category => (
                    <CategoryChip category={category}></CategoryChip>
                  ))}
                </span>
              </span>
              <span>
                
              </span>
              {/* <p>
                Authored by <strong>{blog.creator}</strong> -{" "}
                {moment(blog.isoDate).fromNow()}
              </p> */}
            </a>
)
export default BlogCard