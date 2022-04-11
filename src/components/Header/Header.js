import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className=" header text-lg my-10">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/reviews"}>Reviews</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/Register"}>Register</Link>
        <Link to={"/login"}>LogIn</Link>
      </nav>
    </div>
  );
};

export default Header;
