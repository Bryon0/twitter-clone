export default function Tweets({ tweet }) {
    console.log('Tweet Component' + tweet)
    
    return <p>{tweet.content}</p>
  }