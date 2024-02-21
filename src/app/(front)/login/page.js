"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff } from "@/components/Icons";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="w-full  flex flex-col items-center rounded-md bg-yellow md:shadow-lg md:p-10 p-4 ">
      <div className="max-w-sm w-full bg-white rounded shadow-lg p-10 text-gray-600">
        <div className="text-center ">
          <h1 className="text-4xl  font-bold text-yellow hover:text-green">
            RoleHunt
          </h1>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="abc@example.com"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow shadow-sm rounded-lg"
            />
          </div>
          <div className="relative rounded">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="•••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 z-0 font-pop rounded-lg outline-none border py-2  shadow-sm focus:border-primary w-full focus:ring focus:ring-primary"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer "
            >
              {showPassword ? (
                <Eye className="w-6" />
              ) : (
                <EyeOff className="w-6" />
              )}
            </span>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-yellow hover:bg-green active:bg-yellow rounded-lg duration-150">
            Log in
          </button>
          <div className="text-center">
            <Link href="#" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
