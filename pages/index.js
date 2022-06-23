import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Home() {
   const { data: session, status } = useSession()
   const router = useRouter()

   if (status === "loading") {
      return <h1>Loading...</h1>
   }

   if (session) {
      router.push("/home")
   }

   return <a href="/api/auth/signin">login</a>
}
