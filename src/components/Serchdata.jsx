import React, { useState } from "react";
import All_Links from "../All_Routes/All_Links";
import { searchapi } from "./Api";

export default function Serchdata() {
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    handleSearch();
  }, [data]);

  function handleSearch() {
    searchapi({ data }).then((res) => {
      console.log(res.data);
      //   setData(res.data);
    });
  }

  return (
    <div>
      <>
        <All_Links setData={setData} />

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
                  <Radio
                    colorScheme="green"
                    value="2"
                    size={["sm", "md", "lg"]}
                  >
                    TKalt(1749)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="3"
                    size={["sm", "md", "lg"]}
                  >
                    WROGN(1559)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="4"
                    size={["sm", "md", "lg"]}
                  >
                    Puma(1492)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="5"
                    size={["sm", "md", "lg"]}
                  >
                    Friskers(1480)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="6"
                    size={["sm", "md", "lg"]}
                  >
                    HRX by Hrithik Roshan(1373)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="7"
                    size={["sm", "md", "lg"]}
                  >
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
                  <Radio
                    colorScheme="green"
                    value="2"
                    size={["sm", "md", "lg"]}
                  >
                    Rs. 2670 to Rs. 5156(1187)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="3"
                    size={["sm", "md", "lg"]}
                  >
                    Rs. 5156 to Rs. 7642(49)
                  </Radio>
                  <Radio
                    colorScheme="green"
                    value="4"
                    size={["sm", "md", "lg"]}
                  >
                    Rs. 7642 to Rs. 10128(14)
                  </Radio>
                </Stack>
              </RadioGroup>
            </ul>
          </div>

          <SimpleGrid columns={[2, 3, 4]} spacing="40px">
            {data.map((elem, index) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={index}
              >
                <Link to={`/mens/singleproduct/${elem.id}`}>
                  <img src={elem.Image} alt="" />
                  <Text ml="10px" fontSize={["sm", "md", "2xl", "3xl"]} as="b">
                    {elem.Name}
                  </Text>

                  <Box mb="10px" display="flex" ml="10px" gap="20px">
                    <Text color="tomato">Rs. {elem.Price}</Text>
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
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
        <Pagination
          // totalpage={totalpage}
          currentPage={page}
          onClick={(value) => setPage(value)}
        />
      </>
    </div>
  );
}
