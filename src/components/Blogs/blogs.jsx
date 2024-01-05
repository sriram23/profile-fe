import "./blogs.scss";
import BlogCard from "./blogCard";
import {Query} from "react-apollo";
import { gql } from "apollo-boost";
import { useTranslation } from "react-i18next";

const BLOGS = gql`
query {
    publication(host:"sriram23.hashnode.dev"){
      title
      author {
        profilePicture
      }
      posts(first: 12) {
        edges{
          node {
            title
            subtitle
            publishedAt
            coverImage {
              url
            }
            content{
              markdown
            }
            slug
            tags {
              name
            }
            readTimeInMinutes
            views
          }
        }
      }
    }
  }
`
export default function Blogs() {
    const {t} = useTranslation()
      return(
        <section className="blogs-section" id="blog">
          <h2>{t('Blogs')}</h2>
          <div className="blog-container">
      <Query query={BLOGS}>
        {
          ({loading, error, data}) => {
            if(loading) return <h1>Loading...</h1>
            if(error) return <h1>{JSON.stringify(error)}</h1>
            if(!loading && !error) {
              return (data && data.publication && data.publication.posts && data.publication.posts.edges && data.publication.posts.edges.map((blog, id) => (
                data.publication &&<BlogCard key={id} blog={blog} avatar={data.publication.author.profilePicture} pub={data.publication.title}/>
              )))
            }
          }
        }
      </Query>
      </div>
      <div className="blog-button-container">
        <span className="hashnode-button"><a href="https://sriram23.hashnode.dev/newsletter" target="_blank" rel="noreferrer"><button>{t("ReadHashnode")}</button></a></span>
      </div>
      </section>
      )
}
