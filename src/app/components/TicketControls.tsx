"use client";

import React, { useState } from 'react';

interface TicketControlsProps {
  generarBoletos: (cantidad: number) => void;
  buscarTicket: (numero: string) => void;
}

const TicketControls: React.FC<TicketControlsProps> = ({ generarBoletos, buscarTicket }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [numeroBuscar, setNumeroBuscar] = useState('');

  const opcionesCantidad = [1,2,3,4,5,6,7,8,9,10,15,20,30,40,50,60,70,100,200,300];

  const handleGenerar = () => {
    generarBoletos(cantidad);
    setModalOpen(false);
  };

  const handleBuscar = () => {
    if(numeroBuscar.trim() !== ''){
      buscarTicket(numeroBuscar);
      setNumeroBuscar('');
    }
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setModalOpen(true)}>
          Generar Boletos
        </button>
        <input 
          type="text" 
          placeholder="Buscar Boleto" 
          value={numeroBuscar} 
          onChange={e => setNumeroBuscar(e.target.value)}
          className="border px-2 py-1 rounded" 
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleBuscar}>
          Buscar
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Selecciona cantidad de boletos</h2>
            <select 
              value={cantidad} 
              onChange={e => setCantidad(Number(e.target.value))}
              className="w-full border p-2 rounded mb-4"
            >
              {opcionesCantidad.map(op => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>
            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setModalOpen(false)}>Cancelar</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleGenerar}>Generar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketControls;
