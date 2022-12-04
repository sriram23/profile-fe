import Blogs from "./components/Blogs/blogs";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import WorkHistory from "./components/workHistory/workhistory";
import Tweets from "./components/Tweets/tweets";
import About from "./components/about/about"
import "./styles.css";
import Testimonial from "./components/Testimonial/testimonial";
import Contact from "./components/contact/contact";
import { useState } from "react";

export default function App() {
  const [toastMessage, setToastMessage] = useState("")
  const [showToast, setShowToast] = useState(false)
  const TOAST_CLOSE_ICON = '\u274c'

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <Profile />
      <About/>
      <WorkHistory />
      <Testimonial/>
      <Blogs />
      <Tweets/>
      <Contact onTriggerToast = {(msg) =>{
        setToastMessage(msg)
        setShowToast(true)
      }}/>
      <Footer />
      <div className={`toaster ${!showToast && 'toaster-hide'}`}>
        <div className="toast-container">

          {toastMessage && toastMessage}
          <div
            className="close-button"
            onClick={() => {
              setShowToast(false);
              setTimeout(() => setToastMessage(""), 2000);
            }}
          >
            {TOAST_CLOSE_ICON}
          </div>
          </div>
        </div>
    </div>
  );
}
