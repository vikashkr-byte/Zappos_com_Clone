import { Button, Flex } from '@chakra-ui/react'
import React from 'react'


function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({currentPage,totalPages, handlePageChange}) {
  let pages = createArrayOfSize(totalPages).map((a,i) => {
   return <Button onClick={()=> handlePageChange(i+1)}
    disabled={currentPage===i+1}
    key={i+1}
    >{i+1}</Button>;
  });
  return <div>{pages}</div>;
}



export default Pagination