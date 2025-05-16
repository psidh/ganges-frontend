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
      const res = await fetch("http://localhost:3001/execute", {
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
    <div className="w-full min-h-screen flex items-center justify-center px-6 ">
      <div className="relative max-w-7xl w-full mt-36">
        {/* Background Image */}
        <img
          src="/assets/cyan.png"
          alt="Playground Background"
          className="w-full lg:h-[650px] rounded-xl object-cover opacity-90"
        />

        {/* Foreground Content */}
        <div className="">
          <div className="absolute inset-0 p-8 flex flex-col text-white">
            <h1 className="text-6xl font-semibold mb-2">Playground</h1>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row gap-6 mt-6 w-full"
            >
              {/* Left - Code Editor */}
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg w-full lg:w-1/2 flex flex-col h-[500px]">
                <div className="flex-1 overflow-hidden rounded-lg">
                  <MonacoEditor
                    height="100%"
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
                  className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg disabled:bg-black cursor-pointer hover:bg-black hover:text-white transition duration-500"
                >
                  {loading ? "Running..." : "Run Code"}
                </button>
              </div>

              {/* Right - Output */}
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg w-full lg:w-1/2 h-[500px] overflow-y-auto">
                <pre className="font-semibold whitespace-pre-wrap break-words text-white text-sm h-full">
                  {output || "Output will appear here..."}
                </pre>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
