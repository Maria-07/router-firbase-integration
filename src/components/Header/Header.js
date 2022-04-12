import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { users, handleSignOut } = useFirebase();
  return (
    <div className=" header text-lg my-10">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/reviews"}>Reviews</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/Register"}>Register</Link>
        <span>{users?.displayName && users.displayName}</span>
        {users?.uid ? (
          <button onClick={handleSignOut}>SignOUT</button>
        ) : (
          <Link to={"/login"}>LogIn</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
