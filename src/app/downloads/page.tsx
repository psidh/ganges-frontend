"use client";
import Button from "@/components/Button";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { IconType } from "react-icons";

interface DownloadOption {
  os: "macOS" | "Windows" | "Linux";
  icon: IconType;
  description: string;
  buttonText: string;
  instructions: React.ReactNode
}

const downloadOptions: DownloadOption[] = [
  {
    os: "macOS",
    icon: FaApple,
    description:
      "Download and install Ganges for macOS. Includes universal build for Intel and Apple Silicon.",
    buttonText: "Download for Apple",
    instructions: (
      <div className="bg-black/20 backdrop-blur-md p-2 rounded-xl">
        <p className="mt-2 text-sm text-white/80">
          After downloading, open Terminal and run:
        </p>
        <pre className="p-2 rounded text-xs mt-1 font-medium">
          chmod +x ./ganges-max{"\n"}./ganges-mac
        </pre>
      </div>
    ),
  },
  {
    os: "Windows",
    icon: FaWindows,
    description:
      "Download the Windows installer (.exe) for seamless setup and usage.",
    buttonText: "Download for Windows",
    instructions: (
      <div className="bg-black/20 backdrop-blur-md p-2 rounded-xl">
        <p className="mt-2 text-sm text-white/80">
          Run the downloaded <code>.exe</code> file and follow the installer
          prompts.
        </p>
      </div>
    ),
  },
  {
    os: "Linux",
    icon: FaLinux,
    description:
      "Download the Ganges CLI binary or install via package manager.",
    buttonText: "Download for Linux",
    instructions: (
      <div className="bg-black/20 backdrop-blur-md p-2 rounded-xl">
        <p className="mt-2 text-sm text-white/80 font-semibold">
          After downloading, open Terminal and run:
        </p>
        <pre className="p-2 rounded text-xs mt-1 font-medium">
          chmod +x ./ganges-linux{"\n"}./ganges-linux
        </pre>
      </div>
    ),
  },
];

const fileNames: Record<DownloadOption["os"], string> = {
  macOS: "ganges-mac.sh",
  Windows: "ganges-windows.sh",
  Linux: "ganges-linux.sh",
};

export default function Page(): React.ReactNode {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start px-6 py-12">
      <div className="relative max-w-7xl w-full mt-12 md:mt-24">
        <img
          src="/assets/download.png"
          alt="download"
          className="w-full h-[180px] lg:h-[600px] rounded-xl object-cover"
        />

        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white sm:pt-6">
          <div>
            <h1 className="text-6xl font-semibold">Download</h1>
            <p className="mt-6 max-w-xl">
              Download the latest version of Ganges for your operating system.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 mt-12">
            {downloadOptions.map(
              ({ os, icon: Icon, description, buttonText, instructions }) => (
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
                    onClick={() =>
                      window.open(`/scripts/${fileNames[os]}`, "_blank")
                    }
                    className=""
                  />
                  <div>{instructions}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
