import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="techstack" className="border-b border-neutral-900 pb-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Technologies
      </h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <FaJava className="text-7xl text-cyan-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
