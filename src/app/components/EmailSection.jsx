"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    });

    if (response.ok) {
      setEmailSubmitted(true);
    } else {
      alert("Erro ao enviar email. Tente novamente.");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-lg md:text-xl font-bold text-white my-2">
          Vamos conversar!
        </h5>
        <p className="text-sm md:text-lg text-[#ADB7BE] mb-4 max-w-md">
          Estou sempre em busca de novas oportunidades e adoraria ouvir de você.
          Se tiver alguma dúvida ou só quiser trocar uma ideia, minha caixa de
          entrada está aberta.
        </p>
  
  
  <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/devgalazo">
    <Image src="/github-icon.svg" alt="Github Icon" width={32} height={32} />
  </Link>
  <Link href="https://www.linkedin.com/in/matheus-galazo-75311323a/">
    <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={32} height={32} />
  </Link>
</div>


      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado com sucesso!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu e-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="seu@email.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Assunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Vamos conversar sobre..."
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
