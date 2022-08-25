import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Login from "../components/Login";
import Mens from "../components/Mens";
import SIgnup from "../components/SIgnup";
import Singleproduct from "../components/Singleproduct";
import Womens from "../components/Womens";

export default function All_Routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SIgnup />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/womens/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/mens/cart" element={<Cart />} /> */}
        {/* <Route path="/womens/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
}
