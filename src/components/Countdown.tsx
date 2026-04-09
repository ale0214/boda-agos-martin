"use client"; // Esto le dice a Next.js que esta pieza tiene movimiento (JavaScript)

import { useState, useEffect } from 'react';

const Countdown = () => {
  // Aquí guardamos el tiempo que falta
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    // Ponemos la fecha de la boda (Agos & Martin)
    const weddingDate = new Date("2026-10-24T18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      // Cálculos matemáticos para pasar milisegundos a días, horas, etc.
      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seg: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000); // Esto se repite cada 1 segundo

    return () => clearInterval(timer); // Limpiamos el reloj al salir
  }, []);

  return (
    <section className="py-20 bg-[#FDFCFB] flex flex-col items-center justify-center border-y border-[#B5A191]/20">
      <h2 className="text-base uppercase tracking-[0.3em] text-[#B5A191] mb-12 font-light">
        Cuenta regresiva
      </h2>
      
      <div className="flex gap-6 md:gap-12 text-[#4A4A4A]">
        {/* Cada bloque de tiempo */}
        <div className="flex flex-col items-center min-w-[60px]">
          <p className="text-4xl md:text-5xl font-serif mb-2">{timeLeft.dias}</p>
          <span className="text-[10px] uppercase tracking-widest font-light text-[#B5A191]">Días</span>
        </div>
        
        <div className="text-3xl font-light text-[#B5A191]/40 self-start mt-1">:</div>

        <div className="flex flex-col items-center min-w-[60px]">
          <p className="text-4xl md:text-5xl font-serif mb-2">{timeLeft.horas}</p>
          <span className="text-[10px] uppercase tracking-widest font-light text-[#B5A191]">Horas</span>
        </div>

        <div className="text-3xl font-light text-[#B5A191]/40 self-start mt-1">:</div>

        <div className="flex flex-col items-center min-w-[60px]">
          <p className="text-4xl md:text-5xl font-serif mb-2">{timeLeft.min}</p>
          <span className="text-[10px] uppercase tracking-widest font-light text-[#B5A191]">Min</span>
        </div>

        <div className="text-3xl font-light text-[#B5A191]/40 self-start mt-1">:</div>

        <div className="flex flex-col items-center min-w-[60px]">
          <p className="text-4xl md:text-5xl font-serif mb-2 text-[#B5A191]">{timeLeft.seg}</p>
          <span className="text-[10px] uppercase tracking-widest font-light text-[#B5A191]">Seg</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;