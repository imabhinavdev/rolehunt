"use client ";
import React from "react";
import { AllCompanies } from "@/data/Companies";
import Link from "next/link";
const AdminStudents = () => {
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
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6 ">Name</th>
              <th className="py-3 pr-6">Batch</th>
              <th className="py-3 pr-6">Domain</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Price</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {AllCompanies.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.status == "Active"
                        ? "text-cyan-600 bg-cyan-50"
                        : "text-red-600 bg-red-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="text-right whitespace-nowrap">
                  <Link
                    href="javascript:void()"
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
    </>
  );
};

export default AdminStudents;
