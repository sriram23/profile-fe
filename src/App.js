import Blogs from "./components/Blogs/blogs";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import WorkHistory from "./components/workHistory/workhistory";
import "./styles.css";
import Contact from "./components/contact/contact";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Project from "./components/projects/project";
import "./i18n/i18n"
import Splash from "./components/splash/splash";

const hashnodeClient = new ApolloClient({
  uri: "https://gql.hashnode.com"
})

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [theme, setTheme] = useState();
  const [showSplash, setShowSplash] = useState(true);
  const TOAST_CLOSE_ICON = "\u274c";
  useEffect(() => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(isDarkTheme.matches ? "dark" : "light");
  }, []);

  useEffect(() => {
    if(showSplash) {
      setTimeout(() => setShowSplash(false), 2000)
    }
  }, [showSplash])
  return (
    <ApolloProvider client={hashnodeClient}>
    <div className={"main-container-" + theme}>
      {showSplash && <Splash/>}
      {!showSplash &&<ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="header">
          <Header />
        </div>
        <Profile />
        <Blogs />
        <Project/>
        <WorkHistory />
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
      </ThemeContext.Provider>}
    </div>
    </ApolloProvider>
  );
}
