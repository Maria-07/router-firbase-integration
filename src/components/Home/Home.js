import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <div>
      <h2 className=" text-5xl">This is home</h2>
      <p>Current User Id : {user ? user.displayName : "no body"}</p>
    </div>
  );
};

export default Home;
