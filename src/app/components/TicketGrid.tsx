// src/components/TicketGrid.tsx
import React from "react";

export interface Ticket {
  numero: string;
  seleccionado: boolean;
}

interface TicketGridProps {
  tickets: Ticket[];
  toggleTicket: (numero: string) => void;
}

const TicketGrid = ({ tickets, toggleTicket }: TicketGridProps) => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-10 gap-2 max-h-96 overflow-y-auto p-2 border rounded border-gray-300">
      {tickets.map((ticket) => (
        <div
          key={ticket.numero}
          className={`flex items-center justify-center h-10 border-2 rounded cursor-pointer ${
            ticket.seleccionado
              ? "bg-black border-green-500 text-white"
              : "bg-white border-green-500 text-black"
          }`}
          onClick={() => toggleTicket(ticket.numero)}
        >
          {ticket.numero}
        </div>
      ))}
    </div>
  );
};

export default TicketGrid;
