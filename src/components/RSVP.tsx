import React from 'react';

const RSVP = () => {
  return (
    <section id="rsvp" className="py-20 bg-[#FDFCFB] text-center px-4 border-t border-[#B5A191]/10">
      <div className="max-w-md mx-auto">
        <h2 className="text-lg uppercase tracking-[0.3em] text-[#B5A191] mb-8 font-light">
          Confirmación
        </h2>
        <h3 className="text-3xl font-serif mb-6 text-[#4A4A4A]">¿Nos acompañas?</h3>
        <p className="text-sm font-light text-[#666] mb-10">
          Por favor, confirma tu asistencia antes del 30 de Septiembre.
        </p>

        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Nombre Completo" 
            className="w-full bg-transparent border-b border-[#B5A191] py-2 outline-none text-sm font-light focus:border-[#4A4A4A] transition-colors"
          />
          <select className="w-full bg-transparent border-b border-[#B5A191] py-2 outline-none text-sm font-light text-[#666]">
            <option>Asistiré con gusto</option>
            <option>No podré asistir</option>
          </select>
          
          <button className="w-full bg-[#B5A191] text-white py-3 uppercase tracking-widest text-[10px] hover:bg-[#4A4A4A] transition-colors mt-4">
            Enviar Confirmación
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;