import './about.scss'
import {ThemeContext} from "../../Context/ThemeContext"
import { useContext } from 'react';
const About = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <main className={'about-container-'+theme} id="about">
      <article className='about-text-section'>
      <h2>About Me</h2>  
      <p className="about-text">
        Hey! My name is <strong>Sriram</strong>. I am a <strong>Software Engineer</strong> based in Coimbatore,
        India. I started my journey as a Market Research Analyst and worked in
        the position for 1.5 years. Later I choose to switch to Engineering
        Role. I started as a Junior Front End Engineer in a startup and
        currently working as Software Engineer 2 at Dell Technologies.
      </p>
      <p className="about-text">
        I have experience in developing Web and Hybrid Mobile Applications. My
        expertise lies within front-end web/mobile apps, and the main
        languages/frameworks in my tech stack are JavaScript, React, React
        Native, Vue.js, and of course HTML/CSS. I’m currently on my path to
        becoming a Pythonista (One who works with Python language).
      </p>
      </article>
    </main>
  );
};
export default About;
