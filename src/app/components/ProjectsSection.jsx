"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Thynk Travel - Agência de viagens",
    description:(
    <div
    dangerouslySetInnerHTML={{
      __html: "O projeto realiza a busca dinâmica de voôs, sistema de cadastramento proporcionando uma experiência fluida em diferentes dispositivos. <br/><br>Tecnologias: HTML, Tailwind, JavaScript, Node.js, Express, MySQL, API Google, Github e Amadeus.",
    }}
    />
    ),
    image: "/images/projects/projeto-2.png",
    tag: ["Projetos", "Web"],
    gitUrl: "https://github.com/devgalazo/ThynkTravel",
    previewUrl: "https://thynktravel.vercel.app",
  },
  {
    id: 2,
    title: "Dev Burguer - Hamburgueria",
    description:( 
    <div
      dangerouslySetInnerHTML={{
        __html: "O projeto inclui um cardápio dinâmico, integração com sistema de pedidos e uma interface responsiva.<br/><br>Tecnologias: HTML, CSS e JavaScript.",
      }}
    />
    ),
    image: "/images/projects/devburguer1.png",
    tag: ["Projetos", "Web"],
    gitUrl: "https://github.com/devgalazo/projetocardapio",
    previewUrl: "https://projetocardapio-xcbf.vercel.app",
  },
  {
    id: 3,
    title: "Projeto E-commerce",
    description: "EM BREVE",
    image: "/images/projects/3.png",
    tag: ["Projetos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "EM BREVE",
    image: "/images/projects/4.png",
    tag: ["Projetos", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "EM BREVE",
    image: "/images/projects/5.png",
    tag: ["Projetos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "EM BREVE",
    image: "/images/projects/6.png",
    tag: ["Projetos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Projetos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-9 mb-7 md:mb-8">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Projetos"
          isSelected={tag === "Projetos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        
     
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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
