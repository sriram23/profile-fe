import Blogs from "./components/Blogs/blogs";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import WorkHistory from "./components/workHistory/workhistory";
import Tweets from "./components/Tweets/tweets";
import "./styles.css";
import Testimonial from "./components/Testimonial/testimonial";

export default function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Profile />
      <WorkHistory />
      <Testimonial/>
      <Blogs />
      <Tweets/>
      <Footer />
    </div>
  );
}
