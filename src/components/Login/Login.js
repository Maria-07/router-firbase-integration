import React from "react";

const Login = () => {
  return (
    <div className="">
      <h2 className=" text-2xl font-semibold text-cyan-500 mb-5">Login :</h2>
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
