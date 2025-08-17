// src/components/TicketControls.tsx
"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Ticket } from "./TicketGrid";
import GenerarBoletosModal from "./GenerarBoletosModal";

export interface TicketControlsProps {
  tickets: Ticket[];
  setTickets: Dispatch<SetStateAction<Ticket[]>>;
  generarBoletos: (cantidad: number) => void;
  buscarTicket: (numero: string) => void;
}

const TicketControls: React.FC<TicketControlsProps> = ({
  tickets,
  setTickets,
  generarBoletos,
  buscarTicket,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [buscarNumero, setBuscarNumero] = useState<string>("");
  const [busquedaNoDisponible, setBusquedaNoDisponible] = useState<string>("");

  const handleAbrirModal = () => {
    setModalOpen(true);
  };

  const handleBuscar = () => {
    const numeroBuscado = buscarNumero.padStart(5, '0');
    const encontrado = tickets.find(t => t.numero === numeroBuscado && !t.seleccionado);
    if (encontrado) {
      buscarTicket(numeroBuscado);
      setBusquedaNoDisponible("");
    } else {
      setBusquedaNoDisponible("No disponible o ya seleccionado.");
    }
    setBuscarNumero("");
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
      <div className="flex items-center gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded" onClick={handleAbrirModal}>
          Maquinita de la Suerte
        </button>
      </div>

      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Buscar boleto"
            value={buscarNumero}
            onChange={e => setBuscarNumero(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1 rounded" onClick={handleBuscar}>
            Buscar
          </button>
        </div>
        {busquedaNoDisponible && (
          <span className="text-xs text-red-600">{busquedaNoDisponible}</span>
        )}
      </div>

      {modalOpen && (
        <GenerarBoletosModal
          ticketsDisponibles={tickets}
          setTickets={setTickets}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TicketControls;
