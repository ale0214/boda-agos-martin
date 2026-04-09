"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica para que el menú cambie de color al bajar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Fotos', href: '#gallery' },
    { name: 'Ubicación', href: '#location' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-serif italic text-3xl text-[#4A4A4A]">A & M</span>
        
       <div className="hidden md:flex gap-10">
  {menuItems.map((item) => (
    <a 
      key={item.name}
      href={item.href}
      className="text-sm uppercase tracking-[0.2em] font-semibold text-[#4A4A4A] hover:text-[#B5A191] transition-colors"
    >
      {item.name}
    </a>
  ))}
</div>
      </div>
    </nav>
  );
};

export default Navbar;