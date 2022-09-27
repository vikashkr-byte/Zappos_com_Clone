import { background, Box, Center, Flex, Image, Square, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const TopMostWithLogo = () => {
  return (
    <Flex color='white'>
  <Center w='150px' bg='rgb(0,118,189)'  _hover={{
      background: "rgb(79, 165, 219)",
      cursor:"pointer"
     
    }} h="36px">
  <Image src="https://i.postimg.cc/m2YW4tCD/zappos-White.png"  alt="zappowhite" w="43%" h="59%" />
    
  </Center>
  <Flex w="100%" 
  boxShadow='xs' bg='white' 
  h="36px"
  border='1px' borderColor='gray.200'
  >

  <Square bg='white' size='100px' h="36px" _hover={{
      background: "gray.200",
      cursor:"pointer"
     
    }} border='1px' borderColor='gray.200' >
    <a href='https://vrsnl.zappos.com' >


    <Image src="https://vrsnl.retailpackagingshop.com/wp-content/uploads/sites/5/2021/10/vrsnl.png" alt="vrsnl" w="55%" h="35%" marginLeft={"27%"} />
    </a>
  
  </Square>
  <Square  bg='white' >
    <Text>Box 3</Text>
  </Square>
  </Flex>

  
</Flex>
  )
}

export default TopMostWithLogo