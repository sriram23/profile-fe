import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import "./blogs.scss";
import moment from "moment";
export default function Blogs() {
  useEffect(() => {
    fetchData();
  }, []);
  const [blogs, setBlogs] = useState();
  const fetchData = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://corsanywhere.herokuapp.com/https://medium.com/feed/@sriram23"
    );
    // const response = await fetch("https://medium.com/feed/@sriram23");
    console.log("Response: ", feed.items);
    setBlogs(feed.items);
  };
  return (
    <div className="blogs-section">
      <h2>Blogs</h2>
      <div className="blog-container">
        {blogs &&
          blogs.map((blog) => (
            <a href={blog.link} className="blog-card" target="_blank">
              <h3>{blog.title}</h3>
              <span>
                {(blog["content:encodedSnippet"] &&
                  blog["content:encodedSnippet"].slice(0, 250)) ||
                  (blog["contentSnippet"] &&
                    blog["contentSnippet"].slice(0, 250))}
              </span>
              <p>
                <strong>Categories:</strong>{" "}
                {blog.categories && String(blog.categories)}
              </p>
              <p>
                Authored by <strong>{blog.creator}</strong> -{" "}
                {moment(blog.isoDate).fromNow()}
              </p>
            </a>
          ))}
      </div>
    </div>
  );
}
