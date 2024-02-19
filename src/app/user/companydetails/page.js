import React from "react";

import JoblistCard from "@/components/JoblistCard";
import TechnologyCard from "@/components/TechnologyCard";

const CompanyDetails = () => {
  return (
    <div className="font-pt">
      <div className="flex items-center p-5">
        <p className="font-bold text-xl mr-10">Profile Name : </p>
        <p className="">XYZ </p>
      </div>
      <div className="w-full shadow-md  drop-shadow-lg p-5">
        <p className="font-bold text-xl  ">Profile Description : </p>
        <p className="mt-8 text-justify">
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
      <div className=" ">
        <div className="flex gap-10 ">
          <TechnologyCard />
          <TechnologyCard />
          <TechnologyCard />
        </div>
      </div>

      <PackageOferred />

      <div className="flex items-center p-5">
        <p className="font-bold text-xl mr-10">Company Name : </p>
        <p className="">XYZ PVT. Ltd.</p>
      </div>
      <div className="shadow-md    p-5">
        <p className="font-bold text-xl ">Company Description : </p>
        <p className="mt-8 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          saepe possimus architecto molestiae temporibus, voluptate,
          exercitationem fugit quis culpa omnis, dolorem illum vitae eligendi
          facere! Magni, quibusdam laudantium! Dignissimos assumenda dolor
          aliquam omnis voluptates eligendi numquam ea optio harum libero?
          Maiores numquam aliquid sapiente deleniti? Vel vero soluta modi ex
          quis asperiores libero harum expedita optio nostrum ipsam suscipit
          quod explicabo nesciunt dolorum, debitis beatae corporis excepturi
          dolore architecto pariatur error ea amet deserunt! Earum nobis a,
          fugit consequuntur, eaque error velit quibusdam dicta libero deleniti
          reiciendis harum? Consectetur, explicabo. Ipsa sequi quaerat
          dignissimos nesciunt eos provident, veritatis hic aspernatur.
        </p>
      </div>

      <div className="flex  shadow-md mt-10">
        <div className="  text-justify p-5">
          <p className="text-2xl font-bold text-center  mb-4">Mission</p>

          <p className="border rounded-md p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            cupiditate assumenda non. Enim sequi facilis illo unde vel deleniti
            voluptatibus eveniet harum consequuntur autem quisquam dolore
            molestiae maiores iusto consequatur delectus temporibus consectetur
            dicta non maxime, porro ex illum fugiat voluptatem. Eos voluptates
            quia, odit cum veritatis provident sed vero, accusantium minima ipsa
            ipsam soluta, sunt quos sequi ea dolore. Nihil vel alias dolores
            temporibus sit quidem. Ea, sint a?
          </p>
        </div>
        <div className="text-justify p-5">
          <p className="text-2xl font-bold text-center mb-4 ">Vision</p>
          <div>
            <p className="border rounded-md p-5">
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

      <div className="flex items-center mt-10 p-5 shadow-md ">
        <p className="font-bold text-xl mr-20">Companies Headquarter : </p>
        <p className="">Mumbai</p>
      </div>
      <div className="flex items-center mt-10 shadow-md p-5 mb-10">
        <p className="font-bold text-xl mr-20">Companies Native Country : </p>
        <p className="">India</p>
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
