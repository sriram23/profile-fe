import {Suspense} from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './tweets.scss'
const Tweets = () => (
    <div className="tweet-section">
        <h2>Tweets</h2>
        <div className="tweet-card">
        {/* TODO: Add a loader if possible */}
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="imsriramb"
            options={{border: "2px solid red"}}
            />
        </div>
    </div>
)

export default Tweets