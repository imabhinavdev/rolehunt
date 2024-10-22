"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TechnologyCard from "@/components/TechnologyCard";

const CompanyDetails = ({ params }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companytitle, setCompanyTitle] = useState("");
  const [companydesc, setCompanyDesc] = useState("");
  const [companymis, setCompanymission] = useState("");
  const [companyvis, setCompanyvision] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyNativeCountry, setCompanyNativeCountry] = useState("");
  const [companyHeadquarter, setCompanyHeadquarter] = useState("");
  const [inhandsalary, setInhandSalary] = useState("");
  const [criteria, setCriteria] = useState("");
  const [dateOfComing, setDateOfComing] = useState(null);
  const [category, setCategory] = useState("");
  const [offeredlocation, setOfferedLocation] = useState("");
  const [packageOferred, setPackageOffered] = useState("");
  const [technology, setTechnology] = useState("");
  const id = params.id;

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`/api/users/jobs?id=${id}`);
      const data = await res.json();
      console.log(data);

      if (data) {
        let { jobData } = data;
        jobData = jobData[0];

        setTitle(jobData.title);
        setDescription(jobData.description);
        setCompanyTitle(jobData.company.name);
        setCompanyDesc(jobData.company.description);
        setCompanymission(jobData.company.mission);
        setCompanyvision(jobData.company.vision);
        setCompanySize(jobData.company.size);
        setCompanyNativeCountry(jobData.company.country);
        setCompanyHeadquarter(jobData.company.location);
        setInhandSalary(jobData.inhand_salary);
        setCriteria(jobData.criteria);
        setDateOfComing(jobData.date_of_coming);
        setOfferedLocation(jobData.location);
        setPackageOffered(jobData.salary);
        setTechnology(jobData.technologies);

        const category = jobData.is_fulltime;
        if (category == true) {
          setCategory("fulltime");
        } else {
          setCategory("internship");
        }
      }
    };
    fetchJob();
  }, [id]);

  return (
    <div className="font-pt ">
      <div className="">
        <div className="flex items-center px-5  ">
          <p className="font-bold text-xl mr-10">Profile Name : </p>
          <p className="bg-blue inline-block p-5 rounded-md w-1/2">{title}</p>
        </div>
        <div className="shadow-md rounded-md bg-blue mt-5  p-5">
          <p className="font-bold text-xl  ">Profile Description : </p>
          <p className="mt-4 text-justify bg-white shadow-md p-3 rounded-md ">
            {description}
          </p>
        </div>
        <div className="bg-blue shadow-md rounded-md  mt-5  p-5">
          <div className="flex items-center  ">
            <p className="font-bold text-xl ">Technologies Required : </p>
          </div>
          <div className=" w-full mt-5">
            <div className="w-full ">
              <TechnologyCard technology={technology} />
            </div>
          </div>
        </div>

        <PackageOferred
          criteria={criteria}
          category={category}
          location={offeredlocation}
          arrival={dateOfComing}
          inhand={inhandsalary}
          packageOferred={packageOferred}
        />
        {/* <PackageOferred /> */}
      </div>

      {/* job section ends here */}

      {/* Company section starts here */}

      <div className=" mt-16 rounded-md ">
        <div className="flex items-center px-5 ">
          <p className="font-bold text-xl mr-10">Company Name : </p>
          <p className="bg-blue inline-block p-5  rounded-md w-1/2">
            {companytitle}
          </p>
        </div>
        <div className="shadow-md rounded-md bg-blue mt-5  p-5">
          <p className="font-bold text-xl ">Company Description : </p>
          <p className="mt-4 text-justify bg-white shadow-md p-3 rounded-md">
            {companydesc}
          </p>
        </div>

        <div className="w-full  text-center md:flex mt-10 md:justify-center">
          <div className=" md:flex md:gap-10 justify-around inline w-3/4 ">
            <div className="  text-justify md:py-5">
              <p className="text-2xl font-bold text-center  mb-4">Mission</p>

              <p className="bg-blue rounded-md p-5">{companymis}</p>
            </div>
            <div className="text-justify md:py-5 mt-5 md:mt-0">
              <p className="text-2xl font-bold text-center mb-4 ">Vision</p>
              <div>
                <p className=" bg-blue rounded-md p-5">{companyvis}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center  px-5 mt-5 ">
          <p className="font-bold md:text-xl mr-10">Native Country : </p>
          <p className="bg-blue inline-block md:p-5 p-2 rounded-md w-1/2">
            {companyNativeCountry}
          </p>
        </div>
        <div className="flex items-center px-5 mt-5 ">
          <p className="font-bold md:text-xl mr-16">Headquarter : </p>
          <p className="bg-blue inline-block md:p-5 p-2 rounded-md w-1/2">
            {companyHeadquarter}
          </p>
        </div>
        <div className="flex items-center px-5 mt-5 ">
          <p className="font-bold md:text-xl mr-12">Company Size : </p>
          <p className="bg-blue inline-block md:p-5 p-2 rounded-md w-1/2">
            {companySize}
          </p>
        </div>
      </div>

      <div className="text-4xl text-center mt-20 mb-10 rounded-md shadow-md p-10 ">
        <p className="font-bold">
          We wish you the{" "}
          <span className="text-yellow font-pop">Brightest Future</span> ahead
        </p>
        <p className="text-center text-sm  ml-72  mt-5">- Team RoleHunt</p>
      </div>
    </div>
  );
};
{
  /* Heloo this is testing comment */
}

export default CompanyDetails;

const PackageOferred = (props) => {
  const features = [
    {
      title: "Package Offered",
      desc: props.packageOferred,
    },
    {
      title: "Location Offered",
      desc: props.location,
    },
    {
      title: "Date of arrival to college",
      desc: props.arrival,
    },
    {
      title: "Inhand Salary",
      desc: props.inhand,
    },
    {
      title: "Criteria",
      desc: props.criteria,
    },
    {
      title: "Category",
      desc: props.category,
    },
  ];

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto  text-gray-600 ">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 p-4 border rounded-lg"
              >
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
