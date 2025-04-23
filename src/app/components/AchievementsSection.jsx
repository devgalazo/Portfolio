"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa"; // ícones para as tecnologias
import { RiTailwindCssFill } from "react-icons/ri";

const technologiesList = [
  {
    tech: "HTML",
    description: "Criação da estrutura e conteúdo de páginas web.",
    icon: <FaHtml5 className="text-4xl text-orange-500" />, // ícone do HTML
  },
  {
    tech: "CSS",
    description: "Estilização e design responsivo de interfaces web.",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />, // ícone do CSS
  },
  {
    tech: "JavaScript",
    description: "Desenvolvimento de funcionalidades interativas e dinâmicas.",
    icon: <FaJs className="text-4xl text-yellow-500" />, // ícone do JavaScript
  },
  {
    tech: "Tailwind",
    description: "Criação de interfaces modernas, personalizadas e responsivas.",
    icon: <RiTailwindCssFill className="text-4xl text-cyan-500" />, // ícone do React
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between text-center">
        {technologiesList.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              {/* Ícone da tecnologia */}
              <div className="mb-4">{tech.icon}</div>

              {/* Nome da tecnologia */}
              <h2 className="text-white text-2xl font-bold">{tech.tech}</h2>

              {/* Descrição da tecnologia */}
              <p className="text-[#ADB7BE] text-base">{tech.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
