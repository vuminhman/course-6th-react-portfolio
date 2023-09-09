import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Man Vu!";
const bio1 = "A full stack developer";
const bio2 = "specializing in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        src="https://i.pravatar.cc/150?img=7"
        alt="Pete's avatar"
      />
      <Text as="h1" size="md" color="white">
        {greeting}
      </Text>
      <Heading fontSize="5xl" color="white">
        {bio1}
      </Heading>
      <Heading fontSize="5xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
