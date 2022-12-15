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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
function getData({ page, sort }) {
  return fetch(
    `https://json-8pz0.onrender.com/womens?_page=${page}&_limit=12&_sort=Price&_order=${sort}`
  ).then((res) => res.json());
}

export default function Womens() {
  const [page, setPage] = useState(1);
  // const [totalpage, setTotalpage] = useState(0);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("asc");

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const arr = JSON.parse(localStorage.getItem("Data")) || [];
  const totalpage = data.length;
  useEffect(() => {
    setTimeout(() => {
      handledata();
    }, 100);
    setLoading(true);
  }, [page, sort]);

  function handledata() {
    setLoading(true);
    getData({ page, sort }).then((res) => {
      console.log(res);
      setData(res);
      setLoading(false);
    });
  }

  function handlesortA() {
    let acs = data.sort((a, b) => a.actual_price - b.actual_price);
    setData(acs);
    setSort("desc");
  }

  function handlesortB() {
    let acs = data.sort((a, b) => b.actual_price - a.actual_price);
    setData(acs);
    setSort("asc");
  }

  function Addcart(elem) {
    console.log(elem);
    arr.push(elem);
    localStorage.setItem("Data", JSON.stringify(arr));
    toast({
      title: "Product succefully added😊 in bag",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  if (loading) {
    return (
      <Stack>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }

  return (
    <>
      <Box
        background="white"
        borderColor="black"
        // position="fixed"
        zIndex="700"
        w="100%"
        mt="4.7%"
        boxShadow="md"
        fontSize={["sm", "md", "xl"]}
      >
        {/* <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/womens">Mens page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb> */}
        <Box className={styles.so1}>
          <h1 className={styles.soh1}>Sort By:</h1>
          <Button className={styles.sortbtn} onClick={handlesortA}>
            High to Low
          </Button>
          <Button className={styles.sortbtn} onClick={handlesortB}>
            Low to High
          </Button>
          {/* <Button className={styles.sortbtn}>Discount</Button> */}
        </Box>
        {/* sorting..................... */}
      </Box>

      <div className={styles.container}>
        <div>
          <ul>
            <Text as="b" fontSize={["sm", "md", "2xl", "xl"]}>
              CATEGORIES
            </Text>
            <RadioGroup defaultValue="2">
              <Stack p={["2", "3", "5"]} spacing={2} direction="column">
                <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                  Kurtas(3445)
                </Radio>
                <Radio colorScheme="red" value="1" size={["sm", "md", "lg"]}>
                  Kurta Sets(8)
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
                  KALINI(320)
                </Radio>
                <Radio colorScheme="green" value="2" size={["sm", "md", "lg"]}>
                  Karigari(303)
                </Radio>
                <Radio colorScheme="green" value="3" size={["sm", "md", "lg"]}>
                  Anouk(237)
                </Radio>
                <Radio colorScheme="green" value="4" size={["sm", "md", "lg"]}>
                  HERE&NOW(113)
                </Radio>
                <Radio colorScheme="green" value="5" size={["sm", "md", "lg"]}>
                  Sangria(111)
                </Radio>
                <Radio colorScheme="green" value="6" size={["sm", "md", "lg"]}>
                  DIVYANK(2)
                </Radio>
                <Radio colorScheme="green" value="7" size={["sm", "md", "lg"]}>
                  7Threads(159)
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
                <img src={elem.Image} alt="" />
                <Text
                  fontSize={["sm", "md", "md", "md"]}
                  as="b"
                  // // alignItems="center"
                  // className={styles.center}
                >
                  {elem.Name}
                </Text>
                <Box display="flex" ml="10px" gap="20px">
                  <Text color="tomato">Rs.{elem.Price}</Text>
                  <Text as="del" color="#b48484">
                    {elem.OlderPrice}
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

      <Box ml="50%" mt="3%" display="flex">
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>

        {/* <Button>{page}</Button> */}
        <Pagination
          totalpage={totalpage}
          currentPage={page}
          onClick={(value) => setPage(value)}
        />
        <Button disabled={page === totalpage} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
}
