"use client";
import Button from "@/components/Button";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";

const downloadOptions = [
  {
    os: "macOS",
    icon: FaApple,
    description:
      "Download and install Ganges for macOS. Includes universal build for Intel and Apple Silicon.",
    buttonText: "Download for Apple",
  },
  {
    os: "Windows",
    icon: FaWindows,
    description:
      "Download the Windows installer (.exe) for seamless setup and usage.",
    buttonText: "Download for Windows",
  },
  {
    os: "Linux",
    icon: FaLinux,
    description:
      "Download the Ganges CLI binary or install via package manager.",
    buttonText: "Download for Linux",
  },
];

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-6 py-12">
      <div className="relative max-w-7xl w-full">
        <img
          src="/assets/download.png"
          alt="download"
          className="w-full h-[800px] lg:h-[500px] rounded-xl object-cover"
        />

        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white pt-48 sm:pt-6">
          <div>
            <h1 className="text-6xl font-semibold">Download</h1>
            <p className="mt-6 max-w-xl">
              Download the latest version of Ganges for your operating system.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col lg:flex-row gap-6 mt-12">
            {downloadOptions.map(
              ({ os, icon: Icon, description, buttonText }) => (
                <div
                  key={os}
                  className="backdrop-blur-md bg-white/10 p-6 rounded-xl lg:w-1/3 flex flex-col items-start gap-4 w-full"
                >
                  <Icon className="text-3xl" />
                  <h2 className="text-xl font-bold">{os}</h2>
                  <p className="text-sm text-white font-medium">
                    {description}
                  </p>
                  <Button
                    background="white"
                    name={buttonText}
                    icon={Icon}
                    text={buttonText}
                    onClick={() => {}}
                    className=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
