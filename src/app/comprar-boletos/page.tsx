// src/app/comprar-boletos/page.tsx
import React from 'react'

export default function ComprarBoletosPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#b8860b] mb-4">Compra tus Boletos</h1>
        <p className="text-lg text-gray-700 mb-10">
          Elige tus números favoritos y participa para ganar. ¡Cada boleto es una oportunidad!
        </p>
        {/* Aquí irá el selector de boletos */}
      </div>
    </main>
  )
}
