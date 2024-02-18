import React from "react";
import Link from "next/link";

const SideBarList = ({ toggleSidebar, Icon, data }) => {
  return (
    <li>
      <Link
        href={data.link}
        className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-all hover:scale-[1.02]"
        onClick={toggleSidebar}
      >
        <Icon className="w-5" />
        <span className="ms-3">{data.title}</span>
      </Link>
    </li>
  );
};

export default SideBarList;
