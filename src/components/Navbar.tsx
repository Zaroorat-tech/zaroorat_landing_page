import React, { useState } from 'react';
import navbarLogo from '../assets/navbar_logo.jpg';
import ContactModal from './ContactModal';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          {/* ── Logo ── */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src={navbarLogo}
              alt="Zaroorat"
              className="h-8 md:h-12 w-auto object-contain mix-blend-multiply"
            />
          </a>

          {/* ── CTA Button ── */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0b132e] hover:bg-[#15234e] transition-colors text-white font-medium px-4 py-2 text-[13px] md:text-[15px] md:px-6 md:py-2.5 rounded-full flex items-center gap-1.5 md:gap-2 shadow-sm"
          >
            Let's Connect <span className="text-base md:text-lg leading-none">&rarr;</span>
          </button>
        </div>
      </header>

      {/* Render the contact form modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
