import Blogs from "./components/Blogs/blogs";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import WorkHistory from "./components/workHistory/workhistory";
import Tweets from "./components/Tweets/tweets";
import About from "./components/about/about";
import "./styles.css";
import Testimonial from "./components/Testimonial/testimonial";
import Contact from "./components/contact/contact";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "./Context/ThemeContext";

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [theme, setTheme] = useState();
  const TOAST_CLOSE_ICON = "\u274c";
  useEffect(() => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(isDarkTheme.matches ? "dark" : "light");
  }, []);
  return (
    <div className={"main-container-" + theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Helmet>
          <meta
            name="description"
            content="Hey! My name is Sriram. I am a Software Engineer based in Coimbatore,
India. I have experience in developing Web and Hybrid Mobile Applications. My
expertise lies within front-end web/mobile apps, and the main
languages/frameworks in my tech stack are JavaScript, React, React
Native, Vue.js, and of course HTML/CSS."
          />
          <meta
            name="keywords"
            content="Sriram, Sriram Balasubramanian, Coimbatore, Software Engineer, React, Frontend, UI, Developer, Dude who code"
          ></meta>
          <meta name="author" content="Sriram Balasubramanian"></meta>

          <meta property="og:title" content="Sriram Balasubramanian"></meta>
          <meta property="og:site_name" content="sriram-23.web.app"></meta>
          <meta property="og:url" content="https://sriram-23.web.app"></meta>
          <meta
            property="og:description"
            content="Hey! My name is Sriram. I am a Software Engineer based in Coimbatore, India. I started my journey as a Market Research Analyst and worked in the position for 1.5 years. Later I choose to switch to Engineering Role. I started as a Junior Front End Engineer in a startup and currently working as Software Engineer 2 at Dell Technologies.

        I have experience in developing Web and Hybrid Mobile Applications. My expertise lies within front-end web/mobile apps, and the main languages/frameworks in my tech stack are JavaScript, React, React Native, Vue.js, and of course HTML/CSS. I’m currently on my path to becoming a Pythonista (One who works with Python language)."
          ></meta>
          <meta property="og:type" content="profile"></meta>
          <meta
            property="og:image"
            content="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1608475350705%2F-UFZ5HmDp.jpeg%3Fw%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
          ></meta>
          <meta property="og:image" content=""></meta>

          <title>Sriram Balasubramanian - Software Engineer</title>
        </Helmet>
        <div className="header">
          <Header />
        </div>
        <Profile />
        <About />
        <WorkHistory />
        <Testimonial />
        <Blogs />
        <Tweets />
        <Contact
          onTriggerToast={(msg) => {
            setToastMessage(msg);
            setShowToast(true);
          }}
        />
        <Footer />
        <div className={`toaster ${!showToast && "toaster-hide"}`}>
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
