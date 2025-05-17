"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function Conditionals() {
  const [copied, setCopied] = useState<boolean>(false);
  const code = `rama mood = yadi (5 > 3) {
  "happy"
} anyatha {
  "sad"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-16">
      <h2 className="docs-subheader" id="conditionals">
        Conditionals
      </h2>

      <p className="mt-4 mb-2">
        Conditional logic in <span className="ganges">Ganges</span> is handled
        using{" "}
        <span className={"text-pink-500 font-medium " + geistMono.className}>
          yadi
        </span>{" "}
        for <em>if</em> and{" "}
        <span className={"text-pink-500 font-medium " + geistMono.className}>
          anyatha
        </span>{" "}
        for <em>else</em>. The condition goes inside parentheses, and the
        branches inside curly braces.
      </p>

      <p className="mb-4">
        Unlike many languages, the{" "}
        <span className="text-pink-500 font-medium">yadi-anyatha</span> block is
        an <strong>expression</strong>. That means it returns a value and can be
        directly assigned to a variable.
        <span
          className="ml-2 px-2 py-[1px] text-xs rounded bg-neutral-800 text-neutral-300"
          title="This makes conditionals behave like Rust or functional languages. It’s not just control flow — it returns something."
        >
          returns value
        </span>
      </p>

      <div className="flex flex-col items-start justify-start w-[310px] lg:w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-base font-medium">
              app/conditionals.ga
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
            1   <span className="text-pink-500">rama</span> mood ={" "}
            <span className="text-pink-500">yadi</span> (
            <span className="text-blue-400">5 &gt; 3</span>) &#123;
          </p>
          <p>
            2     <span className="text-[#00ca50]">"happy"</span>
          </p>
          <p>
            3   &#125; <span className="text-pink-500">anyatha</span> &#123;
          </p>
          <p>
            4     <span className="text-[#00ca50]">"sad"</span>
          </p>
          <p>5   &#125;;</p>
        </div>
      </div>

      {/* Comparison Card */}
      <div className="mt-6 w-[600px] border border-neutral-800 bg-neutral-950 p-4 rounded-xl text-sm">
        <h3 className="text-md font-semibold mb-2 text-neutral-200">
          Difference from Traditional If/Else
        </h3>
        <ul className="list-disc pl-4 text-neutral-400">
          <li>
            <span className="text-pink-500">yadi</span> is an expression, not a
            statement.
          </li>
          <li>
            It can return a value directly — no need for ternaries or mutables.
          </li>
          <li>
            You must end the full expression with a semicolon if used in a
            binding.
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mt-6 w-[600px] text-sm text-neutral-400">
        <p className="mb-1">Learn more:</p>
        <ul className="list-disc pl-4 underline">
          <li>
            <a
              href="https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions"
              target="_blank"
              rel="noopener"
            >
              Rust’s if expressions (similar behavior)
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Conditional_(programming)"
              target="_blank"
              rel="noopener"
            >
              Wikipedia: Conditional Expressions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
