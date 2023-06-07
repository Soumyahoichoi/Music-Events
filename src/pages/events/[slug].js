
import { useRouter } from "next/router"
import Layout from "@/components/Layout";
export default function EventsPage() {
  const router = useRouter()
  return (
    <Layout>
      <h1>Events Page</h1>
      <p>{router.query.slug}</p>
      <button
      onClick={()=>router.push('/')} 
      >
        Click Me
      </button>
    </Layout>
  )
}
