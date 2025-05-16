"use client";
import { FaPeopleRobbery } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";

const featureCards = [
  {
    title: "Celebrate Sanskrit",
    icon: LuPartyPopper,
    description:
      "Ganges brings the beauty of Sanskrit syntax alive in a modern programming language.",
  },
  {
    title: "Designed for Curiosity",
    icon: TbBulb,
    description:
      "Built from passion and fascination for compiler design and language creation.",
  },
  {
    title: "Cultural Fusion",
    icon: FaPeopleRobbery,
    description:
      "Merging the legacy of Bharat’s culture with cutting-edge programming concepts.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-12 py-12">
      {/* Background Image */}
      <div className="relative max-w-7xl w-full mt-16 md:mt-24 p-8">
        <img
          src="/assets/orange.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75 rounded-xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl w-full flex flex-col space-y-12 md:space-y-16 text-white font-medium">
          <section>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About
            </h1>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed w-full">
              Ganges is a dynamically typed, interpreted programming language
              crafted with love, blending the ancient beauty of{" "}
              <span className="font-semibold text-orange-300">Sanskrit</span>{" "}
              and the clarity of English in its syntax.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 my-4 bg-orange-900/60 backdrop-blur-xl p-4 rounded-lg w-full">
              <hr className="w-full sm:w-1 sm:h-[50px] border border-orange-400" />
              <p className="text-base sm:text-lg leading-relaxed font-semibold italic text-orange-200">
                I created Ganges because I wanted to breathe life into Sanskrit,
                to write more in this timeless, profound language. The culture
                of Bharat has always inspired me deeply, and through this
                project, I aim to honor its legacy.
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed w-full">
              Programming and compiler design fascinated me from the start.
              Driven by sheer curiosity and passion, I built Ganges to combine
              the art of language with the science of computation.
            </p>
          </section>

          {/* Feature Cards */}
          <section className="flex flex-col lg:flex-row gap-6 w-full w-full">
            {featureCards.map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="backdrop-blur-md bg-transparent border border-orange-300/50 p-6 rounded-xl flex flex-col items-start gap-4 w-full lg:w-1/3"
              >
                <Icon className="text-4xl text-orange-400" />
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-white font-semibold text-base">
                  {description}
                </p>
              </div>
            ))}
          </section>

          <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
            This project is a reflection of my ambition to merge culture with
            modern technology, to create something unique that celebrates the
            past while pushing forward into the future.
          </p>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
            Whether you're a programmer, a language enthusiast, or simply
            curious, I hope Ganges inspires you to explore the infinite
            possibilities at the intersection of code and culture.
          </p>
          <p className="text-base sm:text-lg text-right text-gray-300 mt-6">
            ~ Sidharth | Developer
          </p>
        </div>
      </div>
    </div>
  );
}
