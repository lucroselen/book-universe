import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import { useState, useEffect } from "react";
//import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
