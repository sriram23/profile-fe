import { useContext, useEffect, useState} from 'react'
import TweetCard from './tweetCard'
import callApi from '../axios/axios'
import './tweets.scss'
import { ThemeContext } from '../../Context/ThemeContext'
const Tweets = () => {
    const {theme} = useContext(ThemeContext)
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        callApi.get('/tweets').then(tw => {
            tw.data && tw.data.data && setTweets(tw.data.data)
        }).catch(err => console.error("Something went wrong: ", err))
    }, [])
    return(
    <div className={"tweet-section-"+theme} id='tweets'>
        <h2>Tweets</h2>
        {
            tweets.map(tweet => (
                <TweetCard tweet={tweet}/>
            ))
        }
        <a href='https://twitter.com/imsriramb'><button className='twitter-button'>Check more tweets on twitter</button></a>
    </div>
)}

export default Tweets