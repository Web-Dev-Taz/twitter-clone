import { useSession } from "next-auth/react"
import NewTweet from "components/NewTweet"

export default function Home() {
   const { data: session, status } = useSession()

   if (status === "loading") {
      return <h1>Loading...</h1>
   }

   return (
      <div>
         {session ? <p>You are logged in!</p> : <p>You are not logged in 😞</p>}
      </div>
   )
}
