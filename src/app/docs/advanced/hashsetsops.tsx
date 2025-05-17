"use client";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function HashsetOps() {
  const [copied, setCopied] = useState(false);
  const code = `rama gods = hashset("shiva");

vadha(gods.has("shiva"));
gods.add("vishnu");
vadha(gods.has("vishnu"));
gods.remove("shiva");
vadha(gods.has("shiva"));`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-20">
      <h2 className="docs-subheader" id="hashset-ops">
        Hashset Operations
      </h2>

      <p className="mt-4 mb-4">
        <span className="ganges">Ganges</span> Hashsets support key operations
        like membership checks, insertion, and deletion using the methods below.
      </p>

      {/* Code Box */}
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
            <span className="text-green-500">"shiva"</span>);
          </p>
          <p>
            3   <span className="text-blue-400">vadha</span>(gods.
            <span className="text-yellow-300">has</span>(
            <span className="text-green-500">"shiva"</span>));
          </p>
          <p>
            4   gods.<span className="text-yellow-300">add</span>(
            <span className="text-green-500">"vishnu"</span>);
          </p>
          <p>
            5   <span className="text-blue-400">vadha</span>(gods.
            <span className="text-yellow-300">has</span>(
            <span className="text-green-500">"vishnu"</span>));
          </p>
          <p>
            6   gods.<span className="text-yellow-300">remove</span>(
            <span className="text-green-500">"shiva"</span>);
          </p>
          <p>
            7   <span className="text-blue-400">vadha</span>(gods.
            <span className="text-yellow-300">has</span>(
            <span className="text-green-500">"shiva"</span>));
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
        <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
        <p className="text-white">{">>  "}satya</p>
        <p className="text-white">{">>  "}satya</p>
        <p className="text-white">{">>  "}asatya</p>
      </div>

      {/* Grid UI for methods */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-[600px]">
        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">has()</h4>
          <p className="text-neutral-400">
            Checks if a value exists in the set. Returns <code>true</code> or{" "}
            <code>false</code>.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">add()</h4>
          <p className="text-neutral-400">
            Adds a new value to the set. If it already exists, no change occurs.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            remove()
          </h4>
          <p className="text-neutral-400">
            Deletes a value from the set if present.
          </p>
        </div>
      </div>
    </div>
  );
}
