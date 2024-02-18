import { Github, Leetcode, Linkedin } from "@/components/Icons";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full  ">
      <div className="flex  w-full flex-col shadow-md items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-woman-with-magnificent-smile-standing-with-arms-folded-isolated-white_171337-1184.jpg?w=1380&t=st=1708233179~exp=1708233779~hmac=e3acdcd12c791ed532a9dc431c16b893301f8c63136870ae47d593b8acc85a7f"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-5 ">
            <div className="flex gap-10 items-center justify-between ">
              <h1 className="inline-flex items-center text-4xl font-semibold">
                Anushka Kishor
              </h1>
              <div className="sm:w-28 md:32">
                <p className="md:px-2 sm:px-6 shadow-md inline-block rounded-full bg-blue text-black   font-medium">
                  Edit Profile
                </p>
              </div>
            </div>
            <p className="mt-3 text-lg text-gray-600">
              Developer by profession and Designer by passion
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex  gap-20 mt-10  ">
        <div className=" shadow-lg rounded-lg  sm:w-full">
          <div className="flex flex-col p-10  sm:w-full   ">
            <div className="grid items-center  justify-center w-full grid-cols-1 text-left">
              <p className="md:text-3xl  mb-8 font-serif underline text-black">
                Details
              </p>
              <div className="flex text-black font-medium  md:text-lg gap-10">
                <div className="flex-col gap-5 flex">
                  <p>Email :</p>
                  <p>Enrollment :</p>
                  <p>Mobile :</p>
                  <p>Batch</p>
                </div>
                <div className="flex-col gap-5 flex text-gray-500">
                  <p>abc@gmail.com</p>
                  <p>0187CS211033</p>
                  <p>7896541230</p>
                  <p>2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  sm:w-full  ">
          <div className="flex flex-col rounded-xl  sm:w-full shadow-lg p-10 mt-10 ">
            <div className="flex gap-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
