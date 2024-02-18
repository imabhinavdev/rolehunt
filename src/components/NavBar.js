"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NavBar = () => {
  const [state, setState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const navigation = [
    { title: "Dashboard", path: "/user/dashboard" },
    { title: "About", path: "/about" },
    { title: "Help", path: "/help" },
    { title: "Admin", path: "/admin/dashboard" },
    { title: "Support", path: "/support" },
    { title: "Forget Password", path: "/forgetpassword " },
  ];
  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
    }
  }, []);

  return (
    <nav
      className={`    md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center  mx-auto px-4 md:flex md:px-0">
        <div className="flex items-center justify-between py-5 md:block">
          <Link href="/" onClick={() => setState(false)}>
            <motion.h1 className="text-3xl font-pop font-extrabold text-primary" whileTap={{scale:.98}}>
              RoleReady
            </motion.h1>
          </Link>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <motion.li
                  key={idx}
                  className="text-gray-700 hover:text-gray-900 font-pop"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setState(false)}
                >
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {isLoggedIn ? (
              <button className="flex items-center justify-center gap-x-1 py-2 px-4 text-black font-bold bg-yellow  hover:bg-orange-300  rounded-full md:inline-flex">
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-black font-bold bg-yellow hover:bg-orange-300  transition rounded-full md:inline-flex"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
