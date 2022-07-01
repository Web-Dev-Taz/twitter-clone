import { useSession } from "next-auth/react"
import NewTweet from "components/NewTweet"
import Tweets from "components/Tweets"

export default function Home() {
   const { data: session, status } = useSession()
   const loading = status === "loading"

   if (loading) {
      return null
   }

   if (!session) {
      Router.push("/")
   }

   return (
      <>
         <NewTweet />
         <Tweets tweets={[{ content: "test" }, { content: "another" }]} />
      </>
   )
}
