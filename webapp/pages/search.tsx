import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react";
import Header from '../components/Header'
import Footer from "../components/Footer";
import SearchContainer from "../components/SearchContainer";

const Search: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHARE/Probate Records Project - Browse</title>
        <meta name="description" content="SHARE/Probate Records Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box bg="grey" color="white" marginTop="0px" padding="2em">
      <h1>Search</h1>
      <SearchContainer />
      </Box>
      <Footer />
    </div>
  )
}

export default Search
