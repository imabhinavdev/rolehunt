import React from "react";

const Support = () => {
  return (
    <div className="">
      <div>
        <p className="text-4xl text-center font-serif font-medium">Support</p>
        <p className="text-xl mt-5 text-justify  font-serif font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint a
          fugiat vitae rem dolor eligendi natus obcaecati id exercitationem.
        </p>
      </div>
      <div className="md:flex mt-10 font-serif h-72 gap-10 ">
        <div className="  text-justify   md:w-1/2 sm:w-ful ">
          <p className="text-2xl font-bold text-center  mb-4">Generate Query</p>

          <input
            type="text"
            placeholder="Enter your query..."
            className="border rounded-md p-5 w-full h-2/3  shadow-lg"
          />
        </div>
        <div className="  text-justify    md:w-1/2 sm:w-ful  ">
          <p className="text-2xl font-bold text-center  mb-4">
            Emergency Support
          </p>
          <div className="bg-white border  text-black rounded-md p-5 w-full h-2/3 shadow-lg  items-center">
            <div className="flex mb-10">
              <span className="mr-6 material-symbols-outlined">call</span>
              <p>98745663210</p>
            </div>
            <div className="flex ">
              <span className="mr-6 material-symbols-outlined">call</span>
              <p>98745663210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
