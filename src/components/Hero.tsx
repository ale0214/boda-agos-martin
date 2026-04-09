import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#FDFCFB] text-[#4A4A4A] px-4 text-center">
      {/* Contenedor de Texto */}
      <div className="z-10 animate-fade-in">
        <span className="uppercase tracking-[0.2em] text-lg mb-4 block text-[#B5A191]">
          ¡Nos casamos!
        </span>
        <h1 className="text-7xl md:text-9xl font-serif italic text-[#4A4A4A]">
  Agos <span className="text-5xl md:text-7xl not-italic">&</span> Martin
</h1>
        <div className="w-12 h-[1px] bg-[#B5A191] mx-auto mb-6"></div>
        <p className="text-lg md:text-xl font-light tracking-wide">
          24 . 10 . 2026
        </p>
      </div>

      {/* Imagen de fondo (puedes cambiar el link luego) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center"></div>
      </div>
    </section>
  );
};

export default Hero;