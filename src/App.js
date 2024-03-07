import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Checkout from "./pages/Checkout/Checkout.jsx";

const App = () => {
  return (
    <div className="overflow-hidden bg-[rgba(248,240,228,1)]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/sign-up" element={<SignUp />} ></Route>
          <Route path="/checkout" element={<Checkout />} ></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
