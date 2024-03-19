"use client";
import React, { useEffect, useState } from "react";
import { AllCompanies } from "@/data/Companies";
import Link from "next/link";
const AdminStudents = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/admin/student");
      const data = await response.json();
      setdata(data);
      setloading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Students
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <Link
            href="/admin/students/add"
            className="inline-block px-4 py-2 text-black duration-150 font-medium bg-yellow rounded-lg hover:bg-green active:bg-green md:text-sm"
          >
            Add Student
          </Link>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center">Loading...</div>
      ) : (
        <div className="mt-12 relative h-max overflow-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6 ">Name</th>
                <th className="py-3 pr-6">Email</th>
                <th className="py-3 pr-6">Status</th>
                <th className="py-3 pr-6">Branch</th>
                <th className="py-3 pr-6">Batch</th>
                <th className="py-3 pr-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {Object.keys(data).map((item, idx) => (
                <tr key={idx}>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {data[item].users.name}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {data[item].email}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-xs ${
                        data[item].users.is_active == true
                          ? "text-cyan-600 bg-cyan-50"
                          : "text-red-600 bg-red-50"
                      }`}
                    >
                      {data[item].users.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {data[item].branch}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {data[item].batch}
                  </td>
                  <td className="text-right whitespace-nowrap">
                    <Link
                      href={`/admin/students/manage/${data[item].enrollment}`}
                      className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                    >
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminStudents;
