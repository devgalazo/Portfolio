import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
          <Image 
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
        <p className="text-slate-600">Todos direitos reservados Matheus 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;
