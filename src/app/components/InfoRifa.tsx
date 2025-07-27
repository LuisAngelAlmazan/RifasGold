"use client";
import Image from "next/image";

const InfoRifa = () => {
  return (
    <>
      {/* Separación visual */}
      <div className="h-16" />

      {/* Imagen alusiva */}
      <section className="max-w-6xl mx-auto px-4">
        <Image
          src="/cancun.webp" // cambia por tu imagen si lo deseas
          alt="Imagen alusiva a la rifa"
          width={1200}
          height={400}
          className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </section>

     
      {/* Texto explicativo con fondo oscuro */}
<section className="max-w-6xl mx-auto px-4 py-10 text-center bg-black text-white rounded-lg mt-10 shadow-lg mb-20">
  <p className="text-lg md:text-xl leading-relaxed">
    Compra tus boletos y participa en nuestra{" "}
    <span className="text-[#FFD700] font-bold">rifa exclusiva</span>. Cada boleto
    tiene un número único asignado automáticamente al momento de la compra. La rifa
    se llevará a cabo <span className="text-[#FFD700] font-semibold">en vivo</span>{" "}
    y el ganador será anunciado en nuestras redes sociales y página web. ¡No
    pierdas la oportunidad de ganar{" "}
    <span className="text-[#FFD700] font-bold">premios increíbles</span> y apoyar
    esta gran comunidad!
  </p>
</section>

    </>
  );
};

export default InfoRifa;
