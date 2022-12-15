import React, { useState } from "react";
import styles from "../components/Nav.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Spinner,
  InputGroup,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Context/Auth";
import axios from "axios";

let login = {
  email: "eve.holt@reqres.in",
  pass: "cityslicka",
};

export default function Login() {
  const { isAuth, Loginuser } = useContext(Authcontext);
  const [cred, serCred] = useState(login);
  const [email, setEamil] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  // console.log(email, pass);

  function handlechange(e) {
    const { name, value } = e.target;
    serCred({ ...cred, [name]: value });
  }

  console.log(cred);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    let data = {
      email: cred.email,
      password: cred.pass,
    };

    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        console.log(res.data);
        Loginuser(email, "token");
      })
      .catch((err) => {
        alert("Please enter your email address");
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  if (isAuth) {
    return <Navigate to="/cart" />;
  }

  return (
    <div className={styles.login}>
      <Box
        mb={["-5%"]}
        w={["60%", "60%", "50%"]}
        border="1px "
        borderColor="#cccc"
        ml={["20%", "20%", "20%"]}
      >
        <Image
          boxSize={["100%", "100%", "100%"]}
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/14/1db28809-f3db-48b1-b303-d937716565661626257521634-Banner_Hamburger--2---1-.jpg"
          alt="Dan Abramov"
        />
      </Box>
      <Box
        border="1px"
        borderColor="#cccc"
        m="auto"
        mt="5%"
        ml={["20%", "20%", "20%"]}
        w={["60%", "60%", "50%"]}
        h="400px"
      >
        <Text
          fontSize={["sm", "md", "2xl"]}
          color="black"
          ml={["12%", "12%", "10%"]}
          as="b"
        >
          Login Or Signup
        </Text>
        <FormControl p="20px" m="auto" w="90%">
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={cred.email}
            onChange={handlechange}
            placeholder="Enter your Email"
          />
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              value={cred.pass}
              name="pass"
              onChange={handlechange}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.9rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box pl={["16%"]} mb="30px">
          <Text>
            By continuing I agree to the Terms of Use &<br />
            Privacy Policy
            <br />
            Don't have account Signup
          </Text>
        </Box>

        <Button
          colorScheme="green"
          w={["50%", "50%", "50%"]}
          ml={["15%", "15%", "15%"]}
          onClick={handleSubmit}
        >
          Login
          {isLoading && <Spinner color="red.500" />}
        </Button>
      </Box>
    </div>
  );
}
