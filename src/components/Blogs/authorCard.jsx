import moment from "moment";
import "./blogs.scss"
const DP = "https://gravatar.com/avatar/39ddd02374d1687804a2dbd1be5f1656";
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const AuthorCard = ({author, time}) => (
<div className="author-card">
    <div className="author-section">
        <figure className="author-image">
            <img src={DP} alt="Author Image" />
        </figure>
        <span className="author-name">{author}</span>
    </div>
    <span className="time">{MONTH[moment(time).month()-1]} {moment(time).year()} - {moment(time).fromNow()}</span>
</div>
)
export default AuthorCard;