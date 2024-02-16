import React from "react";

const ForgetPassword = () => {
  return (
    <div className="flex justify-center ">
      <div class="flex flex-col md:w-1/3 sm:w-full shadow-lg   p-8">
        <div class="  ">
          <div class="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <div className="text-center mb-8 flex justify-center items-center text-xl ">
                <span className="material-symbols-outlined ">lock</span>
              </div>
              <p class="text-lg  tracking-tighter text-center text-black font-bold mb-8 lg:text-xl">
                Trouble with logging in?
              </p>
              <p class="mt-2 text-md text-black ">
                Enter your email address, phone number or username, and we'll
                send you an OTP to get back into your account.
              </p>
            </div>
            <div class="mt-6 w-full">
              <input
                className="w-full p-3 border border-black rounded-md"
                type="text"
                placeholder="Email address, phone number or username"
              />
            </div>
          </div>
        </div>
        <div class="flex px-6 pb-8 sm:px-8 mb-10">
          <a
            aria-describedby="tier-company"
            className="flex mt-5 items-center justify-center w-full  py-3 text-center text-white  bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            href="#"
          >
            Send OTP
          </a>
        </div>

        <hr />
        <div className=" mt-10 p-3">
          <p className="text-xl font-medium text-center  ">Back to Login</p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
