import React from "react";
import Link from "next/link";
import AdminDashboardCard from "@/components/AdminDashboardCard";
const AdminDashboard = () => {
  return (
    <>
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
    link: "/amdin/students",
    buttonText: "Manage",
  },
  {
    title: "Manage Jobs",
    description: "You can manage the jobs that are available for the students.",
    link: "/admin/jobs",
    buttonText: "Manage",
  },
  {
    title: "Manage Placements",
    description: "You can manage the placements of the students.",
    link: "/admin/placements",
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
