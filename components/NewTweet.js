import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function NewTweet() {
   const [content, setContent] = useState("")
   const { data: session } = useSession()
   const router = useRouter()

   //don't display if we're not logged in
   if (!session)
      return <p>You are not logged in and therefore won't be able to tweet</p>

   return (
      <form
         onSubmit={async (e) => {
            e.preventDefault()

            if (!content) {
               alert("No content")
               return
            }

            await fetch("/api/tweet", {
               body: JSON.stringify({
                  content,
               }),
               headers: {
                  "Content-Type": "application/json",
               },
               method: "POST",
            })

            router.reload(window.location.pathname)
         }}
      >
         <div className="flex">
            <div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
               <textarea
                  className="border p-4 w-full text-lg rounded-2xl font-medium bg-transparent outline-none color-primary "
                  rows={2}
                  cols={50}
                  placeholder="What's happening?"
                  name="content"
                  onChange={(e) => setContent(e.target.value)}
               />
            </div>
         </div>

         <div className="flex">
            <div className="flex-1 mb-5">
               <button className="border float-right px-8 py-2 mt-0 hover:bg-red-200 mr-2 font-bold rounded-full">
                  Tweet
               </button>
            </div>
         </div>
      </form>
   )
}
