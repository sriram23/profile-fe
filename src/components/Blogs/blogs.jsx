import "./blogs.scss";
import BlogCard from "./blogCard";
import {Query} from "react-apollo";
import { gql } from "apollo-boost";

const BLOGS = gql`
query {
	user(username:"sriram23") {
    photo
    publication{
      title
      posts(page: 0) {
        title
        popularity
        dateAdded
        coverImage
        contentMarkdown
        slug
      }
    }
  }
}
`
export default function Blogs() {
      return(
        <section className="blogs-section" id="blog">
          <h2>Blogs</h2>
          <div className="blog-container">
      <Query query={BLOGS}>
        {
          ({loading, error, data}) => {
            if(loading) return <h1>Loading...</h1>
            if(error) return <h1>{JSON.stringify(error)}</h1>
            if(!loading && !error) {
              console.log("Data: ", data)
              return (data && data.user && data.user.publication && data.user.publication.posts && data.user.publication.posts.map(blog => (
                <BlogCard blog={blog} avatar={data.user.photo} pub={data.user.publication.title}/>
              )))
            }
          }
        }
      </Query>
      </div>
      <div className="blog-button-container">
        <span className="medium-button"><a href="https://medium.com/@sriram23"><button>Read my blogs in Medium</button></a></span>
        <span className="hashnode-button"><a href="https://sriram23.hashnode.dev"><button>Read my blogs in Hashnode</button></a></span>
      </div>
      </section>
      )
}
