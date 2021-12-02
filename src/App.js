import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import AllBooks from "./components/AllBooks/AllBooks";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/EditBook/EditBook";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Page404 from "./components/Page404/Page404";

//import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/all-books" element={<AllBooks />} />
            <Route path="/top-10" element={<AllBooks />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit" element={<EditBook />} />
            <Route path="/details" element={<Details />} />
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
