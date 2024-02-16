"use client";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center h-full p-6 bg-yellow ">
      <div className="bg-green flex justify-center items-center w-4/5 h-screen rounded-xl">
        <div className="bg-white flex flex-col w-2/6  h-2/5 rounded-xl p-4">
          <p className="text-5xl text-center text-green font-bold font-roboto">
            Login
          </p>
          <div className="flex flex-col font-">
            <label className="mb-2 font-serif text-black" htmlFor="email">
              Email :{" "}
            </label>
            <input
              className=" focus:outline-none focus:border-green focus:border-4 focus:rounded p-1"
              id="email"
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="flex flex-col font- mt-5">
            <label className="mb-2 font-serif text-black" htmlFor="password">
              Password :{" "}
            </label>
            <input
              className=" focus:outline-none focus:border-green focus:border-4 focus:rounded p-1"
              id="password"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="bg-green font-bold  mt-5 p-1 w-20 rounded text-center text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
