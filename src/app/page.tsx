"use client";
import { FaBook, FaPlay } from "react-icons/fa";
import { FaComputerMouse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import UnicornBackground from "@/components/Background";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      {/* Hero Section with Animated Background */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Animation */}
        <UnicornBackground />

        {/* Foreground Content */}
        <div
          className="relative z-20 flex flex-col justify-center items-start h-full 
                        px-6 sm:px-12 md:px-20 lg:px-32 gap-6 md:gap-10 max-w-full"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-black drop-shadow-lg leading-tight max-w-full">
            Ganges
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-900 font-normal max-w-full sm:max-w-xl md:max-w-2xl">
            A programming language —{" "}
            <span className="md:text-black text-white">inspired </span>by
            Sanskrit, built for clarity, simplicity, and fun.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <Button
              name="Docs"
              background="white"
              text="black"
              icon={FaBook}
              onClick={() => router.push("/docs")}
              className="flex-shrink-0"
            />
            <Button
              name="GitHub"
              background="black"
              text="white"
              icon={FaGithub}
              onClick={() => router.push("https://github.com/psidh/Ganges")}
              className="flex-shrink-0"
            />
          </div>
        </div>
      </div>

     
    </>
  );
}
