import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home'
import Login from '../components/Login'
import Mens from '../components/Mens'
import SIgnup from '../components/SIgnup'
import Womens from '../components/Womens'


export default function All_Routes() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="login" element={<Login/>} />
              <Route path="signup" element={<SIgnup/>} />
              <Route path="mens" element={<Mens/>} />
              <Route path="womens" element={<Womens/>} />
          </Routes>  

    </div>
  )
}
