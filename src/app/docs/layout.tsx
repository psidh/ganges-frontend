"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="mt-36 px-4 w-full overflow-x-hidden">
      {/* Toggle Button for Small Screens */}
      <div className="md:hidden mb-4 flex flex-col items-center justify-center">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 bg-neutral-900 cursor-pointer text-white rounded-md border border-neutral-700 transition-colors duration-300"
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full overflow-hidden">
        {/* Sidebar with Smooth Transition */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden md:w-[15%] w-full md:block ${
            isSidebarOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          } md:max-h-full md:opacity-100`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[85%] overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
}
