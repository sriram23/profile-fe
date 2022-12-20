import { Helmet } from "react-helmet";
const HeaderTag = () => {
  return (
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

      {/*  Facebook Meta Tags */}
      <meta property="og:url" content="https://sriram-23.web.app" />
      <meta
        property="og:title"
        content="Sriram Balasubramanian - Software Engineer"
      />
      <meta
        property="og:description"
        content="Hey! My name is Sriram. I am a Software Engineer based in Coimbatore,
India. My
expertise lies within front-end web/mobile apps."
      />
      <meta
        property="og:image"
        content="https://drive.google.com/uc?id=1KFYTLo4GkUMQwH3M4JS-Hpqd157tzcuT"
      />

      {/*  Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="sriram-23.web.app" />
      <meta property="twitter:url" content="https://sriram-23.web.app" />
      <meta
        name="twitter:title"
        content="Sriram Balasubramanian - Software Engineer"
      />
      <meta
        name="twitter:description"
        content="Hey! My name is Sriram. I am a Software Engineer based in Coimbatore,
India. My
expertise lies within front-end web/mobile apps."
      />
      <meta
        name="twitter:image"
        content="https://drive.google.com/uc?id=1KFYTLo4GkUMQwH3M4JS-Hpqd157tzcuT"
      ></meta>

      <title>Sriram Balasubramanian - Software Engineer</title>
    </Helmet>
  );
};

export default HeaderTag;
