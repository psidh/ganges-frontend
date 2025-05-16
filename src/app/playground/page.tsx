"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function Home() {
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white px-4">
      <h1 className="text-4xl font-semibold my-16">Ganges Code PlayGround</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-neutral-800 p-6 rounded-lg shadow-lg"
      >
        <MonacoEditor
          height="400px"
          defaultLanguage="rust" // change to your Ganges syntax if you want or keep js for now
          theme="vs-dark" // you can switch to "dracula" or other if you add custom theme
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
        <div className="mt-4 flex justify-between items-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-white text-black font-semibold rounded-lg disabled:bg-black"
          >
            {loading ? "Running..." : "Run Code"}
          </button>
        </div>
      </form>
      <pre
        className="mt-6 w-full max-w-5xl p-6 bg-neutral-800 text-white rounded-lg shadow-lg whitespace-pre-wrap break-words"
        style={{ minHeight: "150px" }}
      >
        {output}
      </pre>
    </main>
  );
}
