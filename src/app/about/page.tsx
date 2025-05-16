"use client";
import Button from "@/components/Button";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
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
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-12 bg-black">
      <div className="relative max-w-7xl w-full pt-36">
        {/* Background Image */}
        <img
          src="/assets/orange.png"
          alt="Background"
          className="w-full h-[1000px] rounded-xl object-cover brightness-80 rotate-0"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-12 flex flex-col items-start justify-center text-white max-w-7xl mx-auto space-y-12 font-medium">
          <section>
            <h1 className="text-5xl font-bold mb-8">About </h1>
            <p className="mb-6 text-lg leading-relaxed">
              Ganges is a dynamically typed, interpreted programming language
              crafted with love, blending the ancient beauty of{" "}
              <span className="font-semibold text-orange-300">Sanskrit</span>{" "}
              and the clarity of English in its syntax.
            </p>
            <div className="flex justify-between items-center gap-4 my-4 bg-orange-900/60 backdrop-blur-xl p-1 rounded-lg">
              <hr className="w-[2px] h-[50px] border border-orange-400 ml-1" />
              <div>
                <p className="text-lg leading-relaxed font-semibold italic text-orange-200">
                  I created Ganges because I wanted to breathe life into
                  Sanskrit, to write more in this timeless, profound language.
                  The culture of Bharat has always inspired me deeply, and
                  through this project, I aim to honor its legacy.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              Programming and compiler design fascinated me from the start.
              Driven by sheer curiosity and passion, I built Ganges to combine
              the art of language with the science of computation.
            </p>
          </section>

          {/* Feature Cards Section */}
          <section className="flex flex-col lg:flex-row gap-8">
            {featureCards.map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="backdrop-blur-md bg-transparent border border-orange-300/50 p-6 rounded-xl flex flex-col items-start gap-4 w-full lg:w-1/3"
              >
                <Icon className="text-4xl text-orange-400" />
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-white font-semibold text-sm">
                  {description}
                </p>
              </div>
            ))}
          </section>

          <section>
            <p className="mb-6 text-lg leading-relaxed">
              This project is a reflection of my ambition to merge culture with
              modern technology, to create something unique that celebrates the
              past while pushing forward into the future.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Whether you're a programmer, a language enthusiast, or simply
              curious, I hope Ganges inspires you to explore the infinite
              possibilities at the intersection of code and culture.
            </p>
            <p className="text-xl text-right text-gray-300 w-full mt-12">
              ~ Sidharth | Developer
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
