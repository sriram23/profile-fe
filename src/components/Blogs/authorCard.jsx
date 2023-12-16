import moment from "moment";
import "./blogs.scss"
import PreloadImage from "react-preload-image"
import { useTranslation } from "react-i18next";
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const MEDIUM = "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"
// const HASH_NODE = "https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
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
    {/* Commenting this for now, may be used in future */}
    {/* <figure>
    <PreloadImage src={src==='medium'? MEDIUM : HASH_NODE} alt="Blog Logo" className="blog-icon" lazy/>
    </figure> */}
</div>
)}
export default AuthorCard;