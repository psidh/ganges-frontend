"use client";
import { FaBook, FaMouse } from "react-icons/fa";
import { FaComputerMouse, FaGithub } from "react-icons/fa6";
import { FiCheck, FiCopy } from "react-icons/fi";
import UnicornBackground from "@/components/Background";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Geist_Mono } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function Page() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const code = `rama factorial = kriya(n) {
    yadi(n == 0){
      daan 1;
    }
    daan n * factorial(n - 1);
  }

  vadha(factorial(5));`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <UnicornBackground />

        <div
          className="relative z-20 flex flex-col h-screen lg:flex-row items-center 
          justify-between px-6 sm:px-12 md:px-20 lg:px-32 gap-12 lg:gap-0 pt-24 lg:pt-0"
        >
          {/* Left Text Content */}
          <div className="mt-24 md:mt-0 flex flex-col justify-center items-start gap-6 md:gap-10 max-w-full lg:max-w-[55%] order-1 lg:order-none">
            <h1 className="text-center md:text-left w-full text-7xl md:text-8xl lg:text-9xl font-medium text-white md:text-black drop-shadow-lg leading-tight">
              Ganges
            </h1>
            <p className="text-center md:text-left w-full text-base sm:text-lg md:text-xl text-white md:text-neutral-900 font-normal max-w-full sm:max-w-xl md:max-w-2xl">
              A programming language - inspired by Sanskrit, built for clarity,
              simplicity, and fun.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <Button
                name="PlayGround"
                background="white"
                text="black"
                icon={FaMouse}
                onClick={() => router.push("/playground")}
                className="flex-shrink-0 cursor-pointer"
              />
              <Button
                name="Docs"
                background="white"
                text="blue"
                icon={FaBook}
                onClick={() => router.push("/docs")}
                className="flex-shrink-0 cursor-pointer"
              />
              <Button
                name="GitHub"
                background="black"
                text="white"
                icon={FaGithub}
                onClick={() => router.push("https://github.com/psidh/Ganges")}
                className="flex-shrink-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Code Block */}
          <div
            data-aos="fade-left"
            className="relative order-2 bg-black/80 backdrop-blur-3xl lg:order-none w-[360px] lg:w-[600px] border border-neutral-800 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center gap-4 py-2 px-3 w-full rounded-t-xl bg-neutral-900">
              <div className="flex items-center gap-4">
                <img src="/ganges-logo.svg" alt="" className="w-5 h-5" />
                <p className="text-neutral-500 text-lg">app/main.ga</p>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 rounded-md transition-colors hover:bg-neutral-800"
              >
                {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
              </button>
            </div>

            <div
              className={
                "flex flex-col py-4 gap-1 ml-4 w-full items-start justify-start " +
                geistMono.className
              }
            >
              <p>
                1   <span className="text-pink-500">rama</span> factorial ={" "}
                <span className="text-yellow-300">kriya</span>(n) {" {"}
              </p>
              <p>
                2     <span className="text-yellow-300">yadi</span>(n == 0){" "}
                {" {"}
              </p>
              <p>3       daan 1;</p>
              <p>4     {"}"}</p>
              <p>5     daan n * factorial(n - 1);</p>
              <p>6   {"}"}</p>
              <p>
                8   <span className="text-blue-400">vadha</span>(factorial(5));
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
