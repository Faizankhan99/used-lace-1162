import React from "react";
import axios from "axios";

export function searchapi(data) {
  return axios.get(`https://blooming-island-90693.herokuapp.com/all?q=${data}`);
}
