"use client";
import Input from "@/components/Input";
import Textarea from "@/components/TextArea";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const ManageJobs = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [criteria, setCritera] = useState("");
  const [is_fulltime, setIs_fulltime] = useState("");
  const [inhand_salary, setInhand_salary] = useState("");
  const [is_open, setIs_open] = useState("");
  const [date_of_coming, setDateofComing] = useState("");
  const [allCompanies, setCompanies] = useState("");
  const [company, setCompany] = useState(0);
  const [is_active, setIs_active] = useState("");
  const [loading, setLoading] = useState(true);
  const id = params.id;

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`/api/admin/jobs?id=${id}`);
      const data = await res.json();
      if (data) {
        let { jobData } = data;
        jobData = jobData[0];
        setTitle(jobData.title);
        setSalary(jobData.salary);
        setTechnologies(jobData.technologies);
        setDescription(jobData.description);
        setLocation(jobData.location);
        setCritera(jobData.criteria);
        setIs_fulltime(jobData.is_fulltime);
        setInhand_salary(jobData.inhand_salary);
        setIs_open(jobData.is_open);
        setDateofComing(jobData.date_of_coming);
        setIs_active(jobData.is_active);
        setCompany(jobData.company);
        setLoading(false);
        const { companyData } = data;
        setCompanies(companyData);
      }
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      id,
      title,
      salary,
      technologies,
      inhand_salary: salary,
      description,
      location,
      criteria,
      is_fulltime,
      inhand_salary,
      is_open,
      date_of_coming,
      is_active,
      company,
    };
    const res = await fetch(`/api/admin/jobs`, {
      method: "PUT",
      body: JSON.stringify(dataToSend),
    });
    const result = await res.json();
    if (result) {
      toast.success("Job Updated Successfully");
      setTimeout(() => {
        router.push("/admin/jobs");
      }, 1500);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <div>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0  xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Manage Jobs
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <Input
                    label="Title"
                    value={title}
                    onChange={setTitle}
                    name="title"
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    label="Salary"
                    value={salary}
                    onChange={setSalary}
                    name="salary"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Company
                  </label>
                  <select
                    name="company"
                    id="company"
                    defaultValue={company}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  >
                    {allCompanies &&
                      allCompanies.map((company) => (
                        <option key={company.id} value={company.id}>
                          {company.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="w-1/2">
                  <Input
                    label="Location"
                    value={location}
                    onChange={setLocation}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <Textarea
                    label="Criteria"
                    value={criteria}
                    onChange={setCritera}
                  />
                </div>
                <div className="w-1/2">
                  <Textarea
                    label="Technologies"
                    value={technologies}
                    onChange={setTechnologies}
                  />
                </div>
              </div>
              <div>
                <Textarea
                  label="Description"
                  value={description}
                  onChange={setDescription}
                />
              </div>
              <div className="flex gap-2 justify-between">
                <div className="">
                  <input
                    type="checkbox"
                    name="is_fulltime"
                    id="is_fulltime"
                    checked={is_fulltime}
                    onChange={(e) => setIs_fulltime(e.target.checked)}
                  />
                  <label htmlFor="is_fulltime">Is Full Time</label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    name="is_open"
                    id="is_open"
                    checked={is_open}
                    onChange={(e) => setIs_open(e.target.checked)}
                  />
                  <label htmlFor="is_open">Open for Students</label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    name="is_active"
                    id="is_active"
                    checked={is_active}
                    onChange={(e) => setIs_active(e.target.checked)}
                  />
                  <label htmlFor="is_active">Show to students</label>
                </div>
              </div>
              <button
                className="w-full bg-yellow hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-black"
                type="submit"
              >
                Update Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageJobs;
