"use client";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function ArithmeticOps() {
  const [copied, setCopied] = useState(false);

  const code = `rama a = 10;
rama b = 5;
rama sum = a + b;
rama diff = a - b;
rama prod = a * b;
rama div = a / b;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="arithmetic">
        Arithmetic Operations
      </h2>

      <p className="mt-4 mb-2">
        <span className="ganges">Ganges</span> supports all basic arithmetic
        operations:
        <span
          className={"text-blue-400 font-medium ml-1 " + geistMono.className}
        >
          +
        </span>
        ,<span className={"text-blue-400 font-medium ml-1"}>-</span>,
        <span className={"text-blue-400 font-medium ml-1"}>*</span>, and
        <span className={"text-blue-400 font-medium ml-1"}>/</span>. Use them
        freely on integers.
      </p>

      <p className="mb-6">
        Operations follow standard precedence rules. Variables can store results
        of expressions.
      </p>

      <div className="flex flex-col items-start justify-start w-[310px] lg:w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-base font-medium">
              app/arithmetic.ga
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
            1   <span className="text-pink-500">rama</span> a ={" "}
            <span className="text-blue-400">10</span>;
          </p>
          <p>
            2   <span className="text-pink-500">rama</span> b ={" "}
            <span className="text-blue-400">5</span>;
          </p>
          <p>
            3   <span className="text-pink-500">rama</span> sum = a{" "}
            <span className="text-blue-400">+</span> b;
          </p>
          <p>
            4   <span className="text-pink-500">rama</span> diff = a{" "}
            <span className="text-blue-400">-</span> b;
          </p>
          <p>
            5   <span className="text-pink-500">rama</span> prod = a{" "}
            <span className="text-blue-400">*</span> b;
          </p>
          <p>
            6   <span className="text-pink-500">rama</span> div = a{" "}
            <span className="text-blue-400">/</span> b;
          </p>
        </div>
      </div>
    </div>
  );
}
