import React from "react";
import {
  Box,
  Text,
  Divider,
  SimpleGrid,
  Flex,
  Center,
} from "@chakra-ui/react";

export default function SearchResults(props: any) {
  return (
    <Box
      border="1px solid #73000A"
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
      <SimpleGrid columns={[1]}>
        <Box>
          <Center>
            <Flex w="100%">
              <Box w="20%">Image</Box>
              <Box w="80%">
                <strong>
                  <big>Title 1</big>
                </strong>
                <p>
                  similique sunt in culpa qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expedita distinctio. Nam libero tempore, cum soluta
                  nobis est eligendi optio cumque nihil impedit quo minus id
                  quod maxime placeat facere possimus, omnis voluptas assumenda
                  est, omnis dolor repellendus. Temporibus autem quibusdam et
                  aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                  et voluptat
                </p>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box>
          <Flex w="100%">
            <Box w="20%">Image</Box>
            <Box w="80%">
              <strong>
                <big>Title 2</big>
              </strong>
              <p>
                similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut officiis
                debitis aut rerum necessitatibus saepe eveniet ut et voluptat
              </p>
            </Box>
          </Flex>
          <Center></Center>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
