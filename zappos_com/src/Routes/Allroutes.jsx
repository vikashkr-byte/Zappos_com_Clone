import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_Page from '../Components/Home_Page'
import PrivateRoutes from '../Components/PrivateRoutes'
import Home from '../Pages/Home'
import Products_Page from '../Pages/Products_Page'
import Sign_in_page from '../Pages/Sign_in_page'

const Allroutes = () => {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>} ></Route>
        <Route path={"/signin"} element={<Sign_in_page/>}></Route>
        <Route path={"/products"} element={<PrivateRoutes><Products_Page/></PrivateRoutes>}></Route>
    
    </Routes>
  )
}

export default Allroutes