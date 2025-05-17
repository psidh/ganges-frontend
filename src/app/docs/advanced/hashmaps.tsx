"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Hashmaps() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama gods = {
  "preserver": "vishnu",
  "destroyer": "shiva",
};

vadha(gods["preserver"]);
vadha(gods["destroyer"]);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="hashmaps">
        Hashmaps
      </h2>

      <p className="mt-4 mb-2">
        In <span className="ganges">Ganges</span>, hashmaps (or dictionaries)
        store key-value pairs. Keys are strings, and access is done via bracket
        notation.
      </p>

      <p className="mb-4">
        Useful for fast lookups and grouping related values.
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
            1   <span className="text-pink-500">rama</span> gods = {"{"}
          </p>
          <p className="ml-6">
            <span className="text-green-500">"preserver"</span>:{" "}
            <span className="text-green-500">"vishnu"</span>,
          </p>
          <p className="ml-6">
            <span className="text-green-500">"destroyer"</span>:{" "}
            <span className="text-green-500">"shiva"</span>,
          </p>
          <p>   {"}"};</p>
          <p>
            5   <span className="text-blue-400">vadha</span>(gods[
            <span className="text-green-500">"preserver"</span>]);
          </p>
          <p>
            6   <span className="text-blue-400">vadha</span>(gods[
            <span className="text-green-500">"destroyer"</span>]);
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
        <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
        <p className="text-white">{">>  "}vishnu</p>
        <p className="text-white">{">>  "}shiva</p>
      </div>

      {/* Notes */}
      <div className="mt-6 w-[600px] border border-neutral-800 bg-neutral-950 p-4 rounded-xl text-sm">
        <h3 className="text-md font-semibold mb-2 text-neutral-200">Notes</h3>
        <ul className="list-disc pl-4 text-neutral-400">
          <li>
            Hashmaps are declared with <code>{"{}"}</code> and key-value pairs.
          </li>
          <li>Keys must be strings. Values can be any expression.</li>
          <li>
            Use bracket notation to access: <code>gods["preserver"]</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
