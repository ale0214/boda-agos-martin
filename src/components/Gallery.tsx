"use client"; // 1. IMPORTANTE: Sin esto, el clic no funcionará

import React, { useState } from 'react';

const Gallery = () => {
  // Tus fotos de Pinterest
  const photos = [
    "https://i.pinimg.com/736x/34/8d/23/348d235e96b040f01e96a78c28974be0.jpg",
    "https://i.pinimg.com/736x/be/42/09/be4209da038899798ed964ebd741c641.jpg",
    "https://i.pinimg.com/1200x/39/43/4b/39434b49faadf6846e84d268960de454.jpg",
    "https://i.pinimg.com/736x/7f/cd/2c/7fcd2c48b1c1903cfb15837dfc34bc39.jpg"
  ];

  // 2. La memoria: aquí guardamos qué foto se clickeó
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-lg uppercase tracking-[0.3em] text-[#B5A191] text-center mb-12 font-light">
          Nuestros Momentos
        </h2>
        
        {/* Cuadrícula de fotos pequeñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((url, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
              onClick={() => setSelectedPhoto(url)} // 3. Al dar clic, guardamos la URL
            >
              <img 
                src={url} 
                alt={`Boda foto ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. La foto en grande (solo aparece si hay algo en la memoria) */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)} // Al tocar el fondo negro, se cierra
        >
          <button className="absolute top-6 right-6 text-white text-4xl font-light hover:text-[#B5A191]">&times;</button>
          
          <img 
            src={selectedPhoto} 
            alt="Foto ampliada" 
            className="max-w-full max-h-[90vh] object-contain animate-in fade-in zoom-in duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;