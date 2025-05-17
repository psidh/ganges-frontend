"use client";
import Variables from "./variable";
import DataTypes from "./dataTypes";
import ArithmeticOps from "./arithmetic";
import Print from "./print";
import Conditionals from "./conditionals";

export default function Page() {
  return (
    <div className="text-white min-h-screen">
      <h1 className="docs-header text-4xl mb-4">Basics</h1>

      <p className="mb-4">
        Let&apos;s start with the basics. <span className="ganges">Ganges</span>{" "}
        is a dynamically typed, interpreted language built using the book{" "}
        <a
          rel="noopener"
          href="https://interpreterbook.com/"
          target="_blank"
          className="link italic underline text-blue-400"
        >
          Writing an Interpreter in Go
        </a>
        . The book is a hands-on guide on how to build an interpreter from
        scratch.
      </p>

      <h2 id="nomenclature" className="docs-subheader">
        Nomenclature
      </h2>

      <p className="mb-2">
        <span className="ganges">Ganges</span> uses Sanskrit-inspired keywords
        that map closely to their equivalents in modern programming languages
        like <span className="text-amber-500 font-medium">JavaScript</span>.
        This not only makes the language unique, but also reinforces semantic
        clarity with cultural roots.
      </p>
      <p className="mb-6">
        Below is a reference table that shows common{" "}
        <span className="text-amber-500 font-medium">JavaScript</span> keywords
        alongside their <span className="ganges">Ganges</span> counterparts and
        a brief description of their use.
      </p>

      <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-neutral-800 text-white">
            <th className="text-amber-500 border border-neutral-700 px-4 py-3 text-lg">
              JavaScript
            </th>
            <th className="text-blue-500 border border-neutral-700 px-4 py-3 text-lg">
              Ganges
            </th>
            <th className="text-white">Description</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-900">
          <tr>
            <td>let</td>
            <td>rama</td>
            <td>used to declare variable</td>
          </tr>
          <tr>
            <td>if</td>
            <td>yadi</td>
            <td>if block</td>
          </tr>
          <tr>
            <td>else</td>
            <td>anyatha</td>
            <td>else block</td>
          </tr>
          <tr>
            <td>print</td>
            <td>vadha</td>
            <td>to write to console</td>
          </tr>
          <tr>
            <td>function</td>
            <td>kriya</td>
            <td>to declare a function</td>
          </tr>
          <tr>
            <td>while</td>
            <td>chakra</td>
            <td>while loop initiation</td>
          </tr>
          <tr>
            <td>true</td>
            <td>satya</td>
            <td>
              the boolean value <code>true</code>
            </td>
          </tr>
          <tr>
            <td>false</td>
            <td>asatya</td>
            <td>
              the boolean value <code>false</code>
            </td>
          </tr>
          <tr>
            <td>return</td>
            <td>daan</td>
            <td>return value from a function</td>
          </tr>
        </tbody>
      </table>
      <Variables />
      <DataTypes />
      <ArithmeticOps />
      <Print />
      <Conditionals />
    </div>
  );
}
