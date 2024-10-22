"use client";
import { Github, Leetcode, Linkedin } from "@/components/Icons";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Profile = ({ params }) => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [batch, setBatch] = useState("");
  const [mobNo, setMobNo] = useState("");
  const id = params.id;

  useEffect(() => {
    const fetchName = async () => {
      const fetchedData = await fetch("/api/users/profile");
      const data = await fetchedData.json();
      console.log(data);
      console.log(data.email);
      if (data) {
        let { profile } = data;
        profile = profile[0];
        setEmail(email);
        setEnrollment(profile.enrollment);
        setBatch(profile.batch);
      }
    };
    fetchName();
  }, [id]);

  return (
    <div className="w-full  ">
      <div className="flex  w-full flex-col shadow-md items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-60 md:w-80">
          <Image
            width={500}
            height={500}
            src="/images/profileImg.jpeg"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-5 ">
            <div className="flex gap-10 items-center justify-between ">
              <h1 className=" items-center text-2xl md:text-4xl font-semibold">
                Anushka Kishor
              </h1>
              <Link
                href="/user/profile/edit"
                className="md:px-2 sm:px-6 shadow-md  rounded-full  bg-yellow  text-white text-sm w-28 p-1 text-center "
              >
                Edit Profile
              </Link>
            </div>
            {/* <p className="mt-3 text-lg text-gray-600">
              Developer by profession and Designer by passion
            </p> */}
          </div>
        </div>
      </div>

      <div className="md:flex  gap-20 mt-10  ">
        <div className=" shadow-lg rounded-lg  sm:w-full">
          <div className="flex flex-col p-10  sm:w-full   ">
            <div className="grid items-center  justify-center w-full grid-cols-1 text-left">
              <p className="md:text-3xl  mb-8 font-pt underline text-black">
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
                  <p>{email}</p>
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
