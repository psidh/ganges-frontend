"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Hashsets() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama gods = hashset("vishnu", "shiva", "brahma");

vadah(gods.contains("shiva"));
vadah(gods.contains("kali"));`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="hashsets">
        Hashsets
      </h2>

      <p className="mt-4 mb-2">
        In <span className="ganges">Ganges</span>, hashsets store **unique**
        values — duplicates are ignored. They are useful for fast membership
        checks and uniqueness guarantees.
      </p>

      <p className="mb-4">
        Use <code>hashset(...)</code> to declare one, and check membership using
        <code>.contains(value)</code>.
      </p>

      <div className="flex flex-col items-start justify-start w-[310px] lg:w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-lg">app/main.go</p>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 rounded-md transition-colors hover:bg-neutral-800"
          >
            <span className="transition-all duration-500 ease-in-out cursor-pointer">
              {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
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
            1   <span className="text-pink-500">rama</span> gods ={" "}
            <span className="text-blue-400">hashset</span>(
            <span className="text-green-500">"vishnu"</span>,{" "}
            <span className="text-green-500">"shiva"</span>,{" "}
            <span className="text-green-500">"brahma"</span>);
          </p>
          <p>
            3   <span className="text-blue-400">vadah</span>(gods.
            <span className="text-yellow-300">contains</span>(
            <span className="text-green-500">"shiva"</span>));
          </p>
          <p>
            4   <span className="text-blue-400">vadah</span>(gods.
            <span className="text-yellow-300">contains</span>(
            <span className="text-green-500">"kali"</span>));
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
        <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
        <p className="text-white">{">>  "}satya</p>
        <p className="text-white">{">>  "}asatya</p>
      </div>

      {/* Notes */}
      <div className="mt-6 w-[600px] border border-neutral-800 bg-neutral-950 p-4 rounded-xl text-sm">
        <h3 className="text-md font-semibold mb-2 text-neutral-200">Notes</h3>
        <ul className="list-disc pl-4 text-neutral-400">
          <li>
            <code>hashset(...)</code> auto-removes duplicates on insert.
          </li>
          <li>
            <code>.contains(value)</code> returns <code>true</code> or{" "}
            <code>false</code>.
          </li>
          <li>Sets are unordered and fast for lookup.</li>
        </ul>
      </div>
    </div>
  );
}
