import Layout from '@/components/Layout'
import Link from 'next/link'
export default function AboutPage() {
  return (
    <Layout title='About Music Events'>
      <h1>AboutPage</h1>
      <p>This application helps to findout the ongoing latest Musical events</p>
      <p>Version - 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  )
}
