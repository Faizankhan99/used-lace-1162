import React from "react";
import { Button, Image, Box } from "@chakra-ui/react";
import { Navigate, Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Box
        ml={["-22%", "-15%", "0%"]}
        mt={["20%", "8%", "-2%"]}
        w={["100%", "150%", "100%"]}
        mb={["-20%", "-20%", "-13%"]}
      >
        <Image
          boxSize={["100%"]}
          objectFit="cover"
          src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
          alt="ERROR"
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
