import React from "react";

function Menubar({ active, renderActive }) {
  const data = [
    {
      name: "Login",
      value: "login",
    },
    {
      name: "Register",
      value: "register",
    },
  ];

  return (
    <div className="w-full md:h-[36px] flex px-3">
      {data?.map((res) => {
        return (
          <div
            key={res?.value}
            onClick={() => renderActive(res?.value)}
            className={`flex w-1/2 h-full items-end cursor-pointer ${
              active === res?.value ? "border-b-2 border-black" : ""
            }`}
          >
            <div className="flex w-full h-[24px] justify-center items-center cursor-pointer">
              <label
                htmlFor=""
                className={`self-stretch font-["Oxygen"] font-semibold text-center cursor-pointer`}
              >
                {res?.name}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menubar;
