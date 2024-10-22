"use client";
import Input from "@/components/Input";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "@/components/Icons";

const AddStudent = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [mobile, setMobile] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [is_active, setIsActive] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = async () => {
      setEnrollment(enrollment.toUpperCase());
      const response = await fetch("/api/admin/student", {
        method: "POST",
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
      if (data.error) {
        if (data.alreadyExists) {
          toast.error(
            "Student with this email or mobile number or enrollment already exists"
          );
        } else {
          toast.error("Something went wrong! Please try again later.");
        }
      } else {
        toast.success("Student Added Successfully");
        setName("");
        setEmail("");
        setMobile("");
        setBatch("");
        setBranch("");
        setEnrollment("");
        setTimeout(() => {
          router.push("/admin/students");
        }, 1000);
      }
    };
    submitData();
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0  xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add Student
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
