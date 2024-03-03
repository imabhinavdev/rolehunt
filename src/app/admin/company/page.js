"use client";
import React, { useEffect, useState } from "react";
import { AllCompanies } from "@/data/Companies";
import Link from "next/link";
const AdminCompany = () => {
  //useeffect function to fetch data from "/api/admin/company" and set the data in useState
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCompany = async () => {
      const fetchData = await fetch("/api/admin/company");
      const data = await fetchData.json();
      if (data) {
        console.log(data);
        setCompanies(data);
        setLoading(false);
      }
    };
    fetchCompany();
  }, []);

  return (
    <>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Companies
          </h3>
          <p className="text-gray-600 mt-2">
            The Companies that are registered with us. You can manage them from
            here
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
        companies.length > 0 ? (
          <div className="mt-12 relative h-max overflow-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 pr-6 ">Name</th>
                  <th className="py-3 pr-6">Location</th>
                  <th className="py-3 pr-6">Status</th>
                  <th className="py-3 pr-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {companies.map((item, idx) => (
                  <tr key={idx}>
                    <td className="pr-6 py-4 whitespace-nowrap capitalize">
                      {item.name}
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      {item.location}
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-2 rounded-full font-semibold text-xs ${
                          item.is_active == true
                            ? "text-cyan-600 bg-cyan-50"
                            : "text-red-600 bg-red-50"
                        }`}
                      >
                        {item.is_active == true ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
                    <td className="pr-6 py-4 whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="text-right whitespace-nowrap">
                      <Link
                        href={`/admin/company/manage/${item.id}`}
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
        ) : (
          <div className="mt-8 text-center">
            <p className="text-gray-500">No Companies Found</p>
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

export default AdminCompany;
