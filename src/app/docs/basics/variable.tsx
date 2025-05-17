"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});
export default function Variable() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama myName = "Sidharth";
rama gfName = "19022023";
rama baby = "Dhanu";`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="variables">
        Variables
      </h2>

      <p className="mt-4 mb-2">
        Variables in <span className="ganges">Ganges</span> are declared using
        the keyword{" "}
        <span className={"text-pink-500 font-medium " + geistMono.className}>
          rama
        </span>
        . You don’t need to specify a type — just assign a value using{" "}
        <span className="px-[3px] py-[2px] rounded-lg bg-neutral-800 font-bold">
          =
        </span>
        .
      </p>

      <p className="mb-6">
        Strings are enclosed in double quotes. Every statement must end with a
        semicolon (<code>;</code>). Variable names follow snake_case or
        camelCase — your call.
      </p>

      <div className="flex flex-col items-start justify-start w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-base font-medium">
              app/variables.ga
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 rounded-md transition-colors hover:bg-neutral-800"
          >
            <span className="transition-all duration-500 ease-in-out cursor-pointer">
              {copied ? <FiCheck className="text-[#00ca50]" /> : <FiCopy />}
            </span>
          </button>
        </div>

        <div
          className={
            "flex flex-col py-4 gap-1 ml-4 w-full items-start justify-start " +
            geistMono.className
          }
        >
          <p>
            1   <span className="text-pink-500 ">rama</span> myName ={" "}
            <span className="text-[#00ca50]">"Sidharth"</span>;
          </p>
          <p>
            2   <span className="text-pink-500 ">rama</span> gfName ={" "}
            <span className="text-[#00ca50]">"19022023"</span>;
          </p>
          <p>
            3   <span className="text-pink-500 ">rama</span> baby ={" "}
            <span className="text-[#00ca50]">"Dhanu"</span>;
          </p>
        </div>
      </div>
    </div>
  );
}
