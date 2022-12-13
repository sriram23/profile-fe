import React, { useEffect, useState } from "react";
import "./blogs.scss";
import BlogCard from "./blogCard";
import callApi from "../axios/axios";
export default function Blogs() {
  useEffect(() => {
    fetchData();
  }, []);

  const [blogs, setBlogs] = useState();
  const fetchData = async () => {
    callApi.get('/blogs').then(feeds => {
      feeds && feeds.data && setBlogs(feeds.data)
    })
  }
  return (
    <section className="blogs-section" id="blog">
      <h2>Blogs</h2>
      <div className="blog-container">
          {blogs && blogs.map(blog => (
            <BlogCard blog={blog} src={blog.medium}></BlogCard>
          ))}
      </div>
      <div className="blog-button-container">
        <span className="medium-button"><a href="https://medium.com/@sriram23"><button>Check more in Medium</button></a></span>
        <span className="hashnode-button"><a href="https://sriram23.hashnode.dev"><button>Check more in Hashnode</button></a></span>
      </div>
    </section>
  );
}
