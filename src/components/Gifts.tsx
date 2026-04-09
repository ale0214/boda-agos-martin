import React from 'react';

const Gifts = () => {
  return (
    <section className="py-20 bg-white text-center px-4">
      <div className="max-w-2xl mx-auto border border-[#B5A191]/30 p-12 relative">
        {/* Adorno sutil */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-[#B5A191] text-2xl">
          ✉
        </div>

        <h2 className="text-lg uppercase tracking-[0.3em] text-[#B5A191] mb-8 font-light">
          Lluvia de Sobres
        </h2>
        
        <p className="text-lg font-serif italic text-[#4A4A4A] mb-6">
          "Tu presencia es nuestro mejor regalo, pero si deseas hacernos un detalle, 
          contaremos con lluvia de sobres el día del evento."
        </p>

        <div className="w-12 h-[1px] bg-[#B5A191]/40 mx-auto mb-6"></div>

        <div className="space-y-4 text-sm font-light text-[#666]">
          <p>O si prefieres realizar una transferencia:</p>
          <div className="bg-[#FDFCFB] p-6 rounded-sm border border-[#B5A191]/10">
            <p className="font-medium text-[#4A4A4A] tracking-widest uppercase mb-1">
              BANCO DAVIVIENDA
            </p>
            <p className="text-[#B5A191]">Ahorros: 0000-0000-0000</p>
            <p className="text-[#B5A191]">Titular: Agos & Martin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;