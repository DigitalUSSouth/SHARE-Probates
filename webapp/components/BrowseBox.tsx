import React from "react";
import {
  Box,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";

export default function BrowseBox(props: any) {
  console.log(props);
  const unorderedListItems = props.listItems.map((item: String) => (
    <ListItem color="blue">
      <a href="#">{item}</a>
    </ListItem>
  ));
  return (
    <Box
      borderRadius="2em"
      border="3px solid #73000A"
      bg="white"
      color="black"
      padding="1em"
      w="80%"
      {...props}
    >
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        {props.browseTitle}
      </Text>
      <Divider />
      <Center>
        <UnorderedList>{unorderedListItems}</UnorderedList>
      </Center>
    </Box>
  );
}
