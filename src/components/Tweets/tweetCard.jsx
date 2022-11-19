import { useEffect, useState } from "react"

const DP = "https://pbs.twimg.com/profile_images/1589925062659821568/IyKzZ-Af_400x400.jpg"
const TweetCard = ({tweet}) => {
    // TODO: Fetch username and handle from api
    const [isRetweet, setRetweet] = useState(false);
    const [userHandle, setUserHandle] = useState("imsriramb")
    const [userName, setUserName] = useState("Sriram B")
    const [text, setText] = useState(tweet.text)
    useEffect(() => {
        const split = tweet.text && tweet.text.split(" ");
        if(split[0] === "RT") {
            setRetweet(true)
            setUserHandle(String(split[1]).slice(1,-1))
            setUserName(String(split[1]).slice(1,-1))
            const twt = split.slice(2,) 
            setText(twt.join(" "))
        }
    }, [tweet])
    return (
        <div className="tweet-card">
            <a href={`https://twitter.com/${userHandle}/status/${tweet.id}`}>
            {isRetweet && <span className="retweeted-by"><span className="retweet-icon">{'\u21b1'}</span><span className="retweet-inverted-icon">{'\u21b2'}</span> Retweeted by Sriram B</span>}
            <div className="tweet-header">
                <a href={`https://twitter.com/${userHandle}`}><span className="tweet-user">{userName}</span></a>
                <a href={`https://twitter.com/${userHandle}`}><span className="tweet-handle">@{userHandle}</span></a>
            </div>
            <div className="tweet-text">
                {text}
            </div>
            </a>
        </div>
    )
}

export default TweetCard