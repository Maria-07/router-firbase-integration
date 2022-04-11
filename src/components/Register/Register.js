import React from "react";

const Register = () => {
  return (
    <div>
      <h2 className=" text-2xl font-semibold text-cyan-500 mb-5">
        Please register now :
      </h2>

      <button className=" text-3xl font-bold text-red-700">Google</button>

      <h1 className=" font-normal text-lg my-5">Or</h1>

      <form>
        <input
          type="Text"
          className="form-input px-4 py-3 rounded-full border-2 my-3"
          placeholder="your name"
        />
        <br />
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
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
