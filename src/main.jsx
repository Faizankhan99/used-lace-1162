import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Authcontextprovider } from "./Context/Auth";
import All_Links from "./All_Routes/All_Links";
import Appcontextprovider from "./Context/Appcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Appcontextprovider>
          <Authcontextprovider>
            <App />
          </Authcontextprovider>
        </Appcontextprovider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
