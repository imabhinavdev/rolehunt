import React from "react";
import Link from "next/link";
import AdminDashboardCard from "@/components/AdminDashboardCard";
const AdminDashboard = () => {
  return (
    <>
      <div className="items-start justify-between md:flex mb-4">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Dashboard
          </h3>
          <p className="text-gray-600 mt-2">
            Manage everything at one place. You can manage the companies,
            students, jobs and placements.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-y-5 gap-x-12">
        {CardData.map((data, index) => (
          <AdminDashboardCard key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;

const CardData = [
  {
    title: "Manage Company",
    description:
      "You can manage the companies coming to the campus or the companies present.",
    link: "/admin/company",
    buttonText: "Manage",
  },
  {
    title: "Manage Students",
    description:
      "You can manage the students who are currently studying in the college.",
    link: "/admin/students",
    buttonText: "Manage",
  },
  {
    title: "Manage Jobs",
    description: "You can manage the jobs that are available for the students.",
    link: "/admin/jobs",
    buttonText: "Manage",
  },

  {
    title: "Add Companies",
    description: "You can add the companies that are coming to the campus.",
    link: "/admin/company/add",
    buttonText: "Add Company",
  },
  {
    title: "Add Jobs",
    description: "You can add the jobs that are available for the students.",
    link: "/admin/jobs/add",
    buttonText: "Add Job",
  },
];
