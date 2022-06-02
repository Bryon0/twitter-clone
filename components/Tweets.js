import Tweet from 'components/Tweet'

export default function Tweets({ tweets }) {
  if (!tweets) return null

  console.log('Tweets Component' + tweets)
  return (
    <>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </>
  )
}