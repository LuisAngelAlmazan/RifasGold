"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollToHash from "../hooks/ScrollToHash";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollHash, setScrollHash] = useState<string>("");

  const links = [
    { href: "/", label: "Nosotros" },
    { href: "/comprar-boletos", label: "Comprar Boletos" },
    { href: "/#preguntas-frecuentes", label: "Preguntas Frecuentes" },
    { href: "/verificador", label: "Verificador" },
  ];

  const handleLinkClick = (href: string) => {
    if (href === "/#preguntas-frecuentes") {
      setScrollHash("#preguntas-frecuentes");
    } else {
      setScrollHash("");
    }
    setOpen(false);
  };

  return (
    <>
      <nav className="bg-black text-white border-b-4 border-[#FFD700] sticky top-0 z-50 font-medium mb-2 md:mb-4 lg:mb-6">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-[#FFD700] text-2xl font-extrabold tracking-wide"
            onClick={() => handleLinkClick("/")}
          >
            🎟️ RIFAGOLD
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-300 flex items-center ${
                  link.label === "Comprar Boletos"
                    ? "bg-[#FFD700] text-black px-3 py-1.5 rounded-md font-semibold shadow-md overflow-hidden hover:shadow-[0_0_15px_#FFD700] group"
                    : "hover:text-[#FFD700]"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
                {link.label === "Comprar Boletos" && (
                  <span className="absolute inset-0 bg-white opacity-10 transform skew-x-[-20deg] translate-x-[-100%] group-hover:animate-shine" />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-[#FFD700] text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black px-4 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-[#FFD700] transition-colors duration-200"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {scrollHash && <ScrollToHash hash={scrollHash} />}
    </>
  );
};

export default Navbar;
