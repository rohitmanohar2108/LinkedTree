import React from "react";
import { Code, Sparkles, ChevronDown } from "lucide-react";
import Lottie from "react-lottie";
import animationData from "../Animation/animation.json";
import { motion } from "framer-motion";

export function ProfileSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scrollToCards = () => {
    document.getElementById("cards")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Profile Image positioned above the pentagon */}
      <div className="relative mb-4 z-10">
        <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-violet-500 shadow-lg">
          <img
            src="./rohit.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Profile Content */}
      <div className="text-center z-20 mt-8">
        <div className="inline-flex items-center space-x-2 mb-4">
          <Code className="w-5 h-5 text-violet-400" />
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Rohit Manohar
          </h1>
          <Sparkles className="w-5 h-5 text-violet-400" />
        </div>

        <div className="mb-6 space-y-2">
          <p className="text-lg font-medium text-violet-300">
            Web Developer & Web Designer
          </p>
          <p className="text-sm text-violet-400/80">
            Building the future with code and creativity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {["Frontend", "Web Design", "DSA"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full glass-effect text-sm font-medium text-violet-300
                hover:bg-white/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <button
            onClick={scrollToCards}
            className="absolute bottom left-1/2 -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors touch-highlight z-20 mt-4"
            aria-label="Scroll to skills"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </div>
        <motion.div className="w-full flex justify-center mt-8">
          <Lottie options={defaultOptions} height={400} width={400} />
        </motion.div>
      </div>
    </div>
  );
}
