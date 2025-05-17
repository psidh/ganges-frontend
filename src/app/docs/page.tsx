export default function DocsPage() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-start ">
        <div className="relative w-full">
          <img
            src="/assets/docs.png"
            alt="download"
            className="w-full h-[150px] rounded-xl object-cover"
          />

          <div className="absolute p-4 inset-0 flex flex-col justify-between text-white sm:pt-6">
            <div>
              <h1 className="text-6xl font-semibold">Docs</h1>
              <p className="mt-6 max-w-xl">
                Welcome to the official documentation for Ganges
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 mt-6">
        <h1 className="docs-header">Getting Started</h1>
        <p className="mb-1">
          Before you start using{" "}
          <a href="/playground" className="text-blue-400 font-medium">
            Ganges
          </a>{" "}
          programming language, you need to install it for your own operating
          system{" "}
        </p>
        <p>
          Head over to the{" "}
          <a href="/downloads" className="link">
            Downloads
          </a>{" "}
          section to download latest version of the language.
        </p>

        <h2
          id="installation"
          className="my-8 underline underline-offset-8 font-medium decoration-neutral-700/50 text-2xl"
        >
          Next Steps
        </h2>
        <div>
          As you have installed Ganges, Let us explore the language now.{" "}
          <a href="/basics" className="link">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
