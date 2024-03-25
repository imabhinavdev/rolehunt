"use client";
import { InternshipIcon, JobsIcon } from "@/components/Icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/admin/jobs");
      const data = await res.json();
      if (data) {
        setJobs(data);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="  ">
      <div className="max-w-screen-xl  ">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
            Jobs and Internships
          </h1>
          <p className="text-gray-600 mt-2">
            All the jobs and internships listed by you will be shown here.
          </p>
          <span>
            <Link
              href="/admin/jobs/add"
              className="p-1 bg-yellow mt rounded-lg font-semibold text-white text-sm px-4 py-2 duration-150 hover:bg-yellow-500"
            >
              New Job
            </Link>
          </span>
        </div>
        {!loading ? (
          jobs.length > 0 ? (
            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((item, idx) => (
                <li className="border rounded-lg" key={idx}>
                  <div className="flex items-start justify-between p-4">
                    <div className="space-y-2">
                      {item.is_fulltime ? (
                        <JobsIcon className="w-8 h-8 text-indigo-600" />
                      ) : (
                        <InternshipIcon className="w-8 h-8 text-indigo-600" />
                      )}
                      <h4 className="text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm capitalize">
                        {item.company.name}
                      </p>
                    </div>
                    <Link
                      href={`/admin/jobs/manage/${item.id}`}
                      className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100"
                    >
                      Edit
                    </Link>
                  </div>
                  <div className="py-5 px-4 border-t flex justify-between">
                    <span
                      className={`${
                        item.is_active ? "bg-green" : "bg-red-400"
                      } text-sm p-1 rounded-md font-semibold text-white`}
                    >
                      {item.is_active ? "Active" : "Inactive"}
                    </span>
                    <Link
                      href={`/admin/jobs/view/${item.id}`}
                      className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 text-center text-gray-500">No data found</p>
          )
        ) : (
          <p className="mt-8 text-center text-gray-500">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default AdminJobs;
