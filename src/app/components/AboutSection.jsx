// AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section p-8 bg-black-100 sm:border-[#33353F] sm:border rounded-md">
      <h2 className="text-3xl font-bold text-left text-white-800 mb-6">Sobre Mim</h2>

      {/* Layout flex para dividir as colunas */}
      <div className="flex justify-between gap-8">
         {/* Seção de Experiência */}
         <div className="w-1/2">
          <h3 className="text-2xl font-semibold text-white-800 mb-4">Experiência</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
          Sou formado em Banco de Dados pela <strong className="text-white">Faculdade de Tecnologia de Bauru (FATEC)</strong>, com curso técnico em <strong className="text-white">Informática pela ETEC. </strong> 
           Minha paixão por tecnologia e o constante desejo de aprimorar minhas habilidades me motivam a desenvolver soluções inovadoras e de alta qualidade, sempre com foco em entregar resultados excepcionais
          </p>
        </div>
        
        
        {/* Seção de Habilidades */}
        <div className="w-1/2">
          <h3 className="text-2xl text-white-500 font-bold mb-4">Habilidades</h3>
          <p className="text-lg text-gray-300 font-bold leading-relaxed mb-4">
            Desenvolvo com <strong className="text-white">HTML, CSS, JavaScript, Tailwind, Node.js</strong>.
            Além disso, domino ferramentas como <strong className="text-white">Photoshop, Illustrator e Figma</strong> para design e prototipagem.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default AboutSection;
