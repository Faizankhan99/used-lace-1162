import React, { useEffect, useState } from "react";
import Data from "../db.json";
import { useParams } from "react-router-dom";
import {
  Image,
  Box,
  Text,
  Flex,
  Spacer,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
// data.products;

export default function Singleproduct() {
  const [data, setData] = useState(Data.products);
  const { id } = useParams();
  const arr = JSON.parse(localStorage.getItem("Data")) || [];
  console.log(id);
  console.log(data[id]);

  // function
  //   console.log(param);
  // useEffect(() => {
  //   handledata();
  // }, []);

  // function handledata() {
  //   getData(param.id).then((res) => {
  //     console.log(res.img);
  //     setData(res);
  //   });
  // }
  // console.log(data.img);
  function Addcart(elem) {
    console.log(elem);
    arr.push(elem);
    localStorage.setItem("Data", JSON.stringify(arr));
  }

  return (
    <Box
      justify="center"
      display="flex"
      //   alignItems="center"
      justifyContent="space-around"
    >
      <Box mt="30px" borderWidth="1px" borderRadius="30px" overflow="hidden">
        <Image
          boxSize={["300px", "400px", "600px"]}
          objectFit="fit"
          src={data[id].Image}
          alt=""
        />
      </Box>
      <Box
        w="50%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2%"
      >
        <Box p="30px" pl="40px">
          <Text fontSize={["sm", "md", "2xl", "6xl"]} as="b">
            {data[id].Name}
          </Text>
          <Box display="flex" alignItems="center" gap="30px">
            <Text fontSize={["sm", "md", "5xl"]} color="tomato">
              {data[id].Price}
            </Text>

            <Text fontSize={["sm", "md", "2xl"]} as="del" color="#b48484">
              MRP Rs.{data[id].OlderPrice}
            </Text>
            <Text as="b" fontSize={["sm", "md", "3xl"]} color="tomato">
              (40% OFF)
            </Text>
          </Box>
          <Text fontSize={["sm", "md", "2xl"]} as="i">
            include all taxes
          </Text>
        </Box>
        <Button
          onClick={() => {
            Addcart(data[id]);
          }}
          fontSize={["sm", "md", "2xl"]}
          w={["100%", "100%", "100%", "40%"]}
          h={["100%", "4%", "7%", "10%"]}
          ml="8%"
          pl="40px"
          colorScheme="green"
        >
          🔒ADD TO BAG
        </Button>

        <Button
          fontSize={["sm", "sm", "2xl"]}
          w={["100%", "100%", "100%", "40%"]}
          h={["100%", "4%", "7%", "10%"]}
          ml="8%"
          //   pl="40px"
          mt={["10px", "10px", "10px", null]}
          colorScheme="gray"
        >
          ❤️WISHLIST
        </Button>

        <TableContainer>
          <Table variant="simple">
            <TableCaption>Specifications</TableCaption>
            <Thead>
              <Tr>
                <Th>Regular Fit</Th>
                <Th>Regular</Th>
                <Th isNumeric>Abstract</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>xl</Td>
                <Td>centimetres (300cmm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

// function getData(id) {
//   return fetch(
//     `https://blooming-island-90693.herokuapp.com/products/${id}`
//   ).then((res) => res.json());
// }
