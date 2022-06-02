import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Home() {
  const {data: session, status } = useSession()
  const router = useRouter()

  //This is in case the session is still loading.
  if(status === 'loading') {
    return null
  }

  if(session) {
    router.push('/home')
  }

  return <a href='/api/auth/signin'>login</a>
}
