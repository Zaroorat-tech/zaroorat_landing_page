import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderLeft?: boolean;
  borderRight?: boolean;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, borderLeft, borderRight, className }) => (
  <div
    className={`flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 py-8
      ${borderLeft ? 'md:border-l border-[#d1d9f0]' : ''}
      ${borderRight ? 'md:border-r border-[#d1d9f0]' : ''}
      border-b md:border-b-0 border-[#d1d9f0] last:border-b-0
      ${className || 'px-6 md:px-8'}
    `}
  >
    {/* Icon bubble */}
    <div className="shrink-0 w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-1 md:mb-0">
      {icon}
    </div>
    {/* Text */}
    <div className="flex flex-col gap-1.5 pt-1">
      <h3 className="text-[#0d1b4b] font-bold text-[16px] leading-snug">{title}</h3>
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-[280px] md:max-w-none">{description}</p>
    </div>
  </div>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      stroke="#2563eb"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);




const LightbulbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18h6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 22h4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const HandshakeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m21 3-6 6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m21 14-5-5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m4 12 8 8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m4 21 8-8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17a4 4 0 1 0 0-8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Features: React.FC = () => {
  return (
    <section className="w-full bg-[#eef2ff]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <FeatureCard
            icon={<HeartIcon />}
            title="Human-Centered"
            description="Technology may power us, but people define us. Every decision is made with your needs at the heart of it."
            className="md:pr-8 md:pl-0"
          />
          <FeatureCard
            icon={<LightbulbIcon />}
          
            title="Driven by Purpose"
            description="We're building a smarter ecosystem that empowers communities and simplifies everyday living"
           
            borderLeft
            borderRight
            className="md:px-8 lg:px-10"
          />
          <FeatureCard
            icon={<HandshakeIcon />}
              title="Built on Trust"
             description="Verified professionals, transparent processes, and dependable service because trust should never be optional."
            className="md:pl-8 md:pr-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
