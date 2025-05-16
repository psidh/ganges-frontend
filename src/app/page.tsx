"use client";
import { FaPlay } from "react-icons/fa";
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
      <div className="relative  h-screen overflow-hidden">
        {/* Background Animation */}
        <UnicornBackground />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full px-32 gap-10">
          <h1 className="text-9xl font-medium text-black drop-shadow-lg">
            Ganges
          </h1>
          <p className="text-xl text-neutral-600 font-medium max-w-2xl">
            A programming language — inspired by Sanskrit, built for clarity,
            simplicity, and fun.
          </p>

          <div className="flex gap-6">
            <Button
              name="Watch Demo"
              background="white"
              text="black"
              icon={FaPlay}
              onClick={function () {
                router.push("/docs");
              }}
              className=""
            />
            <Button
              name="GitHub"
              background="black"
              text="white"
              icon={FaGithub}
              onClick={function () {
                router.push("https://github.com/psidh/Ganges");
              }}
              className=""
            />
          </div>
        </div>
      </div>

      {/* Playground Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Rotated background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/line.jpeg")',
            transform: "rotate(90deg)",
            transformOrigin: "center",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-20 pointer-events-none z-10" />

        {/* Foreground content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-12 flex items-center justify-between">
          {/* Left content */}
          <div className="flex flex-col items-start justify-center gap-6 text-white max-w-xl">
            <h2 className="text-7xl font-bold mb-6">Go to PlayGround</h2>
            <div className="flex gap-6">
              <Button
                background="white"
                name="Playground"
                icon={FaComputerMouse}
                text="Playground"
                key={"Playground"}
                onClick={function () {
                  router.push("/playground");
                }}
                className=""
              />
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <img
              src="/assets/code1.png"
              alt="Illustration"
              className="w-[500px] h-auto object-cover bg-[#282A35] p-4 rounded-2xl saturate-0 hover:saturate-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}
