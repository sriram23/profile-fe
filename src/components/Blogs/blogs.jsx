import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import "./blogs.scss";
import BlogCard from "./blogCard";
export default function Blogs() {
  useEffect(() => {
    fetchData();
  }, []);
  const [medium, setMedium] = useState();
  const [hashNode, setHashNode] = useState();
  const fetchData = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://corsanywhere.herokuapp.com/https://medium.com/feed/@sriram23"
    );
    const hashFeed = await parser.parseURL(
      "https://corsanywhere.herokuapp.com/https://sriram23.hashnode.dev/rss.xml"
    )
    // const response = await fetch("https://medium.com/feed/@sriram23");
    console.log("Response: ", feed.items);
    console.log("Hash Feeds: ", hashFeed)
    setMedium(feed.items);
    setHashNode(hashFeed.items);
  };
  return (
    <div className="blogs-section">
      <h2>Blogs</h2>
      <div className="blog-container">
        {medium &&
          medium.map((blog) => (
            <BlogCard blog={blog} src="medium"></BlogCard>
          ))}
        {hashNode &&
          hashNode.map((blog) => (
            <BlogCard blog={blog} src="hashnode"></BlogCard>
          ))}
      </div>
    </div>
  );
}
