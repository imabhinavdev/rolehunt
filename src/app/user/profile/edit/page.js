import React from "react";

const AddStudent = () => {
  return (
    <div>
      <form>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0  xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Edit Profile
            </p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  placeholder="email@example.com"
                  className="bg-gray-50 border border-gray-300 text-gray-500  text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Enrollment
                </label>
                <input
                  placeholder="0187CS211033"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="email"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Mobile
                </label>
                <input
                  placeholder="9874563210"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Batch
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5">
                  <option value="1">2021</option>
                  <option value="2">2022</option>
                  <option value="2">2024</option>
                  <option value="2">2025</option>
                </select>
              </div>
            </div>

            <div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  CGPA
                </label>
                <input
                  placeholder="8.7"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
            </div>

            <div>
              <p className="text-2xl font-medium mt-10">Update Links </p>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Resume
                </label>
                <input
                  placeholder="https://linkedin.com/in/kishoranushka"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Leetcode
                </label>
                <input
                  placeholder="https://linkedin.com/in/kishoranushka"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Linkedin
                </label>
                <input
                  placeholder="https://linkedin.com/in/kishoranushka"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Github
                </label>
                <input
                  placeholder="https://linkedin.com/in/kishoranushka"
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
            </div>

            <button
              className="w-full bg-yellow hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
