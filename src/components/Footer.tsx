import React from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center gap-2 group"
  >
    <div className="w-12 h-12 rounded-full bg-[#0d1b4b] flex items-center justify-center
      group-hover:bg-[#2563eb] transition-colors duration-200">
      {icon}
    </div>
    <span className="text-[11px] text-gray-500 group-hover:text-[#2563eb] transition-colors duration-200">
      {label}
    </span>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f8f9fc] border-t border-gray-100 mt-auto">

      {/* ── Main Footer Row ── */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-10
        flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left: Stay connected + Social icons */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-[#0d1b4b] font-bold text-[19px]">Just Stay Connected!</h4>
            <div className="w-8 h-[2.5px] bg-[#0d1b4b] rounded-full mt-1.5" />
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mt-1">
            {/* Instagram */}
            <SocialLink
              href="https://www.instagram.com/zarooratofficial?igsh=MTRqbmM0dmwxaHhsdw%3D%3D"
              label=""
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
                </svg>
              }
            />
              {/* Facebook */}
            <SocialLink
              href="https://www.facebook.com/share/186rQrmKMf/"
              label=""
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              }
            />
            {/* LinkedIn */}
            <SocialLink
              href="https://www.linkedin.com/company/zarooratservices/"
              label=""
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" fill="white" />
                </svg>
              }
            />
            {/* X / Twitter */}
            <SocialLink
              href="https://x.com/zarooratX"
              label=""
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
            />
          
          </div>
        </div>

        {/* Right: Contact text */}
        <div className="md:text-right max-w-xs">
          <p className="text-gray-500 text-[13.5px] leading-relaxed mb-2">
            <h4 className="text-[#0d1b4b] font-bold text-[15px]">
               Let's Build Something <br></br> 
           <p className="text-center">Meaningful Together.</p> 
            </h4>
          
          </p>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-4
          flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">© 2026 Zaroorat. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
