import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'

const SmallScreenSearchBar = () => {
  return (
    <InputGroup display={["flex", "flex","none", "none"]} >
            <Input
              type="text"
              //   w={"400px"}
              h="45px"
              // type={show ? 'text' : 'password'}
              placeholder="Search for shoes, clothes, etc."
              alignItems={"center"}
              borderRadius="none"
            />
            <InputLeftElement>
              <SearchIcon mt={"5px"} color="gray.500" />
            </InputLeftElement>
            <InputRightElement height={"45px"} width={"110px"}>
              <Button
                h="100%"
                w={"100%"}
                borderRadius={"none"}
                bgColor="rgb(0,57,83)"
                color={"white"}
                _hover={{ backgroundColor: "rgb(0,118,189)" }}
              >
                SEARCH
              </Button>
            </InputRightElement>
          </InputGroup>
  )
}

export default SmallScreenSearchBar