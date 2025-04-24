"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Sobre",
    path: "#about",
  },
  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Contatos",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
  <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
    {/* Logo no canto esquerdo */}
    <Link href={"/"}>
      <img 
        src="/images/logo.png"
        alt="Logo"
        width={60}
        height={80}
      />
    </Link>

    {/* Menu móvel */}
    <div className="mobile-menu block md:hidden">
      {!navbarOpen ? (
        <button
          onClick={() => setNavbarOpen(true)}
          className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setNavbarOpen(false)}
          className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>

    {/* Menu centralizado */}
    <div className="menu hidden md:flex flex-1 items-center justify-center" id="navbar">
      <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              className={`text-base md:text-lg lg:text-2xl font-medium text-white hover:text-primary transition-all duration-300 ${link.title === "Sobre" ? "text-4xl lg:text-5xl" : ""}`}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
  {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
</nav>


  );
};

export default Navbar;
