import "./splash.scss";
const Splash = () => {
  return (
    <div className="splash-container">
      <div className="loader-container">
        <div className="top-loader">
        <span className="animated-span"></span>
        <span className="animated-span"></span>
        <span className="animated-span"></span>
        <span className="animated-span"></span>
        </div>
        <div className="bottom-loader">
        <span className="animated-span"></span>
        <span className="animated-span"></span>
        <span className="animated-span"></span>
        <span className="animated-span"></span>
        </div>
      </div>
    </div>
  );
};
export default Splash;
