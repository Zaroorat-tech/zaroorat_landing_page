import React from 'react';

import heroLogo from '../assets/hero-logo.jpg';

import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-4 pb-6 md:pt-6 md:pb-10 flex flex-col md:flex-row items-center justify-between gap-0 md:gap-10">

        {/* ── Left: Text Content ── */}
        <div className="flex flex-col items-start w-full md:max-w-[480px] relative z-10">

          {/* Main Heading */}
          <h1 className="text-[#0d1b4b] font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-1">
            Everyone Needs
          </h1>
          <h1 className="text-[#2563eb] font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-5">
            <AnimatedText words={['Someone!', 'Plumber!', 'Electrician!', 'Painter!', 'Cleanliness!', 'Fireproofing!', 'Commuting!']} />
          </h1>

          {/* Blue divider line */}
          <div className="w-10 h-[3px] bg-[#2563eb] rounded-full mb-6" />

          {/* Description */}
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[300px]">
            Building something thoughtful, dependable, and deeply human for every journey that truly matters.
          </p>
        </div>

        {/* ── Right: Logo with circular background ── */}
        <div className="relative flex items-center justify-center w-full md:w-auto shrink-0 overflow-visible -mt-8 sm:-mt-4 md:mt-0 -mb-12 sm:-mb-6 md:mb-0">
          {/* Logo Container */}
          <div
            className="relative flex items-center justify-center scale-[0.70] sm:scale-90 md:scale-100 origin-center"
            style={{ width: 340, height: 340 }}
          >
            {/* Medium light-blue fill circle */}
            <div
              className="absolute rounded-full"
              style={{ width: 340, height: 340, background: '#eef2ff', opacity: 0.85 }}
            />

            {/* Logo Image */}
            <img
              src={heroLogo}
              alt="Zaroorat infinity logo"
              className="relative z-10 object-contain rounded-full shadow-2xl ring-8 ring-white"
              style={{ width: 220, height: 220 }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
