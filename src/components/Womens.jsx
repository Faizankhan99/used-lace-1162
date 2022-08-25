import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SimpleGrid, Text, useToast } from "@chakra-ui/react";
import styles from "../components/Nav.module.css";
import {
  Skeleton,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import { Link } from "react-router-dom";
function getData() {
  return fetch("https://blooming-island-90693.herokuapp.com/womens").then(
    (res) => res.json()
  );
}

export default function Womens() {
  const [data, setData] = useState([]);
  const toast = useToast();
  const arr = [];
  useEffect(() => {
    handledata();
  }, []);

  function handledata() {
    getData().then((res) => {
      console.log(res);
      setData(res);
    });
  }

  function Addcart(elem) {
    console.log(elem);
    arr.push(elem);
    localStorage.setItem("Data", JSON.stringify(arr));
    // alert("YOUR PRODUCT ADDED SUUCESSFULLY ❤️");
    // <Navigate to="/mens/cart"></Navigate>;
    toast({
      title: "Product succefully added😊 in bag",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
            CATEGORIES
          </Text>
          <RadioGroup defaultValue="2">
            <Stack p={["2", "3", "5"]} spacing={2} direction="column">
              <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                Tshirts(78255)
              </Radio>
              <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                Lounge Tshirts(801)
              </Radio>
            </Stack>
          </RadioGroup>
        </ul>

        <hr />

        <ul>
          <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
            BRAND
          </Text>
          <RadioGroup defaultValue="2">
            <Stack p={["2", "3", "5"]} spacing={2} direction="column">
              <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                Roadster(3119)
              </Radio>
              <Radio colorScheme="green" value="2" size={["sm", "md", "lg"]}>
                TKalt(1749)
              </Radio>
              <Radio colorScheme="green" value="3" size={["sm", "md", "lg"]}>
                WROGN(1559)
              </Radio>
              <Radio colorScheme="green" value="4" size={["sm", "md", "lg"]}>
                Puma(1492)
              </Radio>
              <Radio colorScheme="green" value="5" size={["sm", "md", "lg"]}>
                Friskers(1480)
              </Radio>
              <Radio colorScheme="green" value="6" size={["sm", "md", "lg"]}>
                HRX by Hrithik Roshan(1373)
              </Radio>
              <Radio colorScheme="green" value="7" size={["sm", "md", "lg"]}>
                Huetrap(1267)
              </Radio>
            </Stack>
          </RadioGroup>
        </ul>

        <hr />
        <ul>
          <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
            PRICE
          </Text>
          <RadioGroup defaultValue="2">
            <Stack p={["2", "3", "5"]} spacing={2} direction="column">
              <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                Rs. 184 to Rs. 2670(77805)
              </Radio>
              <Radio colorScheme="green" value="2" size={["sm", "md", "lg"]}>
                Rs. 2670 to Rs. 5156(1187)
              </Radio>
              <Radio colorScheme="green" value="3" size={["sm", "md", "lg"]}>
                Rs. 5156 to Rs. 7642(49)
              </Radio>
              <Radio colorScheme="green" value="4" size={["sm", "md", "lg"]}>
                Rs. 7642 to Rs. 10128(14)
              </Radio>
            </Stack>
          </RadioGroup>
        </ul>
      </div>

      <SimpleGrid columns={[2, 3, 4]} spacing="40px">
        {data.map((elem, index) => (
          <Box
            key={index}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Link to={`/womens/singleproduct/${elem.id}`}>
              <img src={elem.image} alt="" />
              <Text fontSize={["sm", "md", "2xl", "3xl"]} as="b">
                {elem.Name}
              </Text>
              <Box display="flex" ml="10px" gap="20px">
                <Text color="tomato">{elem.Price}</Text>
                <Text as="del" color="#b48484">
                  Rs. {elem.OlderPrice}
                </Text>
              </Box>
            </Link>
            <Button
              onClick={() => {
                Addcart(elem);
              }}
              ml="20px"
              colorScheme="teal"
              variant="solid"
            >
              ADD TO CART
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}
