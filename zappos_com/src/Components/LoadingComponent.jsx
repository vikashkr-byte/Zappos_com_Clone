import { Image } from '@chakra-ui/react'
import React from 'react'
let s
const LoadingComponent = ({statusQuo}) => {
if(!statusQuo)
return ""
  return (
    <>
    
        <Image
        src="https://www.foundationiq.com/images/loading.gif" alt="loading"
        width={"300px"} 
        />
    
    </>
  )
}

export default LoadingComponent