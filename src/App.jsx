import { useState } from "react";
import All_Links from "./All_Routes/All_Links";
import All_Routes from "./All_Routes/All_Route";
import "./App.css";
import Footer from "./components/Footer";

// import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"

function App() {
  return (
    <div className="App">
      <All_Links />
      <All_Routes />
      <Footer />
    </div>
  );
}

export default App;
