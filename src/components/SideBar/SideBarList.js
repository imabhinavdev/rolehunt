import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SideBarList = ({ toggleSidebar, Icon, data }) => {
  return (
    <motion.li whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }}>
      <Link
        href={data.link}
        className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
        onClick={toggleSidebar}
      >
        <Icon className="w-5" />
        <span className="ms-3">{data.title}</span>
      </Link>
    </motion.li>
  );
};

export default SideBarList;
