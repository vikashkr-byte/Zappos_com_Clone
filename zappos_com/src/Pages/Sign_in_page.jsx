import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Stack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContex/AuthContext";

const Sign_in_page = () => {
    const {isToken,handleLogin,isAuth,dummydata}=useContext(AuthContext)
    console.log('isAuth:', isAuth)
    console.log('isToken:', isToken)
    const navigate=useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;
  useEffect(() => {
    document.title = "Zappos Sign-in";
    if(isAuth){
        document.title=`Welcome, ${dummydata}`
    }
    if(isAuth){
      return navigate("/")
  }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleClickSubmit = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((res) =>  handleLogin(res.data.token));
  };

  return (
    <Stack w="400px" m="auto">
      <Flex w="100%" justifyContent={"center"}>
        <Flex w="130px" height={"74px"} p="5px">
          <Image
            src="https://1000logos.net/wp-content/uploads/2020/09/Zappos-Logo.png"
            alt="mainlogo"
            w="100%"
            h="100%"
            ml="15px"
          />
        </Flex>
      </Flex>
      <FormControl
        border={"2px solid black"}
        borderRadius="15px"
        p="25px"
        fontFamily={"sans-serif"}
      >
        <Heading fontSize={"25px"} mb="25px">
          Sign-In
        </Heading>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <Button
          w="100%"
          h="30px"
          color="white"
          bgColor={"rgb(0,57,83)"}
          mt="30px"
          onClick={handleClickSubmit}
        >
          Sign in
        </Button>
      </FormControl>
    </Stack>
  );
};

export default Sign_in_page;
