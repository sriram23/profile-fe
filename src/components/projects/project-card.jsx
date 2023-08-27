import CSS_CLOCK from '../../assets/video/css_clock.gif'
import WEATHER_NOW from '../../assets/video/WeatherNow.gif'
const ProjectCard = ({ link, title, githubLink, readmeLink }) => {
  const GIF = title === 'CSS Clock' ? CSS_CLOCK : WEATHER_NOW
  return (
    <div className="project-card">
        <div className="title"><h2 className='project-title'>{title}</h2></div>
        {/* <figure className='project-gif'><img src={GIF} alt='css clock' /></figure> */}
        <div className="link-container">
            <a href={link} target='_blank' rel="noreferrer"><div className="link">{'\uD83D\uDD17'}</div></a>
            <a href={githubLink} target='_blank' rel="noreferrer"><div className="github-link"><figure className='github-icon'><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github' /></figure></div></a>
        </div>
    </div>
  );
};
export default ProjectCard;
