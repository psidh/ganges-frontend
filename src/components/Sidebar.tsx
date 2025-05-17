import React from "react";

export default function Sidebar() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-4 md:border-r-[2px] md:w-full md:border-r-neutral-700 md:h-auto h-56 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <div className="flex flex-col gap-3">
        <p className="font-medium text-lg">Getting Started</p>
        <a href="/docs/#installation" className="sidebar-p">Installation</a>
      </div>
      <div className="flex flex-col  gap-3">
        <p className="font-medium text-lg">Basics</p>
        <a href="/docs/basics/#nomenclature" className="sidebar-p">Nomenclature</a>
        <a href="/docs/basics/#variables" className="sidebar-p">Variables</a>
        <a href="/docs/basics/#data-types" className="sidebar-p">Data Types</a>
        <a href="/docs/basics/#arithmetic" className="sidebar-p">Arithmetic</a>
        <a href="/docs/basics/#printing" className="sidebar-p">Print</a>
        <a href="/docs/basics/#conditionals" className="sidebar-p">Conditionals</a>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-medium text-lg">Advanced</p>
        <a href="/docs/advanced/#loops" className="sidebar-p">Loops</a>
        <a href="/docs/advanced/#functions" className="sidebar-p">Functions</a>
        <a href="/docs/advanced/#arrays" className="sidebar-p">Arrays</a>
        <a href="/docs/advanced/#hashmaps" className="sidebar-p">HashMaps</a>
        <a href="/docs/advanced/#hashsets" className="sidebar-p">HashSets</a>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-medium text-lg">Fun</p>
        <a href="/docs/fun" className="sidebar-p">Algorithms</a>
      </div>
    </div>
    </div>
  );
}
