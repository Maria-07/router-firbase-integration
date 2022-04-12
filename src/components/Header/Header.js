import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const auth = getAuth(app);

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  // const { users, handleSignOut } = useFirebase();

  return (
    <div className=" header text-lg my-10">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/reviews"}>Reviews</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/Register"}>Register</Link>
        <span className=" text-xl font-medium text-cyan-700 mx-5">
          {user?.displayName && user.displayName}
        </span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>SignOUT</button>
        ) : (
          <Link to={"/login"}>LogIn</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
