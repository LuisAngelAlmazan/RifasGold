"use client";

import React, { useState } from "react";
import { Ticket } from "./TicketGrid";

interface GenerarBoletosModalProps {
  ticketsDisponibles: Ticket[];
  setTickets: (tickets: Ticket[]) => void;
  onClose: () => void;
}

const cantidadesDisponibles = [1,2,3,4,5,6,7,8,9,10,15,20,30,40,50,60,70,100,200,300];

const frasesSuerte = [
  "¡Que la suerte te acompañe!",
  "Hoy puede ser tu día ganador.",
  "¡Atrévete a ganar!",
  "La fortuna sonríe a los valientes.",
  "¡Tus números están por llegar!"
];

type ModalStep = "mensaje" | "boletos" | "formulario" | "enlace";

const MODAL_WIDTH = 400;
const MODAL_HEIGHT = 520;

const estadosMexico = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
  "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
  "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
  "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const PRECIO_BOLETO = 5; // Cambia este valor según el precio por boleto

const GenerarBoletosModal: React.FC<GenerarBoletosModalProps> = ({
  ticketsDisponibles,
  setTickets,
  onClose,
}) => {
  const [step, setStep] = useState<ModalStep>("mensaje");
  const [cantidad, setCantidad] = useState<number>(1);
  const [boletosGenerados, setBoletosGenerados] = useState<Ticket[]>([]);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    whatsapp: "",
    estado: "",
  });
  const [whatsappLink, setWhatsappLink] = useState<string>("");

  // Si cambia la cantidad, vuelve al mensaje motivacional
  const handleCantidadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCantidad(Number(e.target.value));
    setBoletosGenerados([]);
    setStep("mensaje");
  };

  // Genera boletos aleatorios
  const generarBoletos = () => {
    const libres = ticketsDisponibles.filter(t => !t.seleccionado);
    const seleccionados = libres.sort(() => Math.random() - 0.5).slice(0, cantidad);
    setBoletosGenerados(seleccionados);
    setStep("boletos");
  };

  // Reinicia el modal al mensaje inicial
  const handleReiniciar = () => {
    setBoletosGenerados([]);
    setStep("mensaje");
  };

  // Confirma los boletos y pasa al formulario
  const handleConfirmar = () => {
    setStep("formulario");
  };

  // Actualiza el estado del formulario
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envía el formulario y genera el link de WhatsApp
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numeros = boletosGenerados.map(b => b.numero);
    setTickets(
      ticketsDisponibles.map(t =>
        numeros.includes(t.numero) ? { ...t, seleccionado: true } : t
      )
    );
    const mensaje = `¡Hola! Quiero apartar los siguientes boletos:\n${numeros.join(", ")}\n\nDatos:\nNombre: ${form.nombre} ${form.apellido}\nWhatsApp: ${form.whatsapp}\nEstado: ${form.estado}`;
    const link = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    setWhatsappLink(link);
    setStep("enlace");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 text-black shadow-lg flex flex-col"
        style={{
          width: MODAL_WIDTH,
          minWidth: MODAL_WIDTH,
          maxWidth: MODAL_WIDTH,
          height: MODAL_HEIGHT,
          minHeight: MODAL_HEIGHT,
          maxHeight: MODAL_HEIGHT,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Título dinámico */}
        {(step === "mensaje" || step === "boletos" || step === "enlace") && (
          <h2 className="text-xl font-bold mb-4 text-center">Máquina de la Suerte</h2>
        )}
        {step === "formulario" && (
          <h2 className="text-xl font-bold mb-4 text-center">LLENA TUS DATOS Y DA CLIC EN COMPRAR</h2>
        )}

        {/* Selector de cantidad SOLO en mensaje y boletos */}
        {(step === "mensaje" || step === "boletos") && (
          <div className="mb-4 border rounded bg-gray-100 flex flex-col items-center justify-center p-3">
            <label className="font-semibold mb-1">Cantidad de boletos:</label>
            <select
              className="border px-2 py-1 rounded w-full"
              value={cantidad}
              onChange={handleCantidadChange}
            >
              {cantidadesDisponibles.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        {/* Mensaje inicial */}
        {step === "mensaje" && (
          <div
            className="mb-4 border rounded bg-gray-50 flex flex-col items-center justify-center cursor-pointer"
            style={{ minHeight: 120, maxHeight: 200, width: "100%" }}
            onClick={generarBoletos}
          >
            <p className="font-semibold mb-2">¡Suerte! Haz click para generar tus boletos</p>
            <p className="text-sm text-gray-600">{frasesSuerte[Math.floor(Math.random() * frasesSuerte.length)]}</p>
          </div>
        )}

        {/* Boletos generados */}
        {step === "boletos" && (
          <>
            <div
              className="mb-4 border rounded bg-gray-50 flex flex-col items-center justify-start"
              style={{ minHeight: 100, maxHeight: 200, overflowY: "auto", width: "100%" }}
            >
              <div className="flex flex-wrap gap-2 justify-center p-2">
                {boletosGenerados.map(b => (
                  <span key={b.numero} className="border px-2 py-1 rounded bg-blue-100 font-bold">{b.numero}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <button className="bg-gray-300 px-4 py-1 rounded" onClick={handleReiniciar}>Reiniciar</button>
              <button className="bg-green-500 text-white px-4 py-1 rounded" onClick={handleConfirmar}>Los quiero</button>
            </div>
          </>
        )}

        {/* Formulario de datos */}
        {step === "formulario" && (
          <form className="flex flex-col gap-3 flex-1" onSubmit={handleFormSubmit}>
            <div
              className="mb-2 border rounded bg-gray-50 flex flex-wrap gap-2 justify-center p-2"
              style={{
                minHeight: 50,
                maxHeight: 100,
                overflowY: "auto",
                width: "100%",
              }}
            >
              {boletosGenerados.map(b => (
                <span key={b.numero} className="border px-2 py-1 rounded bg-blue-100 font-bold">{b.numero}</span>
              ))}
            </div>
            <input
              type="text"
              name="nombre"
              required
              className="border px-2 py-1 rounded"
              value={form.nombre}
              onChange={handleFormChange}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="apellido"
              required
              className="border px-2 py-1 rounded"
              value={form.apellido}
              onChange={handleFormChange}
              placeholder="Apellido"
            />
            <input
              type="text"
              name="whatsapp"
              required
              className="border px-2 py-1 rounded"
              value={form.whatsapp}
              onChange={handleFormChange}
              placeholder="WhatsApp"
            />
            <select
              name="estado"
              required
              className="border px-2 py-1 rounded"
              value={form.estado}
              onChange={e => setForm({ ...form, estado: e.target.value })}
            >
            <option value="">Selecciona tu estado</option>
              {estadosMexico.map(e => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
            <div className="mt-2 text-center font-bold text-lg">
              TOTAL ${boletosGenerados.length * PRECIO_BOLETO}
            </div>
            <div className="text-xs text-center text-gray-600 mb-2">
              Al finalizar serás redirigido a whatsapp para enviar la información de tu boleto!<br />
              Tu boleto sólo dura 24 horas apartado
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded mt-2">Comprar</button>
          </form>
        )}

        {/* Link de WhatsApp */}
        {step === "enlace" && (
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-center">¡Listo! Haz click en el botón para enviar tu solicitud por WhatsApp:</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded font-bold"
            >
              Enviar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerarBoletosModal;