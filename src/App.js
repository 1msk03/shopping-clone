import React from "react";
// import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import Data from "./Data";
import Cart from "./Pages/Cart";
import List from "./Pages/List";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar data={Data} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart data={Data} />} />
        <Route path="/product" element={<List />} />
        <Route path="/product/:name" element={<List />} />
      </Routes>
    </>
  );
};

export default App;
