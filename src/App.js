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
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet"
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const [toastMessage, setToastMessage] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [theme, setTheme] = useState()
  const TOAST_CLOSE_ICON = '\u274c'
  useEffect(()=> {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(isDarkTheme.matches ? 'dark' : 'light')
  }, [])
  return (
    <div className={"main-container-" + theme}>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <Helmet>
        <meta name="description" content="Hey! My name is Sriram. I am a Software Engineer based in Coimbatore,
India. I have experience in developing Web and Hybrid Mobile Applications. My
expertise lies within front-end web/mobile apps, and the main
languages/frameworks in my tech stack are JavaScript, React, React
Native, Vue.js, and of course HTML/CSS." />
        <meta name="keywords" content="Sriram, Sriram Balasubramanian, Coimbatore, Software Engineer, React, Frontend, UI, Developer, Dude who code"></meta>
        <meta name="author" content="Sriram Balasubramanian"></meta>
        <title>Sriram Balasubramanian - Software Engineer</title>
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

          {toastMessage}
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
      </ThemeContext.Provider>
    </div>
  );
}
