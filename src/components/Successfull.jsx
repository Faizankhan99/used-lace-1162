import React from "react";
import { Button, Image, Box } from "@chakra-ui/react";
import { Navigate, Link } from "react-router-dom";

export default function Successfull() {
  return (
    <div>
      <Box
        ml={["-22%", "-15%", "0%"]}
        mt={["20%", "8%", "1%"]}
        w={["100%", "150%", "100%"]}
        mb={["-20%", "-20%", "10%"]}
      >
        <Image
          boxSize={["30%"]}
          objectFit="cover"
          src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif"
          alt="ERROR"
          ml="34%"
        />
      </Box>
      <Link to="/">
        <Button
          size={["sm", "md", "lg"]}
          color="white"
          bg="green"
          ml={["22%", "46%", "10%"]}
        >
          GO home
        </Button>
      </Link>
    </div>
  );
}
