"use client";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export function BinarySearch() {
  const [copied, setCopied] = useState(false);
  const code = `rama items = [10, 20, 30, 40, 50];
rama target = 30;
rama left = 0;
rama right = 4;
rama found = asatya;

chakra(left <= right){
  rama mid = (left + right) / 2;

  yadi(items[mid] == target){
    found = satya;
    rama left = right;
  }

  yadi(items[mid] < target){
    rama left = mid + 1;
  } anyatha {
    rama right = mid - 1;
  }
}

vadha(found);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-20">
      <h2 className="docs-subheader" id="binary-search">
        Binary Search
      </h2>

      <p className="mt-4 mb-4">
        Binary Search works on sorted arrays by dividing the range in half on
        each step. Here's how to write it in{" "}
        <span className="ganges">Ganges</span>.
      </p>

      {/* Code Block */}
      <div className="flex flex-col items-start justify-start w-[310px] lg:w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-lg">app/main.ga</p>
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
            1   <span className="text-pink-500">rama</span> items = [10, 20, 30,
            40, 50];
          </p>
          <p>
            2   <span className="text-pink-500">rama</span> target = 30;
          </p>
          <p>
            3   <span className="text-pink-500">rama</span> left = 0;
          </p>
          <p>
            4   <span className="text-pink-500">rama</span> right = 4;
          </p>
          <p>
            5   <span className="text-pink-500">rama</span> found ={" "}
            <span className="text-purple-400">asatya</span>;
          </p>
          <p>
            7   <span className="text-yellow-300">chakra</span>(left &lt;=
            right) {" {"}
          </p>
          <p>
            8     <span className="text-pink-500">rama</span> mid = (left +
            right) / 2;
          </p>
          <p>
            10     <span className="text-yellow-300">yadi</span>(items[mid] ==
            target) {" {"}
          </p>
          <p>
            11       <span className="text-pink-500">rama</span> found ={" "}
            <span className="text-purple-400">satya</span>;
          </p>
          <p>
            12       <span className="text-pink-500">rama</span> left = right;
          </p>
          <p>13     {"}"}</p>
          <p>
            15     <span className="text-yellow-300">yadi</span>(items[mid] &lt;
            target) {" {"}
          </p>
          <p>16       left = mid + 1;</p>
          <p>
            17     {"}"} <span className="text-yellow-300">anyatha</span> {" {"}
          </p>
          <p>18       right = mid - 1;</p>
          <p>19     {"}"} </p>
          <p>20   {"}"}</p>
          <p>
            22   <span className="text-blue-400">vadha</span>(found);
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
        <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
        <p className="text-white">{">>  "}SATYA</p>
      </div>

      {/* Concept Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-[600px]">
        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            Sorted Array
          </h4>
          <p className="text-neutral-400">
            Binary search requires a sorted array. Without it, the
            divide-and-conquer logic breaks.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            Mid Point
          </h4>
          <p className="text-neutral-400">
            <code>mid = (left + right) / 2</code> divides the array into two.
            Search continues in the correct half.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            Conditional Logic
          </h4>
          <p className="text-neutral-400">
            If item is greater, shift left to mid + 1. If smaller, shift right
            to mid - 1. Use <code>viram</code> to exit on match.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Recursion() {
  const [copied, setCopied] = useState(false);
  const code = `rama factorial = kriya(n) {
  yadi(n == 0){
    daan 1;
  }
  daan n * factorial(n - 1);
}

vadha(factorial(5));`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-20">
      <h2 className="docs-subheader" id="recursion">
        Recursion
      </h2>

      <p className="mt-4 mb-4">
        Functions in <span className="ganges">Ganges</span> can call themselves
        recursively. Use this to solve problems like factorials, Fibonacci
        numbers, and tree traversals.
      </p>

      {/* Code Block */}
      <div className="flex flex-col items-start justify-start w-[310px] lg:w-[600px] border border-neutral-800 rounded-xl">
        <div className="flex justify-between items-center gap-4 py-2 px-3 w-full bg-neutral-900">
          <div className="flex items-center justify-start gap-4">
            <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
            <p className="text-neutral-500 text-lg">app/main.ga</p>
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
            1   <span className="text-pink-500">rama</span> factorial ={" "}
            <span className="text-yellow-300">kriya</span> (n)
            {" {"}
          </p>
          <p>
            2     <span className="text-yellow-300">yadi</span>(n == 0) {" {"}
          </p>
          <p>3       daan 1;</p>
          <p>4     {"}"}</p>
          <p>5     daan n * factorial(n - 1);</p>
          <p>6   {"}"}</p>
          <p>
            8   <span className="text-blue-400">vadha</span>(factorial(5));
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
        <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
        <p className="text-white">{">>  "}120</p>
      </div>

      {/* Concept Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-[600px]">
        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            Base Case
          </h4>
          <p className="text-neutral-400">
            Every recursive function needs a base case to prevent infinite
            calls. Here, <code>n == 0</code> returns 1.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            Recursive Step
          </h4>
          <p className="text-neutral-400">
            The function calls itself with <code>n - 1</code>, reducing the
            problem step by step.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm">
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            Return Keyword
          </h4>
          <p className="text-neutral-400">
            Use <code>daan</code> to return values from functions. This is how
            recursion bubbles back results.
          </p>
        </div>
      </div>
    </div>
  );
}

function TerminalOutput({ lines }: { lines: string[] }) {
  return (
    <div className="mt-6 w-[600px] bg-black text-[#00ca50] font-mono text-sm p-4 rounded-xl border border-neutral-800">
      <p className="font-semibold mb-4 text-lg">$ Terminal (zsh)</p>
      {lines.map((line, idx) => (
        <p key={idx} className="text-white">
          {">>  "} {line}
        </p>
      ))}
    </div>
  );
}

function MethodGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-[600px]">
      {items.map(({ title, desc }, i) => (
        <div
          key={i}
          className="border border-neutral-800 rounded-xl bg-neutral-950 p-4 text-sm"
        >
          <h4 className="text-md font-semibold mb-2 text-neutral-200">
            {title}
          </h4>
          <p className="text-neutral-400">{desc}</p>
        </div>
      ))}
    </div>
  );
}
