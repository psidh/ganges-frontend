"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Arrays() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama gods = ["vishnu", "shiva", "brahma"];

vadah(gods[0]);
vadah(gods[1]);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="arrays">
        Arrays
      </h2>

      <p className="mt-4 mb-2">
        Arrays in <span className="ganges">Ganges</span> are created using square
        brackets <code>[]</code>. They can store multiple values in order.
        Access elements using zero-based indexing.
      </p>

      <p className="mb-4">
        Arrays are expressions, so they can be assigned to variables, passed to
        functions, or returned.
        <span
          className="ml-2 px-2 py-[1px] text-xs rounded bg-neutral-800 text-neutral-300"
          title="Arrays can be built, modified, and used anywhere as expressions."
        >
          expression-based
        </span>
      </p>

      <div className="flex flex-col items-start justify-start w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-lg">app/array.go</p>
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
            1   <span className="text-pink-500">rama</span> gods = [<span className="text-green-500">"vishnu"</span>,{" "}
            <span className="text-green-500">"shiva"</span>,{" "}
            <span className="text-green-500">"brahma"</span>];
          </p>
          <p>
            2   <span className="text-blue-400">vadah</span>(gods[0]);
          </p>
          <p>
            3   <span className="text-blue-400">vadah</span>(gods[1]);
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
          <li>Arrays are defined using <code>[]</code>.</li>
          <li>Indexing starts from <code>0</code>.</li>
          <li>Arrays can be nested or passed to functions.</li>
          <li>Use <code>gods.length</code> (if supported) to get length. (Coming soon)</li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-6 w-[600px] text-sm text-neutral-400">
        <p className="mb-1">Learn more:</p>
        <ul className="list-disc pl-4 underline">
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
              target="_blank"
              rel="noopener"
            >
              JavaScript Arrays
            </a>
          </li>
          <li>
            <a
              href="https://golang.org/pkg/container/list/"
              target="_blank"
              rel="noopener"
            >
              Go Arrays & Slices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
