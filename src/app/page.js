"use client";

import Image from "next/image";
import Logo from "@/assets/img/forLanding.jpg";
import { useState } from "react";
import Menubar from "@/components/menubar-form/Menubar";
import Mainview from "@/components/mainview-landing-form/Mainview";

export default function Home() {
  const [active, setActive] = useState("login");

  const renderActive = (value) => {
    switch (value) {
      case "login":
        setActive(value);
      case "register":
        setActive(value);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f3f3f3] justify-between p-[50px]">
      <div className=" w-full flex flex-col md:flex-row h-[500px] ">
        <div className="w-[50%] h-full  flex justify-center ">
          <Image src={Logo} className="my-auto" />
        </div>
        <div className="w-1/2 flex justify-center h-full">
          <form className="md:w-[400px] flex flex-col rounded-md gap-[20px] bg-white px-[20px] pb-[36px] pt-[12px]">
            <Menubar active={active} renderActive={renderActive} />
            <Mainview active={active} />
          </form>
        </div>
      </div>
    </main>
  );
}
