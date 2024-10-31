"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Duos",
    description: "Networking mobile application",
    image: "/images/projects/DuosPreview.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/danielPeng-17/duos",
    previewUrl: "https://pollen-reason-fb3.notion.site/Duos-720722f570b642d7a09f4df164571d82",
  },
  {
    id: 2,
    title: "Career Craft ChatAI",
    description: "Chatbox AI submission for 2024 Microsoft Hackathon",
    image: "/images/projects/CareerCraftAIPreview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nathaliekng/Microsoft-Hackathon-2024-FrontEnd",
    previewUrl: "https://pollen-reason-fb3.notion.site/CareerCraftAI-Stage-1-d4ba5eb1f91447b8950396bdaeed4d2d",
  },
  {
    id: 3,
    title: "FA-LO AI Planner",
    description:
      "Layover planning web app for flight attendants and pilots using AI",
    image: "/images/projects/FALOPreview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nathaliekng/falo-ai",
    previewUrl: "https://pollen-reason-fb3.notion.site/FA-LO-AI-19c52894774541c58891f52212c32f44",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="pt-10 border-b border-neutral-900 pb-10">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.2, delay: index*0.4}}
            
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
