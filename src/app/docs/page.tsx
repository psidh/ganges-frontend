"use client";

export default function DocsPage() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12 pt-36">
        {/* Title */}
        <section>
          <h1 className="text-5xl font-bold text-neutral-400">
            📜 Ganges Documentation
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Ganges is a dynamically typed, interpreted programming language that
            blends English and Sanskrit to provide an expressive and culturally
            rooted syntax. Built out of love for Sanskrit, Bharat, and the
            beauty of programming languages.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-300">
            ✨ Features
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-100">
            <li>Dynamic typing with simple evaluation model</li>
            <li>Sanskrit + English keywords</li>
            <li>Readable syntax for new learners and enthusiasts</li>
            <li>Custom REPL and CLI experience</li>
            <li>Supports variables, arithmetic, control flow, and functions</li>
          </ul>
        </section>

        {/* Syntax */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-300">🔤 Syntax</h2>
          <pre className="bg-neutral-900/30 text-neutral-100 p-4 rounded-lg overflow-x-auto">
            {`KRIYA main() {
  LIKH("Namaste, Sansar!");
}`}
          </pre>
        </section>

        {/* Keywords */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-300">
            🗝️ Keywords
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {[
              { keyword: "SATYA", desc: "true" },
              { keyword: "ASATYA", desc: "false" },
              { keyword: "YADI", desc: "if" },
              { keyword: "ANYATHA", desc: "else" },
              { keyword: "KRIYA", desc: "function" },
              { keyword: "NIYAM", desc: "let" },
              { keyword: "WAAPAS", desc: "return" },
              { keyword: "LIKH", desc: "print" },
              { keyword: "CHALA", desc: "while/loop" },
            ].map(({ keyword, desc }) => (
              <div
                key={keyword}
                className="bg-neutral-800/30 p-3 rounded-lg text-neutral-200"
              >
                <span className="font-bold">{keyword}</span>: {desc}
              </div>
            ))}
          </div>
        </section>

        {/* Data Types */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-300">
            📦 Data Types
          </h2>
          <ul className="list-disc list-inside mt-4 text-neutral-100 space-y-1">
            <li>
              Integer (e.g., <code>5</code>)
            </li>
            <li>
              Boolean (<code>SATYA</code>, <code>ASATYA</code>)
            </li>
            <li>
              String (e.g., <code>"Namaste"</code>)
            </li>
            <li>
              Array (e.g., <code>[1, 2, 3]</code>)
            </li>
            <li>HashMap / Object (coming soon)</li>
          </ul>
        </section>

        {/* Abstract Data Types */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-300">
            🧱 Abstract Data Types
          </h2>
          <p className="mt-4 text-neutral-100">
            Ganges supports Arrays and custom objects internally using map-like
            structures. Support for Set and HashMap types is being extended with
            future builds.
          </p>
        </section>

        {/* Code Snippets */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-300">
            💡 Code Examples
          </h2>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl text-neutral-200 mb-2">1. Hello World</h3>
              <pre className="bg-neutral-900/30 text-neutral-100 p-4 rounded-lg overflow-x-auto">
                {`KRIYA main() {
  LIKH("Namaste, Sansar!");
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl text-neutral-200 mb-2">2. If-Else</h3>
              <pre className="bg-neutral-900/30 text-neutral-100 p-4 rounded-lg overflow-x-auto">
                {`NIYAM x = 10;

YADI (x > 5) {
  LIKH("Bada hai");
} ANYATHA {
  LIKH("Chhota hai");
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl text-neutral-200 mb-2">
                3. Function + Return
              </h3>
              <pre className="bg-neutral-900/30 text-neutral-100 p-4 rounded-lg overflow-x-auto">
                {`KRIYA jod(a, b) {
  WAAPAS a + b;
}

LIKH(jod(5, 7));`}
              </pre>
            </div>
          </div>
        </section>

        {/* Final Quote */}
        <section>
          <div className="flex justify-between items-center gap-4 my-8 bg-neutral-900/60 backdrop-blur-xl p-6 rounded-lg">
            <div className="text-neutral-200 italic text-lg font-semibold">
              “I created Ganges because I wanted to breathe life into Sanskrit —
              to write more in this timeless, profound language. The culture of
              Bharat has always inspired me deeply, and through this project, I
              aim to honor its legacy with curiosity and code.”
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
