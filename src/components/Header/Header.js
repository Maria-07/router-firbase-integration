import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" text-lg my-10">
      <nav>
        <Link className="mx-4" to={"/"}>
          Home
        </Link>
        <Link to={"/login"}>LogIn</Link>
      </nav>
    </div>
  );
};

export default Header;
