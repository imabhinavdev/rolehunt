import React from "react";

const AddStudent = () => {
  return (
    <div>
      <form>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0  xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add Student
            </p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  placeholder="JohnDoe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  placeholder="email@example.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Batch
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5">
                  <option value="1">2021</option>
                  <option value="2">2022</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your new password"
                id="newPassword"
                type="password"
                autocomplete="new-password"
              />
            </div>

            <div className="flex items-start ">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 border rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  type="checkbox"
                  aria-describedby="terms"
                  id="terms"
                />
              </div>
              <div className="ml-3 text-sm ">
                <label className="font-light text-gray-500 " htmlFor="terms">
                  I accept the
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-primary-500"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              className="w-full bg-yellow hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-black"
              type="submit"
            >
              Create an account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
