import React from "react";
import Link from "next/link";
const AdminDashboardCard = ({ data }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
      <Link href="#">
        <h5 className="mb-2 text-3xl lg:text-xl font-bold tracking-tight text-gray-900">
          {data.title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 ">{data.description}</p>
      <span>
        <Link
          href={data.link}
          className="transition-all inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-yellow-300"
        >
          {data.buttonText}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </span>
    </div>
  );
};

export default AdminDashboardCard;
