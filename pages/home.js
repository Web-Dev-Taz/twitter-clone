import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import NewTweet from "components/NewTweet"
import Tweets from "components/Tweets"
import prisma from "lib/prisma"
import { getTweets } from "lib/data.js"
import LoadMore from "components/LoadMore"

export default function Home({ tweets }) {
   const router = useRouter()
   const { data: session, status } = useSession()
   const loading = status === "loading"

   if (loading) {
      return null
   }

   if (!session) {
      Router.push("/")
   }

   if (session && !session.user.name) {
      router.push("/setup")
   }

   return (
      <>
         <NewTweet />
         <Tweets tweets={tweets} />
         <LoadMore tweets={tweets} />
      </>
   )
}

export async function getServerSideProps() {
   let tweets = await getTweets(prisma, 2)
   tweets = JSON.parse(JSON.stringify(tweets))

   return {
      props: {
         tweets,
      },
   }
}
