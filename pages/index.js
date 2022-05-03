import Link from 'next/link'
import styles from '/styles/Home.module.css'
import Layout from '/components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Home page">
        <Link href="/about" passHref >About</Link>
      </Layout>
    </div>
  )
}
