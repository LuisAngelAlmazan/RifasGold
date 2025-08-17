// src/components/TicketSummary.tsx
import React from "react";
import { Ticket } from "./TicketGrid";

interface TicketSummaryProps {
  ticketsSeleccionados: Ticket[];
  removerTicket: (numero: string) => void;
}

const TicketSummary = ({ ticketsSeleccionados, removerTicket }: TicketSummaryProps) => {
  if (ticketsSeleccionados.length === 0) return null;

  return (
    <div className="my-4 p-4 border rounded border-gray-300">
      <h3 className="font-bold text-lg mb-2">Boletos seleccionados:</h3>
      <div className="flex flex-wrap gap-2">
        {ticketsSeleccionados.map((ticket) => (
          <div
            key={ticket.numero}
            className="bg-black text-white px-2 py-1 rounded cursor-pointer"
            onClick={() => removerTicket(ticket.numero)}
            title="Click para quitar"
          >
            {ticket.numero}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketSummary;
