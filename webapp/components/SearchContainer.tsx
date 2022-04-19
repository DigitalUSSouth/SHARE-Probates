import React from "react";
import { Box, Text, Divider, Flex, Center } from "@chakra-ui/react";
import SearchSidebar from "./SearchSidebar";
import SearchResults from "./SearchResults";

export default function SearchContainer(props: any) {
  return (
    <Box
      borderRadius="2em"
      border="3px solid #73000A"
      bg="white"
      color="black"
      padding="1em"
      w="100%"
      {...props}
    >
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        {props.displayTitle}
      </Text>
      <Divider />
      <Flex>
        <Box w="20%">
          <Center>
            <SearchSidebar displayTitle="Filter and Sort" />
          </Center>
        </Box>
        <Box w="80%">
          <Center>
            <SearchResults displayTitle="Search results" />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
