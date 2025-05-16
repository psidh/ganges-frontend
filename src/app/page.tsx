import { FaPlay } from "react-icons/fa";
import { FaComputerMouse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/assets/bg-header.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
        className="flex flex-col justify-center items-start px-32"
      >
        <h1 className="-ml-2 text-9xl font-medium text-black drop-shadow-lg">
          Ganges
        </h1>
        <p className="mt-16 font-normal text-xl text-neutral-600 max-w-2xl">
          A programming language — inspired by Sanskrit, built for clarity,
          simplicity, and fun.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            rel="noopener"
            href="/demo"
            className="px-8 cursor-pointer py-4 border border-neutral-300 bg-white text-black font-semibold rounded-2xl hover:shadow-xl shadow-xl transition-all duration-300 gap-2 flex items-center"
          >
            <span>
              <FaPlay />
            </span>{" "}
            Watch Demo
          </a>
          <a
            rel="noopener"
            href="https://github.com/psidh/Ganges"
            target="_blank"
            className="px-8 py-4 border border-neutral-700 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 group bg-black text-white gap-2 flex items-center"
          >
            GitHub
            <span className="">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>

      <div
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/gradient1.svg")' }}
      >
          <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
        <div className="relative w-full max-w-7xl mx-auto px-12 flex items-center justify-between">
          {/* Left content */}
          <div className="flex flex-col items-start justify-center gap-6 text-white max-w-xl">
            <h2 className="text-7xl font-bold mb-6">Go to PlayGround</h2>
            <div className="flex gap-6">
              <a
                rel="noopener"
                href="/playground"
                className="px-8 cursor-pointer py-4 border border-neutral-300 bg-white text-black font-semibold rounded-2xl hover:shadow-xl shadow-xl transition-all duration-300 gap-2 flex items-center"
              >
                <span>
                  <FaComputerMouse />
                </span>{" "}
                Playground
              </a>
              <a
                rel="noopener"
                href="https://github.com/psidh/Ganges"
                target="_blank"
                className="px-8 py-4 border border-neutral-700 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 group bg-black text-white gap-2 flex items-center"
              >
                GitHub
                <span className="">
                  <FaGithub />
                </span>
              </a>
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
