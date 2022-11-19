import { useEffect, useState } from "react"
import callApi from "../axios/axios";

const TweetCard = ({tweet}) => {
    // TODO: Fetch authorname and handle from userid, instead of handle itself
    // TODO: Code refactoring (Repetitive codes)
    const [authorHandle, setAuthorHandle] = useState("imsriramb")
    const [authorName, setAuthorName] = useState("")
    const [isRetweet, setRetweet] = useState(false);
    const [userHandle, setUserHandle] = useState("")
    const [userName, setUserName] = useState("")
    const [text, setText] = useState(tweet.text)

    useEffect(() => {
        callApi.get(`/twitter-user?username=${authorHandle}`).then(res => {
            res && res.data && res.data.data && setAuthorHandle(res.data.data.username)
            res && res.data && res.data.data && setAuthorName(res.data.data.name)
        }).catch(err => console.error("Something went wrong: ", err))
    }, [])
    useEffect(() => {
        const split = tweet.text && tweet.text.split(" ");
        if(split[0] === "RT") {
            setRetweet(true)
            callApi.get(`/twitter-user?username=${String(split[1]).slice(1,-1)}`).then(res => {
                res && res.data && res.data.data && setUserHandle(res.data.data.username)
                res && res.data && res.data.data && setUserName(res.data.data.name)
            }).catch(err => console.error("Something went wrong: ", err))
            const twt = split.slice(2,) 
            setText(twt.join(" "))
        }
    }, [tweet])
    return (
        <div className="tweet-card">
            <a href={`https://twitter.com/${authorHandle}/status/${tweet.id}`}>
            {isRetweet && <span className="retweeted-by"><span className="retweet-icon">{'\u21b1'}</span><span className="retweet-inverted-icon">{'\u21b2'}</span>&nbsp;{authorName} Retweeted</span>}
            <div className="tweet-header">
                <a href={`https://twitter.com/${userHandle || authorHandle}`}><span className="tweet-user">{userName || authorName}</span></a>
                <a href={`https://twitter.com/${userHandle || authorHandle}`}><span className="tweet-handle">@{userHandle || authorHandle}</span></a>
            </div>
            <div className="tweet-text">
                {text}
            </div>
            </a>
        </div>
    )
}

export default TweetCard