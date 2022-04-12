import { getAuth } from "firebase/auth";
import React from "react";
// import useFirebase from "../../hooks/useFirebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  // const { signInWIthGoogle } = useFirebase();

  const navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  // const signInWIthGoogle = () => {
  //   console.log("sign in Google");
  // };
  return (
    <div className="">
      <h2 className=" text-2xl font-semibold text-cyan-500 mb-5">Login :</h2>
      <button
        onClick={() => handleGoogleSignIn()}
        className=" text-3xl font-bold text-red-700"
      >
        Google
      </button>
      <h1 className=" font-normal text-lg my-5">Or</h1>
      <form>
        <input
          type="email"
          className="form-input px-4 py-3 rounded-full border-2 my-3"
          placeholder="Enter your mail"
        />
        <br />
        <input
          type="password"
          className="form-input px-4 py-3 rounded-full border-2 my-3"
          placeholder="Your Password"
        />
        <br />
        <input
          type="submit"
          className=" mt-3 text-white bg-cyan-500 px-5 py-2 text-xl font-semibold"
          value="login"
        />
      </form>
    </div>
  );
};

export default Login;
