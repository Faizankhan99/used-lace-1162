import React from "react";
import {
  SimpleGrid,
  Text,
  useToast,
  Skeleton,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Button,
} from "@chakra-ui/react";

export default function Cart() {
  let arr = JSON.parse(localStorage.getItem("Data")) || [];

  return (
    <div>
      <Box display="flex">
        {arr.map((elem, index) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={index}
          >
            <img src={elem.image || elem.Image} alt="" />
            <Text ml="10px" fontSize={["sm", "md", "2xl", "3xl"]} as="b">
              {elem.Name}
            </Text>

            <Box mb="10px" display="flex" ml="10px" gap="20px">
              <Text color="tomato">Rs. {elem.Price}</Text>
              <Text as="del" color="#b48484">
                Rs. {elem.OlderPrice}
              </Text>
            </Box>
            <Button
              onClick={() => {
                Addcart(elem);
              }}
              ml="20px"
              colorScheme="teal"
              variant="solid"
            >
              Buy Now
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
}
