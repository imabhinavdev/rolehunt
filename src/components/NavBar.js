import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center  px-6 pt-2">
        <div className="w-4/5 items-center p-2 text-black  flex justify-between ">
          <div className="text-3xl font-bold font-roboto text-black">
            RoleReady
          </div>
          <div className="flex gap-10">
            <p>HOME</p>
            <p>DASHBOARD</p>
            <p>SUPPORT</p>
            <p>LOGIN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
