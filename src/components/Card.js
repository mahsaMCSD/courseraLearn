import { Heading, HStack, Image, Text, VStack,Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      backgroundColor="white"
      spacing={0}
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack p={4} alignItems="flex-start">
        <Heading as="h3" size="lg" color="black">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <Link href="#">  <HStack spacing={2} mt={2}>
          <Text fontSize="sm" color="black">
            Read more
          </Text>
         <FontAwesomeIcon icon={faArrowRight} color="black" size="1x"/>
        </HStack></Link>
      </VStack>
    </VStack>
  )
};

export default Card;
