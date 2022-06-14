export const getTweets = async (prisma, limit, cursor) => {
  const tweets =  await prisma.tweet.findMany({
    where: {
      parent: null,
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
    include: {
      author: true,
    },
    take: limit,
    cursor,
    skip: cursor ? 1 : 0,
  })
  return tweets
}

export const getTweet = async (id, prisma) => {
  const tweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  })

  return tweet
}

export const getUserTweets = async (name, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      author: {
        name: name,
      },
      parent: null,
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
    include: {
      author: true,
    },
  })

  return tweets
}

export const getReplies = async (id, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      parent: parseInt(id),
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
    include: {
      author: true,
    },
  })

  return tweets
}