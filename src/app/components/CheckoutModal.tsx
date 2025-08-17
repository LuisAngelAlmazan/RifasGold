// src/components/CheckoutModal.tsx
import React, { useState } from "react";
import { Ticket } from "./TicketGrid";

interface CheckoutModalProps {
  ticketsSeleccionados: Ticket[];
  onClose: () => void;
}

const CheckoutModal = ({ ticketsSeleccionados, onClose }: CheckoutModalProps) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [estado, setEstado] = useState("");

  const handleEnviar = () => {
    if (!nombre || !apellido || !whatsapp || !estado) {
      alert("Completa todos los campos");
      return;
    }

    const mensaje = `Boletos: ${ticketsSeleccionados.map(t => t.numero).join(", ")}\nNombre: ${nombre} ${apellido}\nEstado: ${estado}`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Finalizar Compra</h2>
        <p className="mb-2">Boletos seleccionados: {ticketsSeleccionados.length}</p>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full mb-2 border px-2 py-1 rounded"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          className="w-full mb-2 border px-2 py-1 rounded"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de WhatsApp"
          className="w-full mb-2 border px-2 py-1 rounded"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Estado"
          className="w-full mb-4 border px-2 py-1 rounded"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
            onClick={handleEnviar}
          >
            Enviar WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
