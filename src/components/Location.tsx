import React from 'react';

const Location = () => {
  // Aquí definimos la dirección (puedes cambiarla por la real de la boda)
  const address = "Hacienda El Rosal, Coello, Tolima";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Hacienda+El+Rosal+Coello+Tolima";

  return (
    <section id="location" className="py-20 bg-white text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg uppercase tracking-[0.3em] text-[#B5A191] mb-8 font-light">
          Ubicación
        </h2>
        
        <h3 className="text-3xl font-serif mb-4 text-[#4A4A4A]">
          La Ceremonia & Fiesta
        </h3>
        
        <p className="text-lg font-light text-[#666] mb-8">
          {address} <br />
          Sábado, 24 de Octubre de 2026 - 18:00 hrs
        </p>

        {/* Botón interactivo */}
        <a 
          href={mapsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-[#B5A191] text-[#B5A191] uppercase tracking-widest text-xs hover:bg-[#B5A191] hover:text-white transition-all duration-300"
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
};

export default Location;