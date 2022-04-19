import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";
import Footer from "../components/Footer";
import AggregateData from "../components/AggregateData";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHARE/Probate Records Project - Insights</title>
        <meta name="description" content="SHARE/Probate Records Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box bg="grey" color="white" marginTop="0px" padding="2em">
        <h1>Aggregate data</h1>
        <SimpleGrid columns={[1]}>
          <Box>
            <Center>
              <AggregateData displayTitle="Insights" />
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
