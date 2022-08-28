import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Mens from "../components/Mens";
import { Payment } from "../components/Payment";
import PrivateRoute from "../components/Private";
import Searchdata from "../components/Searchdata";
import SIgnup from "../components/SIgnup";
import Singleproduct from "../components/Singleproduct";
import Successfull from "../components/Successfull";
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
        <Route path="/payment" element={<Payment />} />
        <Route path="/successful" element={<Successfull />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/search" element={<Searchdata />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
