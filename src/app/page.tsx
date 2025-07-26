import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-16" /> 

        {/* Imagen amplia */}
        <section className="max-w-6xl mx-auto px-4">
          <img
            src="/cancun.webp"
            alt="Imagen alusiva a la rifa"
            className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </section>

        {/* Texto explicativo */}
        <section className="max-w-4xl mx-auto px-4 py-10 text-center text-black">
          <p className="text-lg md:text-xl leading-relaxed">
            Compra tus boletos y participa en nuestra rifa exclusiva. Cada boleto tiene un número único asignado automáticamente al momento de la compra. La rifa se llevará a cabo en vivo y el ganador será anunciado en nuestras redes sociales y página web. ¡No pierdas la oportunidad de ganar premios increíbles y apoyar esta gran comunidad!
          </p>
        </section>
      </main>
    </>
  );
}
