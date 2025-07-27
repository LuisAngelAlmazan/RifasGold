const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10 border-t border-[#FFD700]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700] mb-2">🎟️ RIFAGOLD</h2>
          <p className="text-sm text-gray-400">
            Vive la emoción de ganar. ¡Suerte dorada te espera!
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FFD700]">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/nosotros" className="hover:text-[#FFD700]">Nosotros</a></li>
            <li><a href="/comprar" className="hover:text-[#FFD700]">Comprar Boletos</a></li>
            <li><a href="/preguntas" className="hover:text-[#FFD700]">Preguntas Frecuentes</a></li>
            <li><a href="/verificador" className="hover:text-[#FFD700]">Verificador</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FFD700]">Síguenos</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-[#FFD700]">Facebook</a>
            <a href="#" className="hover:text-[#FFD700]">Instagram</a>
            <a href="#" className="hover:text-[#FFD700]">TikTok</a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} RIFAGOLD. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
