"use client";

import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function page() {
  document.body.style.backgroundColor = "#f3f3f3";

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f3f3f3] justify-between">
      <Navbar />
      <Header />
    </main>
  );
}

export default page;
