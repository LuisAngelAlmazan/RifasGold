// src/components/TicketSummary.tsx
"use client";

import React, { useState } from "react";
import { Ticket } from "./TicketGrid";

interface TicketSummaryProps {
  ticketsDisponibles: Ticket[];
  setTickets: (tickets: Ticket[]) => void;
  iniciarReserva?: (boletos: Ticket[]) => void;
}

const TicketSummary: React.FC<TicketSummaryProps> = ({
  ticketsDisponibles,
  setTickets,
  iniciarReserva,
}) => {
  const [seleccionados, setSeleccionados] = useState<Ticket[]>(
    ticketsDisponibles.filter((t) => t.seleccionado)
  );

  // Actualiza seleccionados si ticketsDisponibles cambia
  React.useEffect(() => {
    setSeleccionados(ticketsDisponibles.filter((t) => t.seleccionado));
  }, [ticketsDisponibles]);

  // Elimina un boleto seleccionado
  const handleRemove = (numero: string) => {
    const actualizados = ticketsDisponibles.map((t) =>
      t.numero === numero ? { ...t, seleccionado: false } : t
    );
    setTickets(actualizados);
  };

  // Limpiar todos los seleccionados
  const handleClear = () => {
    const actualizados = ticketsDisponibles.map((t) =>
      t.seleccionado ? { ...t, seleccionado: false } : t
    );
    setTickets(actualizados);
  };

  // Apartar (iniciar reserva)
  const handleApartar = () => {
    if (iniciarReserva) iniciarReserva(seleccionados);
    // Aquí podrías abrir el modal de datos si lo reciclas
  };

  return (
    <div className="my-4 p-4 border rounded border-gray-300 max-w-xl mx-auto">
      <h3 className="font-bold text-lg mb-4 text-center">
        HAZ CLICK ABAJO EN TU NÚMERO DE LA SUERTE
      </h3>
      {seleccionados.length > 0 && (
        <>
          <div className="flex justify-center mb-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded font-bold transition-colors cursor-pointer"
              onClick={handleApartar}
            >
              Apartar
            </button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {seleccionados.map((ticket) => (
              <div
                key={ticket.numero}
                className="bg-black border-2 border-green-500 text-white px-2 py-1 rounded cursor-pointer font-bold"
                onClick={() => handleRemove(ticket.numero)}
                title="Click para quitar"
              >
                {ticket.numero}
              </div>
            ))}
          </div>
          <div className="text-center font-semibold mb-1">
            {seleccionados.length === 1
              ? "1 BOLETO SELECCIONADO"
              : `${seleccionados.length} BOLETOS SELECCIONADOS`}
          </div>
          <div className="text-xs text-center text-gray-600 mb-2">
            PARA ELIMINAR HAZ CLIC EN EL BOLETO
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 rounded font-bold transition-colors cursor-pointer"
              onClick={handleClear}
            >
              Limpiar seleccionados
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TicketSummary;

/* 
<TicketSummary
  ticketsDisponibles={tickets}
  setTickets={setTickets}
  // iniciarReserva={...} // si lo usas
/>
*/
