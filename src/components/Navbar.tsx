"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = `py-1 px-6 rounded-xl hover:text-blue-300 transform transition duration-300 font-semibold my-2 
  hover:translate-x-2`;

  return (
    <div>
      <div className="fixed z-50 flex items-center justify-center w-full">
        <div className="flex gap-8 items-center justify-between bg-black/50 backdrop-blur-2xl border border-white/10 py-3 mt-6 px-6 shadow-xl rounded-full w-[75%]">
          <a href="/">
            <h1 className="font-bold text-xl">Ganges</h1>
          </a>

          <div className="justify-center hidden lg:flex items-center gap-2">
            <a href="/about" className={navClass}>
              About
            </a>
            <a href="/docs" className={navClass}>
              Docs
            </a>
            <a href="/playground" className={navClass}>
              Playground
            </a>
            <a href="/downloads" className={navClass}>
              Downloads
            </a>
          </div>

          <AiOutlineMenu
            onClick={toggleNav}
            className="flex lg:hidden w-6 h-6 cursor-pointer"
          />
        </div>
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="fixed z-20 flex items-center justify-center w-full">
          <div className="flex flex-col lg:hidden justify-start items-start mx-4 gap-4 bg-black/50 backdrop-blur-2xl border border-white/10 py-3 mt-24 px-6 shadow-xl rounded-xl w-[75%]">
            <a href="/about" className={navClass}>
              About
            </a>
            <a href="/docs" className={navClass}>
              Docs
            </a>
            <a href="/playground" className={navClass}>
              Playground
            </a>
            <a href="/downloads" className={navClass}>
              Downloads
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
