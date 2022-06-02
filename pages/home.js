import { useSession } from 'next-auth/react'
import { Router, useRouter } from 'next/router'

import NewTweet from 'components/NewTweet'
import Tweets from 'components/Tweets'

import prisma from 'lib/prisma'
import { getTweets } from 'lib/data.js'

export default function Home({tweets}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const loading = status === 'loading'

  if (loading) {
    return null
  }

  if(!session) {
      router.push('/')
  }

  return (
      <>
      <NewTweet /> 
      <Tweets tweets={tweets}/>
      </>
  ) 
}

export async function getServerSideProps() {
    let tweets = await getTweets(prisma)
    tweets = JSON.parse(JSON.stringify(tweets))

    console.log('getServerSideProps ' + tweets)

    return {
        props: {
        tweets,
        },
    }
}