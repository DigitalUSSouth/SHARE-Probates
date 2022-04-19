import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrowseBox from "../components/BrowseBox";

const Browse: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHARE/Probate Records Project - Browse</title>
        <meta name="description" content="SHARE/Probate Records Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box bg="grey" color="white" marginTop="0px" padding="2em">
        <h1>Browse</h1>
        <SimpleGrid columns={[1, 3]}>
          <Box>
            <Center>
              <BrowseBox
                browseTitle="By State"
                listItems={["South Carolina"]}
              />
            </Center>
          </Box>
          <Box>
            <Center>
              <BrowseBox
                browseTitle="By Locality"
                listItems={["Charleston", "Columbia", "Greenville"]}
              />
            </Center>
          </Box>
          <Box>
            <Center>
              <BrowseBox browseTitle="By Year" listItems={["1801"]} />
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Browse;
