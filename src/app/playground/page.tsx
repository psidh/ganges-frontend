"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function PlaygroundPage() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("https://ganges-28hc.onrender.com/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        setOutput("Error: " + res.statusText);
      } else {
        const data = await res.json();
        setOutput(data.output);
      }
    } catch (err: any) {
      setOutput("Network error: " + err?.message);
    }

    setLoading(false);
  }

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="relative max-w-7xl w-full mt-24  md:mt-36">
        {/* Background Image */}
        <img
          src="/assets/cyan.png"
          alt="Playground Background"
          className="absolute inset-0 w-full h-full rounded-xl object-cover object-center opacity-90 pointer-events-none"
          aria-hidden="true"
        />

        {/* Foreground Content */}
        <div className="relative z-10 p-4 sm:p-8 flex flex-col h-auto min-h-[600px] md:min-h-[650px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-6 text-white">
            Playground
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-6 w-full flex-grow"
          >
            {/* Left - Code Editor */}
            <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg flex flex-col w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              <div className="flex-1 overflow-hidden rounded-lg">
                <MonacoEditor
                  height="400px"
                  defaultLanguage="rust"
                  theme="vs-dark"
                  value={code}
                  onChange={(value: any) => setCode(value)}
                  options={{
                    fontSize: 16,
                    minimap: { enabled: false },
                    wordWrap: "on",
                    automaticLayout: true,
                    tabSize: 2,
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg disabled:bg-gray-400 cursor-pointer hover:bg-black hover:text-white transition duration-300"
              >
                {loading ? "Running..." : "Run Code"}
              </button>
            </div>

            {/* Right - Output */}
            <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] overflow-y-auto">
              <pre className="font-semibold whitespace-pre-wrap break-words text-white text-sm h-full">
                {output || "Output will appear here..."}
              </pre>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
