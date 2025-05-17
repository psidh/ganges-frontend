"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Functions() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama aashirvad = kriya(god) {
  yadi (god == "vishnu") {
    vadah("Narayana! Narayana!");
  } anyatha {
    vadah("Namah Parvati Patair, Har Har Mahadev!");
  }
};

aashirvad("mahadev");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="functions">
        Functions (kriya)
      </h2>

      <p className="mt-4 mb-2">
        Functions in <span className="ganges">Ganges</span> are declared using
        the keyword{" "}
        <span className={"text-pink-500 font-medium " + geistMono.className}>
          kriya
        </span>
        . You can assign a function to a variable just like any other value —
        functions are <strong>first-class citizens</strong>.
      </p>

      <p className="mb-4">
        The <code>kriya</code> block is an expression, so it can be assigned,
        passed around, or returned from another function.
        <span
          className="ml-2 px-2 py-[1px] text-xs rounded bg-neutral-800 text-neutral-300"
          title="Functions in Ganges can be stored, passed, and returned like any value."
        >
          🧠 expression-based
        </span>
      </p>

      <div className="flex flex-col items-start justify-start w-[600px] border border-neutral-800 rounded-xl">
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
            1   <span className="text-pink-500">rama</span> aashirvad ={" "}
            <span className="text-pink-500">kriya</span>
            (god) &#123;
          </p>
          <p>
            2     <span className="text-pink-500">yadi</span> (god =={" "}
            <span className="text-green-500">"vishnu"</span>) &#123;
          </p>
          <p>
            3       <span className="text-blue-400">vadah</span>(
            <span className="text-green-500">"Narayana! Narayana!"</span>
            );
          </p>
          <p>
            4     &#125; <span className="text-pink-500">anyatha</span> &#123;
          </p>
          <p>
            5       <span className="text-blue-400">vadah</span>(
            <span className="text-green-500">
              "Namah Parvati Patair, Har Har Mahadev!"
            </span>
            );
          </p>
          <p>6     &#125;</p>
          <p>7   &#125;;</p>
          <p className="mt-2">
            8   <span className="text-blue-400">aashirvad</span>(
            <span className="text-green-500">"mahadev"</span>);
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
        <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
        <p className="text-white">{">>  "}Namah Parvati Patair, Har Har Mahadev!</p>
      </div>

      {/* Notes */}
      <div className="mt-6 w-[600px] border border-neutral-800 bg-neutral-950 p-4 rounded-xl text-sm">
        <h3 className="text-md font-semibold mb-2 text-neutral-200">
          Note
        </h3>
        <ul className="list-disc pl-4 text-neutral-400">
          <li>
            Functions are declared using{" "}
            <span className="text-pink-500">kriya</span>.
          </li>
          <li>
            The body of a function is always a block <code>&#123; &#125;</code>.
          </li>
          <li>Functions can be assigned to variables and passed around.</li>
          <li>
            Use <span className="text-blue-400">vadah()</span> to print output.
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-6 w-[600px] text-sm text-neutral-400">
        <p className="mb-1">Learn more:</p>
        <ul className="list-disc pl-4 underline">
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
              target="_blank"
              rel="noopener"
            >
              JS Functions (First-class functions concept)
            </a>
          </li>
          <li>
            <a
              href="https://doc.rust-lang.org/book/ch03-03-how-functions-work.html"
              target="_blank"
              rel="noopener"
            >
              Rust Functions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
