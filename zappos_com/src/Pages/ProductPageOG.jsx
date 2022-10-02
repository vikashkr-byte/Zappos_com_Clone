import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer_HomePage from "../Components/Footer_HomePage";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import LoadingComponent from "../Components/LoadingComponent";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import SecondTopMostBar from "../Components/SecondTopMostBar";
import SmallScreenSearchBar from "../Components/SmallScreenSearchBar";
import TopMostWithLogo from "../Components/TopMostWithLogo";
import TopSearchBar from "../Components/TopSearchBar";

// let data=products_data
const ProductPageOG = () => {
  const [categogo, setCategogo] = useState("Women");
  const [products_data, setProducts_data] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(5);
  const [page, setPage] = useState(1);
  // console.log("products_data:", products_data);

  let limit = 8;
  // console.log("isLoading:", isLoading);
  useEffect(() => {
    setIsLoading(true);

    document.title = `Products | ${categogo}`;
    if (categogo === "Women") {
      handleClickWomen();
    }
    if (categogo === "Men") {
      handleClickMen();
    }
    //  handleClickMen()
  }, [categogo, page]);

  const handleClickWomen = () => {
    setProducts_data([]);

    axios
      .get(
        `http://localhost:8080/products_data_women?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setProducts_data(res.data);
        console.log("res:", res.data);
        setIsLoading(false);
      });
    setCategogo("Women");
  };
  const handleClickMen = () => {
    setProducts_data([]);
    axios
      .get(
        `http://localhost:8080/products_data_men?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setProducts_data(res.data);
        console.log("res:", res.data);
        setIsLoading(false);
      });
    setCategogo("Men");
  };

  return (
    <>
      <TopMostWithLogo />
      <SecondTopMostBar />
      <TopSearchBar />
      <SmallScreenSearchBar />
      <Navbar />
      <HomePage_Text_Carousel />
      <LoadingComponent statusQuo={isLoading} justifySelf={"center"} />
      <Divider/>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        pl="30px"
        py="5px"
        mb="5px"
        bgColor={"rgb(229,241,248)"}
      >
        <ButtonGroup gap="2">
          <Button color="white" bgColor="rgb(0,118,189)" onClick={handleClickWomen}>
            Women
          </Button>
          <Button color="white" bgColor="rgb(0,118,189)" onClick={handleClickMen}>
            Men
          </Button>
        </ButtonGroup>
        <Spacer />
        <Box p="2">
          <Heading size="md"></Heading>
        </Box>
      </Flex>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={2}
        p="25px"
        boxShadow="base"
        rounded="md"
        bg="white"
        mb="5px"
      >
        {products_data.map((item) => (
          <Link to={`/products/${item.id}`}>
            <GridItem
              key={item.id}
              w="auto"
              h="auto"
              mb={1}
              // border="1px solid red"
              // onClick={}
            >
              <Box w="100%" h="auto">
                <Image src={item.image} alt={item.title} />
              </Box>
              <Box w="100%" margin={"auto"} p="10px">
                <Text
                  _hover={{
                    color: "rgb(0,118,189)",
                    textDecoration: "underline",
                  }}
                  fontWeight={500}
                >
                  {item.title}
                </Text>
                <Text
                  _hover={{
                    color: "rgb(115,173,230)",
                    textDecoration: "underline",
                    textDecoration: "underline",
                  }}
                  fontSize="16px"
                  fontWeight={100}
                >
                  {item.description}
                </Text>
                <Text color={"rgb(3,93,89)"}>${item.price}</Text>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Flex gap={1} pr="40px" mb="30px" justifyContent={"flex-end"}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={page}>{page}</Button>
        <Button disabled={page === total} onClick={() => setPage(page + 1)}>
          Next
        </Button>
        {/* <Pagination
          currentPage={page}
          totalPages={total}
          handlePageChange={(value) => setPage(value)}
        /> */}
      </Flex>
      <Footer_HomePage />
    </>
  );
};

export default ProductPageOG;
