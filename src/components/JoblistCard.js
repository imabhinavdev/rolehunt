import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Rupees } from "@/components/Icons";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const JobListCard = ({ param }) => {
  const [jobs, setJobs] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchedData = await fetch("/api/users/jobs");
        const data = await fetchedData.json();
        if (data) {
          setJobs(data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    // Fetch jobs and set email on component mount
    const fetchDataAndSetEmail = async () => {
      fetchJobs();
      const tempEmail = Cookies.get("token");
      const cookieValue = tempEmail;
      const tokenStartIndex = cookieValue.indexOf("=") + 1;
      const stopIndex = cookieValue.indexOf(";") - 1;
      const jwtToken = cookieValue.substring(tokenStartIndex, stopIndex);
      const decodedToken = jwt.decode(jwtToken);
      setEmail(decodedToken.email);
    };

    fetchDataAndSetEmail();
  }, []);

  const handleInterested = async (jobId) => {
    try {
      const response = await fetch("/api/applications/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_id: jobId,
          email: email,
        }),
      });

      if (response.ok) {
        console.log("Application submitted successfully!");
      } else {
        console.error("Failed to submit application:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return jobs.length > 0 ? (
    <section className="mt-10">
      <div>
        <h1 className="text-gray-800 text-3xl font-semibold">
          Explore The Jobs
        </h1>
      </div>
      <ul className="mt-12 space-y-6">
        {jobs.map((item, idx) => (
          <li
            key={idx}
            className="p-5 bg-yellow bg-opacity-20 rounded-md shadow-md"
          >
            <a href={item.href}>
              <div className="justify-between sm:flex">
                <div className="flex-1">
                  <h3 className="md:text-2xl text-xl font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-base md:font-normal text-wrap pr-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                  <span className="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.date}
                  </span>
                  <span className="flex items-center w-16 h-12 text-gray-500">
                    <Rupees />
                    {item.salary}
                  </span>
                </div>
              </div>
              <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                <span className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  {item.type}
                </span>
                <span className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.location}
                </span>
              </div>
            </a>
            <div className="md:flex gap-10">
              <motion.div
                className="flex transition-all justify-between items-center md:w-80 w-full bg-yellow p-2 px-4 text-center rounded-full mt-5 cursor-pointer"
                onClick={() => handleInterested(item.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="w-8 h-8">
                  <Heart fill={item.interested ? "red" : "none"} />
                </div>
                <span>Interested</span>
              </motion.div>
              <div className="flex justify-between items-center md:w-80 w-full bg-yellow p-2 px-4 text-center rounded-full mt-5">
                <Link href={`/user/companydetails/${item.id}`}>
                  Check this opportunity
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <div className="py-10 flex justify-center mt-10">
      <p className="text-4xl text-black text-center py-5 shadow-md w-full bg-yellow bg-opacity-40">
        No Jobs Listed
      </p>
    </div>
  );
};

export default JobListCard;
