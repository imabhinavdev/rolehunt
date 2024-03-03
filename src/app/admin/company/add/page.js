"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const ManageCompany = () => {
  const router = useRouter();
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [size, setSize] = useState("");
  const [is_active, setIs_active] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      description,
      vision,
      mission,
      location,
      country,
      size,
      is_active,
    };
    const resp = await fetch(`/api/admin/company`, {
      method: "POST",
      body: JSON.stringify(updatedData),
    });
    const data = await resp.json();
    if (data) {
      toast.success("Company added successfully");
      setTimeout(() => {
        router.push("/admin/company");
      }, 1500);
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-white rounded-lg shadow border md:mt-0  xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Add Company
              </p>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    placeholder="Company Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Location
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    type="text"
                    name="location"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Vision
                  </label>
                  <textarea
                    name="vision"
                    placeholder="Vision"
                    id=""
                    cols="30"
                    rows="3"
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></textarea>
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Mission
                  </label>
                  <textarea
                    name="mission"
                    placeholder="Mission"
                    id=""
                    cols="30"
                    rows="3"
                    value={mission}
                    onChange={(e) => setMission(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Country
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    type="text"
                    placeholder="Country"
                    value={country}
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Size
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    type="text"
                    placeholder="Size"
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Description"
                    id=""
                    cols="30"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Status
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="is_active"
                    id="is_active"
                    value={is_active}
                    onChange={(e) => setIs_active(e.target.checked)}
                    className="rounded-lg border border-gray-300 text-primary-300 focus:ring-4 focus:ring-primary-300 focus:outline-none"
                  />
                  <label
                    htmlFor="is_active"
                    className="text-sm font-medium text-gray-900"
                  >
                    Active
                  </label>
                </div>
              </div>
              <button
                className="w-full bg-yellow hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-black"
                type="submit"
              >
                Add Company
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageCompany;
