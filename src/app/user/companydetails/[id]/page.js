"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import JoblistCard from "@/components/JoblistCard";
import TechnologyCard from "@/components/TechnologyCard";

const CompanyDetails = ({ params }) => {
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
      const res = await fetch(`/api/users/jobs?id=${id}`);
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

        // const selectedCompany = allCompanies.find(
        //   (company) => company.id === jobData.company
        // );

        // fetchCompanyData(jobData.company);
        // console.log(selectedCompany);

        // setLoading(false);
        // const { companyData } = data;
        // setCompanies(companyData);
      }
    };
    fetchJob();
  }, [id, allCompanies]);

  return (
    <div className="font-pt ">
      <div className="">
        <div className="flex items-center px-5  ">
          <p className="font-bold text-xl mr-10">Profile Name : </p>
          <p className="bg-blue inline-block p-5 rounded-md w-1/2">{title}</p>
        </div>
        <div className="shadow-md rounded-md bg-blue mt-5  p-5">
          <p className="font-bold text-xl  ">Profile Description : </p>
          <p className="mt-4 text-justify  rounded-md ">{description}</p>
        </div>
        <div className="bg-blue shadow-md rounded-md  mt-5  p-5">
          <div className="flex items-center  ">
            <p className="font-bold text-xl ">Technologies Required : </p>
          </div>
          <div className=" mt-5">
            <div className="flex gap-10 ">
              <TechnologyCard />
              <TechnologyCard />
              <TechnologyCard />
            </div>
          </div>
        </div>

        <PackageOferred />
        {/* <PackageOferred /> */}
      </div>

      {/* job section ends here */}

      {/* Company section starts here */}

      <div className=" mt-16 rounded-md ">
        <div className="flex items-center px-5 ">
          <p className="font-bold text-xl mr-10">Company Name : </p>
          <p className="bg-blue inline-block p-5 rounded-md w-1/2">
            {/* {selectedCompany?.name} */}
          </p>
        </div>
        <div className="shadow-md rounded-md bg-blue mt-5  p-5">
          <p className="font-bold text-xl">Company Description : </p>
          <p className="mt-4 text-justify  rounded-md">{description}</p>
        </div>

        <div className="md:flex md:gap-10 mt-10">
          <div className="  text-justify md:py-5">
            <p className="text-2xl font-bold text-center  mb-4">Mission</p>

            <p className="bg-blue rounded-md p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              cupiditate assumenda non. Enim sequi facilis illo unde vel
              deleniti voluptatibus eveniet harum consequuntur autem quisquam
              dolore molestiae maiores iusto consequatur delectus temporibus
              consectetur dicta non maxime, porro ex illum fugiat voluptatem.
              Eos voluptates quia, odit cum veritatis provident sed vero,
              accusantium minima ipsa ipsam soluta, sunt quos sequi ea dolore.
              Nihil vel alias dolores temporibus sit quidem. Ea, sint a?
            </p>
          </div>
          <div className="text-justify md:py-5 mt-5 md:mt-0">
            <p className="text-2xl font-bold text-center mb-4 ">Vision</p>
            <div>
              <p className=" bg-blue rounded-md p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                cupiditate assumenda non. Enim sequi facilis illo unde vel
                deleniti voluptatibus eveniet harum consequuntur autem quisquam
                dolore molestiae maiores iusto consequatur delectus temporibus
                consectetur dicta non maxime, porro ex illum fugiat voluptatem.
                Eos voluptates quia, odit cum veritatis provident sed vero,
                accusantium minima ipsa ipsam soluta, sunt quos sequi ea dolore.
                Nihil vel alias dolores temporibus sit quidem. Ea, sint a?
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center  px-5 mt-5 ">
          <p className="font-bold md:text-xl mr-10">Native Country : </p>
          <p className="bg-blue inline-block md:p-5 p-2 rounded-md w-1/2">
            XYZ{" "}
          </p>
        </div>
        <div className="flex items-center px-5 mt-5 ">
          <p className="font-bold md:text-xl mr-10">Headquarter : </p>
          <p className="bg-blue inline-block md:p-5 p-2 rounded-md w-1/2">
            XYZ{" "}
          </p>
        </div>
        <div className="flex items-center px-5 mt-5 ">
          <p className="font-bold md:text-xl mr-10">Company Size : </p>
          <p className="bg-blue inline-block md:p-5 p-2 rounded-md w-1/2">
            XYZ{" "}
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

const PackageOferred = () => {
  const features = [
    {
      title: "Package Offered",
      desc: "10 LPA",
    },
    {
      title: "Location Offered",
      desc: "Hyderabad",
    },
    {
      title: "Date of arrival to college",
      desc: "24/02/2024",
    },
    {
      title: "Inhand Salary",
      desc: "50000",
    },
    {
      title: "Criteria",
      desc: "More than 8 CGPA",
    },
    {
      title: "Category",
      desc: "Fulltime",
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
