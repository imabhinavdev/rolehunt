"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const AdminViewDetails = ({ params }) => {
  const job_id = params.id;
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/applications?id=${job_id}`);
        const data = await response.json();
        setApplications(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchData();
  }, [job_id]);

  return (
    <>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Job Details
          </h3>
          <p className="text-gray-600 mt-2">
            Students interested in the job are listed here!
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <Link
            href="/admin/company/add"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-yellow rounded-lg hover:opacity-90  md:text-sm"
          >
            Add Companies
          </Link>
        </div>
      </div>

      {!loading ? (
        applications.length > 0 ? (
          <div className="mt-12 relative h-max overflow-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 pr-6">Student Enrollment</th>
                  <th className="py-3 pr-6">Batch</th>
                  <th className="py-3 pr-6">CGPA</th>
                  <th className="py-3 pr-6">Resume</th>
                  <th className="py-3 pr-6">LinkedIn</th>
                  <th className="py-3 pr-6">GitHub</th>
                  <th className="py-3 pr-6">Other Links</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {applications.map((student, idx) => (
                  <tr key={idx}>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      {student.enrollment}
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      {student.batch}
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      {student.cgpa}
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      <a target="_blank" href={student.resume}>
                        Resume
                      </a>
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      <a target="_blank" href={student.linkedin}>
                        LinkedIn
                      </a>
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      <a target="_blank" href={student.github}>
                        GitHub
                      </a>
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      <a target="_blank" href={student.other_links}>
                        Other Links
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-8 text-center">
            <p className="text-gray-500">No Applications Found</p>
          </div>
        )
      ) : (
        <div className="mt-8 text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
    </>
  );
};

export default AdminViewDetails;
