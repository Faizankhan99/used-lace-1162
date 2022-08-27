import React, { useEffect, useState } from "react";
import styles from "../components/Nav.module.css";
import { BsBookmarkHeartFill } from "react-icons/bs";
import image from "../../public/Cart.png";
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
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function local() {
  return JSON.parse(localStorage.getItem("Data")) || [];
}

export default function Cart() {
  const [arr, setArr] = useState([]);
  const [Total, setTotal] = useState(0);
  const [text, setText] = useState();
  const [click, setclick] = useState();
  const [Dis, setDis] = useState(0);
  // console.log(click);

  function submit() {
    setclick(text);
    setText("");
  }

  useEffect(() => {
    if (arr.length == 0) {
      setTotal(0);
    }
    setArr(local());
    totalprice();
  }, [local()]);

  // useEffect(() => {
  //   totalprice();
  // }, [Dis]);

  // totalprice();
  function totalprice() {
    let sum = 0;
    let dis = 0;
    let total = 0;
    arr.map((elem) => {
      // console.log((sum += Number(elem.OlderPrice)));
      sum = sum + Number(elem.Price);
      total = sum;
      setTotal(total);
      if (click == "Masai") {
        let per = (total * 20) / 100;
        dis = total - per;
        // console.log(dis);
        setDis(dis);
      }
    });
  }

  // console.log(Dis);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(arr.length);

  function remove(elem) {
    arr.splice(elem, 1);
    localStorage.setItem("Data", JSON.stringify(arr));
  }

  return (
    <>
      <div className={styles.M}>
        <div className={styles.first}>
          <div>
            <Text fontSize={["sm", "md", "3xl"]} as="" color="black">
              Check delivery time & services
            </Text>
            <Button onClick={onOpen}>ENTER PIN CODE</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Enter delivery pincode</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <Input placeholder="Enter your pin code" />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          <Box w="100%" h="10%" pl="30px" spacing={20}>
            <Text fontSize={["sm", "md", "2xl"]} color="black">
              Available Offers
            </Text>
            <Text fontSize={["sm", "md", "md"]} mt="10px" as="" color="black">
              10% Instant Discount on Standard Chartered Credit and Debit on min
              spend of 3000 TCA
            </Text>
            <Text fontSize={["sm", "md", "xl"]} as="b" color="tomato">
              Show More{" "}
            </Text>
          </Box>
          {/*.............. */}

          <Box
            border="2px"
            mt="40px"
            h="65%"
            borderColor="black"
            overflow="scroll"
            // mb="-12%"
          >
            <Box mb="-10%" h="40%" w="100%">
              {arr.length === 0 ? (
                <Image
                  boxSize="200%"
                  className={styles.img}
                  src="https://media2.giphy.com/media/LOL2XB5O5slfFE4K3M/giphy.gif?cid=790b7611919a9e130740af019546240ce534259de98b2f1a&rid=giphy.gif&ct=s"
                />
              ) : (
                " "
              )}
            </Box>
            {arr.map((elem, index) => (
              <Box
                borderWidth="2px"
                borderRadius="xl"
                // overflow="hidden"
                key={index}
                display="flex"
                m="10px"
                gap="20px"
                alignItems="center"
              >
                <Image
                  borderRadius="xl"
                  boxSize={["100px", "200px", "100px"]}
                  src={elem.image || elem.Image}
                  alt=""
                />
                <Text ml="10px" fontSize={["sm", "md", "xl", "xl"]} as="b">
                  {elem.Name}
                </Text>

                <Box mb="10px" display="flex" ml="10px" gap="20px">
                  <Text color="tomato"> {elem.Price}</Text>
                  <Text as="del" color="#b48484">
                    Rs. {elem.OlderPrice}
                  </Text>
                </Box>
                <Button
                  onClick={() => remove(elem)}
                  ml="20px"
                  colorScheme="teal"
                  variant="solid"
                >
                  REMOVE
                </Button>
              </Box>
            ))}
          </Box>

          {/* ........................ */}
        </div>

        <div className={styles.sec}>
          <Box border="1px" borderColor="black">
            <Text fontSize={["sm", "md", "xl", "2xl"]}>
              DONATE FOR COVID-19
            </Text>
            <Box mt="30px" mb="20px">
              <Box display="flex">
                <input type="checkbox" />
                <Text fontSize={["sm", "md", "xl", "3xl"]}>
                  Help India fight COVID-19
                </Text>
              </Box>
              <Stack mt="20px" direction="row" spacing={4} align="center">
                <Button
                  borderRadius="full"
                  colorScheme="teal"
                  variant="outline"
                >
                  rs.10
                </Button>
                <Button
                  borderRadius="full"
                  colorScheme="teal"
                  variant="outline"
                >
                  rs.50
                </Button>
                <Button
                  borderRadius="full"
                  colorScheme="teal"
                  variant="outline"
                >
                  rs.100
                </Button>
                <Button
                  borderRadius="full"
                  colorScheme="teal"
                  variant="outline"
                >
                  Other
                </Button>
              </Stack>
            </Box>
            <Box display="flex">
              <BsBookmarkHeartFill />
              <Text fontSize={["sm", "md", "xl"]}>Apply Coupan </Text>
            </Box>

            {/* ///////////////////////////////////////////////////////// */}

            <Box display="flex">
              <Input
                w="75%"
                placeholder="ENTER YOUR PROMO CODE"
                onChange={(e) => setText(e.target.value)}
              ></Input>
              <Button ml="10px" onClick={submit}>
                Submit
              </Button>
            </Box>

            {/* /////////////////////////////////////////////////////////////// */}

            <Text ml="40px" mt="10px" mb="10px" fontSize={["sm", "md", "md"]}>
              To get upto rs.300 OFF on first order
            </Text>
          </Box>
          {/* Price detail  */}
          <Box h="50%" mt="30px" p="20px" border="1px" borderColor="black">
            <Box
              display="flex"
              justifyContent="space-between"
              fontSize={["sm", "md", "2xl"]}
              mt="20px"
            >
              <Text>Total MRP</Text> <Text>20000</Text>
            </Box>

            <Box
              mt="20px"
              display="flex"
              justifyContent="space-between"
              fontSize={["sm", "md", "2xl"]}
            >
              <Text>Discount on MRP</Text> <Text>0</Text>
            </Box>

            <Box
              mt="20px"
              display="flex"
              justifyContent="space-between"
              fontSize={["sm", "md", "2xl"]}
            >
              <Text>Coupan Discount</Text> <Text>{Dis}</Text>
            </Box>

            <Box
              mt="20px"
              display="flex"
              justifyContent="space-between"
              fontSize={["sm", "md", "2xl"]}
            >
              <Text>Convenince Fee</Text> <Text>FREE</Text>
            </Box>
            <Box
              border="1px"
              borderColor="black"
              mt="20px"
              display="flex"
              justifyContent="space-between"
              fontSize={["sm", "md", "2xl"]}
            >
              <Text color="red" as="b">
                Total Amount
              </Text>{" "}
              <Text> RS.{Dis === 0 ? Total : Dis}</Text>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
