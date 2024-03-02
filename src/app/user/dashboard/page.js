"use client";

import React from "react";
import JoblistCard from "@/components/JoblistCard";
import NavBar from "@/components/Navbar";
import Image from "next/image";

import { supabase } from "@/db/supabase";
import { useState, useEffect } from "react";

const Userdashboard = () => {
  const [fetchError, setFetchError] = useState(null);
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("jobs").select();
      if (error) {
        setFetchError("Could not fetch the job details");
        setJobs(null);
        console.log(error);
      }
      if (data) {
        setJobs(data);
        setFetchError(null);
      }
    };
    fetchJobs();
  }, []);
  return (
    <>
      <div>
        <section className="">
          <div className="max-w-screen-xl ">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <Image
                  className="rounded-lg"
                  src="/images/job.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="max-w-xl    sm:px-0  lg:max-w-2xl">
                <p className="text-black text-3xl   font-pt sm:text-4xl">
                  One Step Closer To Your New Job
                </p>
                <p className="mt-3 text-gray-600 font-pt text-justify ">
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

        <div className="jobsSection">
          {fetchError && <p>{fetchError}</p>}
          {jobs && (
            <div className="jobs">
              {jobs.map((jobs) => (
                <p>{jobs.title}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
