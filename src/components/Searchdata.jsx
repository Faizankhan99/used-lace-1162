import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
import { searchapi } from "./Api";
import { SimpleGrid, Text, Box, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Searchdata({ children }) {
  const { data } = useContext(Appcontext);
  const [newdata, setNewdata] = useState([]);
  const arr = JSON.parse(localStorage.getItem("Data")) || [];
  const toast = useToast();
  // console.log(data);
  const Data = data || "HRX";

  useEffect(() => {
    handleapi();
  }, [Data]);

  function handleapi() {
    searchapi(Data).then((res) => {
      console.log(res.data);
      setNewdata(res.data);
    });
  }

  function Addcart(elem) {
    // console.log(elem);
    arr.push(elem);
    localStorage.setItem("Data", JSON.stringify(arr));
    // alert("YOUR PRODUCT ADDED SUUCESzooSFULLY ❤️");
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
    <>
      <SimpleGrid columns={[2, 3, 4]} spacing="40px">
        {newdata.map((elem, index) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={index}
          >
            <Link to={`/mens/singleproduct/${elem.id}`}>
              <img src={elem.Image} alt="" />
              <Text ml="15px" fontSize={["sm", "md", "xl", "xl"]} as="b">
                {elem.Name}
              </Text>

              <Box mb="10px" display="flex" ml="10px" gap="20px">
                <Text color="tomato" ml="10px">
                  {elem.Price}
                </Text>
                <Text as="del" color="#b48484">
                  Rs. {elem.OlderPrice}
                </Text>
              </Box>
            </Link>
            <Button
              onClick={() => {
                Addcart(elem);
              }}
              ml="30px"
              colorScheme="teal"
              variant="solid"
            >
              ADD TO CART
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
