"use client";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function DataType() {
  const [copied, setCopied] = useState(false);

  const code = `rama isAlive = true;
rama name = "Lakshman";
rama age = 27;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="data-types">
        Data Types
      </h2>

      <p className="mt-4 mb-2">
        <span className="ganges">Ganges</span> supports simple but powerful
        types:
        <span
          className={"text-pink-500 font-medium ml-1 " + geistMono.className}
        >
          {" "}
          boolean
        </span>
        ,
        <span className={"text-[#00ca50] font-medium " + geistMono.className}>
          {" "}
          string
        </span>
        , and
        <span className={"text-blue-400 font-medium " + geistMono.className}>
          {" "}
          integer
        </span>
        . No type declarations are needed — the interpreter figures it out.
      </p>

      <p className="mb-6">
        Booleans use <code>true</code> or <code>false</code>, strings go inside
        double quotes, and integers are written as-is. Terminate every
        declaration with a semicolon.
      </p>

      <div className="flex flex-col items-start justify-start w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-base font-medium">
              app/dataTypes.ga
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
            1   <span className="text-pink-500">rama</span> isAlive ={" "}
            <span className="text-yellow-400">true</span>;
          </p>
          <p>
            2   <span className="text-pink-500">rama</span> name ={" "}
            <span className="text-[#00ca50]">"Lakshman"</span>;
          </p>
          <p>
            3   <span className="text-pink-500">rama</span> age ={" "}
            <span className="text-blue-400">27</span>;
          </p>
        </div>
      </div>
    </div>
  );
}
