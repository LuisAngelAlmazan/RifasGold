"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#FFD700] mb-4">
        ¡Participa y gana premios dorados!
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Compra tu boleto y entra a nuestras rifas exclusivas.
      </p>
      <Link
        href="/comprar"
        className="bg-[#FFD700] text-black font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 animate-pulse hover:animate-none hover:shadow-[0_0_30px_#FFD700]"
      >
        🎟️ Comprar Boletos
      </Link>
    </section>
  );
};

export default Hero;
