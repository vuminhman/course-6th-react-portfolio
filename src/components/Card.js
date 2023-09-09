import { Heading, HStack, Image, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderWidth={1}
      borderRadius="md"
      p={4}
      backgroundColor="white"
      alignItems="stretch"
      boxShadow="md"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"
      />
      <VStack alignItems="start" spacing={2}>
        <Heading as="h3" size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
      </VStack>
      <HStack justifyContent="space-between" width="100%">
        <Box display="flex" alignItems="center">
          <Link href="#" fontWeight="bold" color="blue.500">
            See More<FontAwesomeIcon icon={faArrowRight} size="1x" color="blue.500" style={{ marginLeft: '8px' }} />
          </Link>
          
        </Box>
      </HStack>
    </VStack>
  );
};

export default Card;
