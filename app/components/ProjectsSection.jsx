"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Duos",
    description: "Networking application",
    image: "/images/projects/DuosPreview.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: " ",
  },
  {
    id: 2,
    title: "Career Craft ChatAI",
    description: "Chatbox AI",
    image: "/images/projects/CareerCraftAIPreview.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: " ",
  },
  {
    id: 3,
    title: "FA-LO AI Planner",
    description:
      "Layover planning web app for flight attendants and pilots using AI",
    image: "/images/projects/DuosPreview.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: " ",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
