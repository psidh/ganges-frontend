"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Print() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `vadah("Namaste!");
vadah("My name is Sidharth");
vadah("Ganges flows strong");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="printing">
        Print Statements
      </h2>

      <p className="mt-4 mb-2">
        To print output in <span className="ganges">Ganges</span>, use the
        keyword{" "}
        <span className={"text-pink-500 font-medium " + geistMono.className}>
          vadah
        </span>
        . This function prints to the console.
      </p>

      <p className="mb-6">
        Wrap what you want to print inside parentheses and double quotes. Don't
        forget the semicolon (<code>;</code>) at the end.
      </p>

      <div className="flex flex-col items-start justify-start w-[310px] lg:w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-base font-medium">
              app/main.ga
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
            1   <span className="text-pink-500 ">vadah</span>(
            <span className="text-[#00ca50]">"Namaste!"</span>);
          </p>
          <p>
            2   <span className="text-pink-500 ">vadah</span>(
            <span className="text-[#00ca50]">"My name is Sidharth"</span>);
          </p>
          <p>
            3   <span className="text-pink-500 ">vadah</span>(
            <span className="text-[#00ca50]">"Ganges flows strong"</span>);
          </p>
        </div>
      </div>
    </div>
  );
}
