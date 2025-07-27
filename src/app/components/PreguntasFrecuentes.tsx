"use client";
import { useState, useEffect } from "react";

interface Pregunta {
  pregunta: string;
  respuesta: string;
}

const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [activo, setActivo] = useState<number | null>(null);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const res = await fetch("/data/preguntas.json");
        if (!res.ok) throw new Error("Error cargando preguntas");
        const data: Pregunta[] = await res.json();
        setPreguntas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCargado(true);
      }
    };
    fetchPreguntas();
  }, []);

  if (!cargado) return null;

  const toggle = (index: number) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="px-4 bg-white ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#b8860b] mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="bg-white border-[2.5px] border-[#b8860b] rounded-xl p-6 hover:shadow-[0_6px_25px_rgba(184,134,11,0.8)] transition-all duration-300"
            >
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center text-gray-800"
                onClick={() => toggle(index)}
                aria-expanded={activo === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <span>{item.pregunta}</span>
                <span className="text-[#b8860b] text-2xl select-none font-bold">
                  {activo === index ? "−" : "+"}
                </span>
              </button>
              {activo === index && (
                <p
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className="mt-4 text-gray-700 text-base leading-relaxed whitespace-pre-line"
                >
                  {item.respuesta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
