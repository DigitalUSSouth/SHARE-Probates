import React from "react";
import { Box, Text, Divider, Input, Button } from "@chakra-ui/react";

export default function SearchBoxHome(props: any) {
  return (
    <Box
      borderRadius="2em"
      border="3px solid #73000A"
      bg="white"
      color="black"
      padding="1em"
      {...props}
    >
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        Search for something specific
      </Text>
      <Divider />
      <form>
        <Input type="text" placeholder="search term" />
        <Button width="full" mt={4} type="submit">
          Search
        </Button>
      </form>
    </Box>
  );
}
