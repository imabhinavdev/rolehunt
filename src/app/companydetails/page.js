import React from "react";

import JoblistCard from "@/components/JoblistCard";
import TechnologyCard from "@/components/TechnologyCard";

const CompanyDetails = () => {
  return (
    <div>
      <div className="flex items-center p-5">
        <p className="font-bold text-xl ">Profile Name : </p>
        <p className="">XYZ </p>
      </div>
      <div className="bg-blue w-full h-72 rounded-xl shadow-md p-5">
        <p className="font-bold text-xl ">Profile Description : </p>
        <p className="mt-8 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quia
          error consequuntur ipsa quod, laboriosam enim excepturi ad dolorem
          quam nostrum et aut odio. Aspernatur cum sint amet officia in nihil?
          Earum quaerat laborum deserunt ea vero voluptatum ut magni odit qui
          cupiditate sint nulla molestiae dolorum, error ipsa assumenda?
          Aspernatur, illo rem atque accusamus eligendi esse ea numquam
          perspiciatis sint quae, modi hic debitis et quibusdam adipisci
          laudantium repellat iure recusandae, ab officia doloribus! Delectus
          nemo quisquam animi distinctio. Quibusdam consequuntur aut, voluptatum
          vel neque dolor expedita nisi iure exercitationem laborum veritatis
          perspiciatis, quos optio, dicta ipsum similique corrupti!
        </p>
      </div>
      <div className="flex items-center p-5">
        <p className="font-bold text-xl ">Technologies Required : </p>
      </div>
      <div className="bg-blue w-full h-72 rounded-xl shadow-md p-5 ">
        <div className="flex gap-10 mb-10">
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </div>
        <div className="flex gap-10">
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </div>
      </div>
      <div className="flex items-center p-5">
        <p className="font-bold text-xl ">Profile Name : </p>
        <p className="">XYZ </p>
      </div>
      <div className="bg-blue w-full h-72 rounded-xl shadow-md p-5">
        <p className="font-bold text-xl ">Profile Description : </p>
      </div>
      <div className="flex items-center p-5">
        <p className="font-bold text-xl ">Profile Name : </p>
        <p className="">XYZ </p>
      </div>
      <div className="bg-blue w-full h-72 rounded-xl shadow-md p-5">
        <p className="font-bold text-xl ">Profile Description : </p>
      </div>
    </div>
  );
};

export default CompanyDetails;
