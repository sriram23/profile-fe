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
import { ThemeContext } from "./Context/ThemeContext";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Project from "./components/projects/project";
import "./i18n/i18n"

const hashnodeClient = new ApolloClient({
  uri: "https://api.hashnode.com"
})

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
    <ApolloProvider client={hashnodeClient}>
    <div className={"main-container-" + theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="header">
          <Header />
        </div>
        <Profile />
        {/** Commenting this temporarily  */}
        {/* <About /> */}
        <Blogs />
        <Project/>
        <WorkHistory />
        {/** This is an experimental section and hence commented */}
        {/* <Testimonial /> */}
        {/** Temporarily Commenting this as the twitter api aren't working  **/}
        {/* <Tweets /> */}
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
    </ApolloProvider>
  );
}
