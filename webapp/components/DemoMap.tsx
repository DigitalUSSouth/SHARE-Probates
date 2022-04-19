import React from "react";
import Map from "react-map-gl";
import {
  Box,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";

export default function DemoMap(props: any) {
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
      <Map
        initialViewState={{
          longitude: -81,
          latitude: 33.91,
          zoom: 6.5,
        }}
        style={{ width: "100%", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiZGlnaXRhbHVzc291dGgiLCJhIjoiY2wyNWtkdzk3MHE2MTNibXh2YW1iNTZqcSJ9.-wU8lDeFDkbJMPr53hrU3A"
      />
      <Center></Center>
    </Box>
  );
}
