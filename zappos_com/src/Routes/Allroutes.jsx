import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_Page from '../Components/Home_Page'

const Allroutes = () => {
  return (
    <Routes>
        <Route path={"/"} element={<Home_Page/>} ></Route>
      
    </Routes>
  )
}

export default Allroutes