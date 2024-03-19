"use client";
import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const AddStudent = ({ params }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [batch, setBatch] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [is_active, setIsActive] = useState(true);

  useEffect(() => {
    const initFetch = async () => {
      const res = await fetch(`/api/admin/student?id=${params.id}`);
      let data = await res.json();
      if (data.error) {
        toast.error("Something went wrong! Please try again later.");
      }
      data = data[0];
      setName(data.users.name);
      setEmail(data.email);
      setMobile(data.users.mobile);
      setBatch(data.batch);
      setBranch(data.branch);
      setEnrollment(data.enrollment);
      setIsActive(data.is_active);
    };
    initFetch();
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = async () => {
      setEnrollment(enrollment.toUpperCase());
      const response = await fetch("/api/admin/student", {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          mobile,
          batch,
          branch,
          enrollment,
          is_active,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!data) {
        toast.success("Student Updated Successfully");
        setName("");
        setEmail("");
        setMobile("");
        setBatch("");
        setPassword("");
        setBranch("");
        setEnrollment("");
        setTimeout(() => {
          router.push("/admin/students");
        }, 1000);
      } else {
        toast.error(
          "Student with this email or mobile number or enrollment already exists"
        );
      }
    };
    submitData();
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0  xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Manage Student
            </p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <Input
                  label="Name"
                  placeholder="Abhinav Singh"
                  name="name"
                  value={name}
                  onChange={setName}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Email"
                  name="email"
                  value={email}
                  autocomplete="off"
                  placeholder="abc@example.com"
                  onChange={setEmail}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <Input
                  label="Mobile"
                  name="mobile"
                  value={mobile}
                  placeholder="9876543210"
                  onChange={setMobile}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Batch"
                  value={batch}
                  name="batch"
                  placeholder="2021"
                  onChange={setBatch}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <Input
                  label="Branch"
                  value={branch}
                  name="branch"
                  placeholder="CSE"
                  onChange={setBranch}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Enrollment"
                  value={enrollment}
                  placeholder="0187CS211006"
                  name="enrollment"
                  onChange={setEnrollment}
                />
              </div>
            </div>
            {/* <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                type="password"
                name="password"
                value={password}
                id="password"
                required
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="is_active"
                id="isActive"
                checked={is_active}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <label htmlFor="isActive">Is Active</label>
            </div>

            <button
              className="w-full bg-yellow hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-black"
              type="submit"
            >
              Add Student
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
