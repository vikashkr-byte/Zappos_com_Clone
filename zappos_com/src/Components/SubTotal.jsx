import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SubTotal = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [tax, setTax] = useState(0);
  // console.log('cart:', cart)
  useEffect(() => {
    console.log("cart total:", cart);
    let sub = 0;
    for (let i = 0; i < cart.length; i++) {
      sub += Number(cart[i].price);
    }
    // let sub = cart.reduce(function(total, num) {
    //     return total +num;
    //   },0);
    let taxmoney = (5 / 100) * sub;
    setTax(taxmoney);
    console.log("taxmoney:", taxmoney);
    setTotal(sub);
    setGrandTotal(sub + 4 + Math.ceil(tax));
  }, [cart]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const makepayment = () => {
    setIsLoading(true);
    document.title = `My Cart`;
    setTimeout(() => {
      setIsLoading(false);
      alert("Zappos:Vikash, Your payment was successful!");
      navigate("/");
    }, 2000);
  };

  return (
    <Box
      w="300px"
      h="200px"
      display="flex"
      flexDirection={"column"}
      justifyContent="space-around"
      p="15px"
      border="1px solid lightgray"
      borderRadius={"5px"}
    >
      <Box
        display="flex"
        justifyContent={"space-evenly"}
        alignItems="center"
        borderBottom={"2px solid lightgray "}
      >
        <Text fontSize={"large"} fontWeight="700">
          Sub Total:{" "}
        </Text>
        <Text fontSize={"large"} fontWeight="700">
          {" "}
          $ {total}
        </Text>
      </Box>
      <Box display="flex" justifyContent={"space-evenly"} alignItems="center">
        <Text fontSize={"16px"} fontWeight="700">
          Tax at 5% :{" "}
        </Text>
        <Text fontSize={"16px"} fontWeight="700">
          {" "}
          $ {Math.ceil(tax)}
        </Text>
      </Box>
      <Box display="flex" justifyContent={"space-evenly"} alignItems="center">
        <Text fontSize={"16px"} fontWeight="700">
          Delivery Charge:{" "}
        </Text>
        <Text fontSize={"16px"} fontWeight="700">
          {" "}
          $ {40}
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent={"space-evenly"}
        alignItems="center"
        borderTop={"2px solid lightgray "}
      >
        <Text fontSize={"large"} fontWeight="900">
          Grand Total:{" "}
        </Text>
        <Text fontSize={"large"} fontWeight="900">
          {" "}
          $ {cart.length == 0 ? 0 : grandTotal}
        </Text>
      </Box>
      <Box display="flex" justifyContent={"center"} alignItems="center">
        <Button
          bgColor="rgb(0,118,189)"
          color="white"
          onClick={() => makepayment()}
          isDisabled={isLoading}
        >
          {isLoading ? (
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
              <Text>Pay now</Text>
            </Box>
          ) : (
            "Pay now"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default SubTotal;
