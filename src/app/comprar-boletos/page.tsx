// src/comprar-boletos/page.tsx
"use client";

import React, { useState } from "react";
import TicketGrid, { Ticket } from "../components/TicketGrid";
import TicketControls from "../components/TicketControls";
import TicketSummary from "../components/TicketSummary";
import CheckoutModal from "../components/CheckoutModal";

export default function ComprarBoletosPage() {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const totalBoletos = 60000; // Variable modificable
    return Array.from({ length: totalBoletos }, (_, i) => ({
      numero: i.toString().padStart(5, "0"),
      seleccionado: false,
    }));
  });

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const toggleTicket = (numero: string) => {
    setTickets(prev => prev.map(t => t.numero === numero ? { ...t, seleccionado: !t.seleccionado } : t));
  };

  const generarBoletos = (cantidad: number) => {
    const libres = tickets.filter(t => !t.seleccionado);
    const seleccionados = libres.sort(() => Math.random() - 0.5).slice(0, cantidad).map(t => t.numero);
    setTickets(prev => prev.map(t => seleccionados.includes(t.numero) ? { ...t, seleccionado: true } : t));
  };

  const buscarTicket = (numero: string) => {
    const encontrado = tickets.find(t => t.numero === numero);
    if (encontrado) toggleTicket(encontrado.numero);
    else alert("Boleto no encontrado o ya seleccionado");
  };

  const removerTicket = (numero: string) => toggleTicket(numero);

  const ticketsSeleccionados = tickets.filter(t => t.seleccionado);

  return (
    <main className="min-h-screen px-4 py-12 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Compra tus Boletos</h1>
        <p className="text-lg text-gray-300 mb-6">Elige tus números favoritos y participa para ganar. ¡Cada boleto es una oportunidad!</p>

        {/* Controles de generación y búsqueda */}
        <TicketControls generarBoletos={generarBoletos} buscarTicket={buscarTicket} />

        {/* Grid de boletos */}
        <TicketGrid tickets={tickets} toggleTicket={toggleTicket} />

        {/* Resumen de boletos seleccionados */}
        <TicketSummary ticketsSeleccionados={ticketsSeleccionados} removerTicket={removerTicket} />

        {/* Botón finalizar compra */}
        {ticketsSeleccionados.length > 0 && (
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold"
            onClick={() => setCheckoutOpen(true)}
          >
            Finalizar Compra
          </button>
        )}

        {/* Ventana emergente de checkout */}
        {checkoutOpen && (
          <CheckoutModal ticketsSeleccionados={ticketsSeleccionados} onClose={() => setCheckoutOpen(false)} />
        )}
      </div>
    </main>
  );
}
