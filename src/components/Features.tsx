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

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6L12 2z"
      stroke="#2563eb"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="#2563eb"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
      stroke="#2563eb"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5 17l.8 2.4 2.4-.8M19 17l-.8 2.4-2.4-.8"
      stroke="#2563eb"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Features: React.FC = () => {
  return (
    <section className="w-full bg-[#eef2ff]">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <FeatureCard
            icon={<HeartIcon />}
            title="Human-Centered"
            description="Technology may power us, but people define us. Every decision is made with your needs at the heart of it."
            className="md:pr-8 md:pl-0"
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Built on Trust"
            description="Verified professionals, transparent processes, and dependable service—because trust should never be optional."
            borderLeft
            borderRight
            className="px-6 md:px-8 lg:px-10"
          />
          <FeatureCard
            icon={<SparkleIcon />}
            title="Driven by Purpose"
            description="We're building a smarter ecosystem that empowers communities and simplifies everyday living"
            className="md:pl-8 md:pr-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
