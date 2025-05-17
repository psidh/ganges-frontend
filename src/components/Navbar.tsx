"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); // start expanded
  const lastScrollY = useRef(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setIsExpanded(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsExpanded(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = `py-1 px-6 rounded-xl hover:text-blue-500 transform transition duration-300 font-semibold my-2 hover:translate-x-2`;

  return (
    <>
      {/* Fixed Top Nav */}
      <div
        className="fixed top-0 left-1/2 z-50 transition-all duration-300"
        style={{
          width: isExpanded ? "75%" : "50%", // shrink width on scroll down
          transform: "translateX(-50%)",
          paddingTop: isExpanded ? "1rem" : "1rem",
          paddingBottom: isExpanded ? "1rem" : "0.25rem",
        }}
      >
        <div
          className={`flex gap-8 items-center justify-between bg-black/30 backdrop-blur-2xl border border-white/10 lg:border-white/20 shadow-xl rounded-full px-6 transition-all duration-300`}
          style={{
            paddingTop: isExpanded ? "1rem" : "0.25rem",
            paddingBottom: isExpanded ? "1rem" : "0.25rem",
          }}
        >
          <a href="/">
            <h1
              className="font-medium text-blue-300 transition-all duration-300"
              style={{ fontSize: isExpanded ? "1.5rem" : "1rem" }}
            >
              Ganges
            </h1>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
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

          {/* Hamburger Icon */}
          <AiOutlineMenu
            onClick={toggleNav}
            className="flex lg:hidden w-6 h-6 cursor-pointer text-white z-[100]"
          />
        </div>
      </div>

      {/* Overlay when menu open */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[75%]">
          <div className="flex flex-col gap-4 bg-black/30 backdrop-blur-2xl border border-white/10 py-4 px-6 shadow-xl rounded-xl">
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
    </>
  );
};

export default NavBar;
