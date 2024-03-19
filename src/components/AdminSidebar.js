"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { ToastContainer, toast } from "react-toastify";

const AdminSidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    const fetchData = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetchData.json();
    if (response.success) {
      toast.success("Logout Successfull");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Logout Failed");
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 font-pop">
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
                <motion.span
                  className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                  whileTap={{ scale: 0.98 }}
                >
                  RoleHunt Admin
                </motion.span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/images/user.png"
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
            <motion.li whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }}>
              <Link
                onClick={handleLogout}
                href=""
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
              >
                <Logout className="w-5" />
                <span className="ms-3">Logout</span>
              </Link>
            </motion.li>
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
    link: "/admin/jobs",
    icon: Jobs,
  },
  {
    title: "Students",
    link: "/admin/students",
    icon: Users,
  },
];
