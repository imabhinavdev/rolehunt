import React from "react";
import JoblistCard from "@/components/JoblistCard";
import NavBar from "@/components/Navbar";
import Image from "next/image";

const Userdashboard = () => {
  return (
    <>
      <div>
        <section className="">
          <div className="max-w-screen-xl ">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <img
                  src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?w=1380&t=st=1708259282~exp=1708259882~hmac=f6f2dafe5d11543e822bf8377c4537f807b8e0e4421d4df6c5a84b197196aab3"
                  className="md:max-w-lg sm:rounded-lg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="max-w-xl    sm:px-0  lg:max-w-2xl">
                <p className="text-black text-3xl  font-dm sm:text-4xl">
                  One Step Closer To Your New Job
                </p>
                <p className="mt-3 text-gray-600 font-dm text-justify ">
                  The RoleHunt platform gives you an exclusive opportunity to
                  explore job opportunities. You can checkout the details of the
                  company and the post they are offering. You can explore the
                  <span className="font-bold font-pop"> Mission</span> and
                  <span className="font-bold font-pop"> Vision </span>of the
                  company and the skills needed to land a job in that company.
                </p>
                <div className="flex mt-20 w-full sm:w-96 bg-yellow justify-between p-4 rounded-full">
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
