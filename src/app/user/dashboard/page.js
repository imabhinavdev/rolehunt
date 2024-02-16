import React from "react";
import JoblistCard from "@/components/JoblistCard";
import NavBar from "@/components/Navbar";

const Userdashboard = () => {
  return (
    <>
      <div>
        <section className="">
          <div className="max-w-screen-xl ">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="md:max-w-lg sm:rounded-lg"
                  alt=""
                />
              </div>
              <div className="max-w-xl    sm:px-0  lg:max-w-2xl">
                <p className="text-black text-3xl font-semibold font-serif sm:text-4xl">
                  One Step Closer To Your New Job
                </p>
                <p className="mt-3 text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum, sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium
                </p>
                <div className="flex mt-20 w-96 bg-green justify-between p-4 rounded-full">
                  <p>Be Role Ready</p>
                  <p className="text-white">Get Started</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <JoblistCard />
      </div>
    </>
  );
};

export default Userdashboard;
