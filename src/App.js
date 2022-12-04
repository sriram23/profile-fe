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
import {Helmet} from "react-helmet"

export default function App() {
  const [toastMessage, setToastMessage] = useState("")
  const [showToast, setShowToast] = useState(false)
  const TOAST_CLOSE_ICON = '\u274c'
  const META_DESC = `Hey! My name is <strong>Sriram</strong>. I am a <strong>Software Engineer</strong> based in Coimbatore,
India. I started my journey as a Market Research Analyst and worked in
the position for 1.5 years. Later I choose to switch to Engineering
Role. I started as a Junior Front End Engineer in a startup and
currently working as Software Engineer 2 at Dell Technologies.
  
I have experience in developing Web and Hybrid Mobile Applications. My
expertise lies within front-end web/mobile apps, and the main
languages/frameworks in my tech stack are JavaScript, React, React
Native, Vue.js, and of course HTML/CSS. I’m currently on my path to
becoming a Pythonista (One who works with Python language).`

  return (
    <div className="main-container">
      <Helmet>
        <meta name="description" content={META_DESC} />
        <title>Sriram B</title>
      </Helmet>
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
