import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import "./blogs.scss";
import BlogCard from "./blogCard";
import callApi from "../axios/axios";
export default function Blogs() {
  useEffect(() => {
    fetchData();
  }, []);
  const [medium, setMedium] = useState();
  const [hashNode, setHashNode] = useState();
  const fetchData = async () => {
    callApi.get('/medium').then((feeds) => {
      feeds.data && feeds.data.items && setMedium(feeds.data.items)
    }).catch(err => console.error('Something went wrong: ', err))
    callApi.get('/hashnode').then(feeds => {
      feeds.data && feeds.data.items && setHashNode(feeds.data.items)
    }).catch(err => console.error("Something went wrong: ", err))
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
      <div className="blog-button-container">
        <span className="medium-button"><a href="https://medium.com/@sriram23"><button>Check more in Medium</button></a></span>
        <span className="hashnode-button"><a href="https://sriram23.hashnode.dev"><button>Check more in Hashnode</button></a></span>
      </div>
    </div>
  );
}
