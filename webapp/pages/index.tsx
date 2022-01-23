import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHARE/Probate Records Project</title>
        <meta name="description" content="SHARE/Probate Records Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SHARE/Probate Records Project
        </h1>

      </main>

      <footer className={styles.footer}>
        Copyright &copy; 2022 - University of South Carolina
      </footer>
    </div>
  )
}

export default Home
