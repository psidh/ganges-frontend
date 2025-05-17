"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Chakra() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama count = 0;
chakra (count < 3) {
  vadah("Spin the chakra");
  count = count + 1;
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="while-loop">
        While Loop
      </h2>

      <p className="mt-4 mb-2">
        Use the keyword{" "}
        <span className={"text-pink-500 font-medium " + geistMono.className}>
          chakra
        </span>{" "}
        in <span className="ganges">Ganges</span> for while loops.
      </p>

      <p className="mb-6">
        Place the condition inside parentheses. The body goes inside curly
        braces. Statements inside the loop must also end with a semicolon (
        <code>;</code>).
      </p>

      <div className="flex flex-col items-start justify-start w-[600px] border border-neutral-800 rounded-xl">
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
            1   <span className="text-pink-500">rama</span> count ={" "}
            <span className="text-yellow-400">0</span>;
          </p>
          <p>
            2   <span className="text-pink-500">chakra</span> (
            <span className="text-blue-400">count &lt; 3</span>) &#123;
          </p>
          <p>
            3     <span className="text-pink-500">vadah</span>(
            <span className="text-[#00ca50]">"Spin the chakra"</span>);
          </p>
          <p>
            4     count = count + <span className="text-yellow-400">1</span>;
          </p>
          <p>5   &#125;;</p>
        </div>
      </div>
    </div>
  );
}
