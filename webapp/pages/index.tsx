import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";
import SearchBoxHome from "../components/SearchBoxHome";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHARE/Probate Records Project - Home </title>
        <meta name="description" content="SHARE/Probate Records Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box bg="grey" color="white" marginTop="0px" padding="2em">
        <SimpleGrid columns={[1, 2]}>
          <Box>
            <h1>SHARE/Probate Records Project</h1>
            <p>
              Welcome to the SHARE/Probate Records project. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </Box>
          <Box>
            <Center>
              <SearchBoxHome />
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
