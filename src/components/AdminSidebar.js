"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Company,
  Dashboard,
  Edit,
  Jobs,
  Logout,
  Menu,
  Profile,
  Users,
} from "@/components/Icons";
import SideBarList from "./SideBar/SideBarList";
import { motion } from "framer-motion";

const AdminSidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 font-roboto">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open sidebar</span>
              </button>
              <Link href="/" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <motion.span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white" whileTap={{scale:.98}}>
                  RoleHunt Admin
                </motion.span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {SideBarData.map((sidebar, index) => (
              <SideBarList
                key={index}
                toggleSidebar={toggleSidebar}
                data={sidebar}
                Icon={sidebar.icon}
              />
            ))}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="mt-14">{children}</div>
      </div>
    </>
  );
};

export default AdminSidebar;

const SideBarData = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: Dashboard,
  },
  {
    title: "Company",
    link: "/admin/company",
    icon: Company,
  },
  {
    title: "Jobs",
    link: "#",
    icon: Jobs,
  },
  {
    title: "Students",
    link: "/admin/students",
    icon: Users,
  },
  {
    title: "Logout",
    link: "#",
    icon: Logout,
  },
];
