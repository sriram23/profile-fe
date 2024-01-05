import moment from "moment";
import "./blogs.scss"
import PreloadImage from "react-preload-image"
import { useTranslation } from "react-i18next";
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const AuthorCard = ({author, time, src, avatar, views, readTime}) => {
    const {t} = useTranslation()
    return(
<div className="author-card">
    <div className="author-section">
        <div className="author-details">
        <figure>
            <PreloadImage src={avatar} alt="Author Avatar" className="author-image" lazy/>
        </figure>
        <span className="author-name">{author}</span>
        <span className="seperator">{'\u25CF'}</span>
        <span className="time">{MONTH[moment(time).month()]} {moment(time).date()}, {moment(time).year()}</span>
        </div>
        <div className="stats">
            <span className="stats">📈 <b>{views}</b> {t("Views")}</span>
        </div>
    </div>
</div>
)}
export default AuthorCard;