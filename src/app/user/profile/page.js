import React from "react";

const Profile = () => {
  return (
    <div className="w-full ">
      <div class="flex  w-full flex-col shadow-md items-center rounded-md border md:flex-row">
        <div class="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            class="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div class="p-5 ">
            <div className="flex gap-10 items-center justify-between ">
              <h1 class="inline-flex items-center text-4xl font-semibold">
                Anushka Kishor
              </h1>

              <p className="px-2 shadow-md inline-block rounded-full bg-blue text-black   font-medium">
                Edit Profile
              </p>
            </div>
            <p class="mt-3 text-lg text-gray-600">
              Developer by profession and Designer by passion
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex gap-20 mt-10 ">
        <div className=" shadow-lg rounded-lg w-full">
          <div class="flex flex-col p-10 sm:w-full   ">
            <div class="  ">
              <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                <p className="text-3xl  mb-8 font-serif underline text-black">
                  Details
                </p>
                <div className="flex text-black font-medium text-lg gap-10">
                  <div className="flex-col gap-5 flex">
                    <p>Email :</p>
                    <p>Enrollment :</p>
                    <p>Mobile :</p>
                    <p>Batch</p>
                  </div>
                  <div className="flex-col gap-5 flex text-gray-500">
                    <p>abc@gmail.com</p>
                    <p>0187CS211033</p>
                    <p>7896541230</p>
                    <p>2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full  ">
          <div class="flex flex-col rounded-xl sm:w-full shadow-lg p-10  ">
            <div class="  ">
              <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                <p className="text-3xl  mb-8 font-serif underline text-black">
                  Links
                </p>
                <div className="flex text-black font-medium text-lg gap-10">
                  <div className="flex-col gap-5 flex">
                    <p>Resume :</p>
                    <p>Leetcode :</p>
                    <p>Linkedin :</p>
                    <p>Github :</p>
                  </div>
                  <div className="flex-col gap-5 flex text-gray-500">
                    <p>https://linkedin.com/in/kishoranushka</p>
                    <p>https://linkedin.com/in/kishoranushka</p>
                    <p>https://linkedin.com/in/kishoranushka</p>
                    <p>https://linkedin.com/in/kishoranushka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
