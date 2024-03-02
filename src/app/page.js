import React from "react";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div className="md:mx-auto max-w-screen-xl px-4 select-none bg-white min-h-screen">
        <NavBar />
        <div className="flex md:mt-20">
          <div className="md:w-1/2">
            <Image
              src="/images/home.jpeg"
              alt="Work Image"
              height={600}
              width={600}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <h1 className="text-8xl font-bold text-left">
              Welcome to <span className="text-yellow">RoleHunt</span>
            </h1>
            <p className="text-left text-lg">
              One stop platform for applying job in campus.
            </p>
            <span>
              <Link
                href="/user/dashboard"
                className="bg-yellow p-2 px-3 rounded-full font-semibold"
              >
                Get Started
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
