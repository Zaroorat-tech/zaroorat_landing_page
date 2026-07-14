import React from 'react';
import navbarLogo from '../assets/navbar_logo.jpg';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={navbarLogo}
            alt="Zaroorat"
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
