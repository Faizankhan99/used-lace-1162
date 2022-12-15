import React from "react";
import axios from "axios";

export function searchapi(data) {
  return axios.get(`https://json-8pz0.onrender.com/all?q=${data}`);
}
