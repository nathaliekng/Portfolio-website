"use client";
import React from "react";
import HTMLIcon from "../../public/images/skills/html.png";
import experiences from "./../data/experience.json";
import Image from "next/image";
import {motion} from "framer-motion"

const SKILLS_DATA = [
  {
    title: "HTML",
    imageSrc: HTMLIcon,
  },
  {
    title: "CSS",
    imageSrc: HTMLIcon,
  },
  {
    title: "React",
    imageSrc: HTMLIcon,
  },
  {
    title: "SQL",
    imageSrc: HTMLIcon,
  },
];
const ExperienceSection = () => {
  return (
    <section className="pt-10 border-b border-neutral-900 pb-4" id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experience
      </h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{`${experience.startDate} - ${experience.endDate}`}</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full max-w-vl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <ul className="list-disc ">
                  {experience.description.map((exp, index) => (
                    <li key={index} className="ml-8 mb-4 text-neutral-400">{exp}</li>
                  )
                  )}
                </ul>
                {
                  experience.technologies.map((tech, index) =>(
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                  ))
                }
            </motion.div> */}
            <div
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{`${experience.startDate} - ${experience.endDate}`}</p>
            </div>
            <div 

            className="w-full max-w-vl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <ul className="list-disc ">
                  {experience.description.map((exp, index) => (
                    <li key={index} className="ml-8 mb-4 text-neutral-400">{exp}</li>
                  )
                  )}
                </ul>
                {
                  experience.technologies.map((tech, index) =>(
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                  ))
                }
            </div>
          </div>
        ))}
      </div>
      {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            {SKILLS_DATA.map((skill, id) => {
              return (
                <div
                  key={id}
                  className="md:grid md:grid-cols-3 flex flex-col items-center gap-5"
                >
                  <div className="flex flex-col items-center justify-center m-3 gap-2">
                    <div className="bg-gray-500 border rounded-full flex items-center justify-center w-[120px] h-[120px]">
                      <Image
                        src={skill.imageSrc}
                        alt={skill.title}
                        className="w-[75px] h-[75px]"
                      />
                    </div>
                    <p className="text-xl">{skill.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ul className="mt-4 md:mt-0 text-left flex flex-col h-full">
            {experience.map((item, id) => {
              return (
                <li
                  key={id}
                  className="flex flex-row items-center bg-gray-500 bg-gradient-to-r from-gray-800 to-gray-400 rounded-lg p-10"
                >
                  <Image
                    src={item.imageSrc}
                    width={50}
                    height={50}
                    alt={item.company}
                    className="w-[50px] h-[50px]"
                  />
                  <div>
                    <h3 className="text-base lg:text-xl">{`${item.role}, ${item.company}`}</h3>
                    <p className="text-base lg:text-sm">{`${item.startDate} - ${item.endDate}`}</p>
                    <ul className="mt-6 text-base lg:text-lg ml-17 list-disc">
                      {item.experience.map((exp, id) => {
                        return <li key={id}>{exp}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
    </section>
  );
};

export default ExperienceSection;
