import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// SVG logos for IT product brands
const logos = [
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="2" y="2" width="39" height="39" fill="#F25022"/>
        <rect x="47" y="2" width="39" height="39" fill="#7FBA00"/>
        <rect x="2" y="47" width="39" height="39" fill="#00A4EF"/>
        <rect x="47" y="47" width="39" height="39" fill="#FFB900"/>
      </svg>
    ),
  },
  {
    name: "Cisco",
    svg: (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="0" y="14" width="12" height="12" rx="2" fill="#049fd9"/>
        <rect x="18" y="7" width="12" height="26" rx="2" fill="#049fd9"/>
        <rect x="36" y="0" width="12" height="40" rx="2" fill="#049fd9"/>
        <rect x="54" y="7" width="12" height="26" rx="2" fill="#049fd9"/>
        <rect x="72" y="14" width="12" height="12" rx="2" fill="#049fd9"/>
        <text x="90" y="28" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#049fd9">CISCO</text>
      </svg>
    ),
  },
  {
    name: "Dell",
    svg: (
      <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <text x="4" y="32" fontFamily="Arial" fontSize="32" fontWeight="900" fill="#007DB8">dell</text>
      </svg>
    ),
  },
  {
    name: "HP",
    svg: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="30" cy="30" r="28" fill="#0096D6"/>
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="white">hp</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 120 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <text x="2" y="30" fontFamily="Arial" fontSize="26" fontWeight="900" fill="#232F3E">aws</text>
        <path d="M70 32 Q85 40 100 32" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M65 38 L72 34 L70 42 Z" fill="#FF9900"/>
        <path d="M103 34 L98 38 L102 42 Z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: "Lenovo",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="2" y="30" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#E2231A">Lenovo</text>
      </svg>
    ),
  },
  {
    name: "VMware",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="2" y="30" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#607078">VMware</text>
      </svg>
    ),
  },
  {
    name: "Fortinet",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="0" y="8" width="6" height="24" rx="1" fill="#EE3124"/>
        <rect x="9" y="0" width="6" height="40" rx="1" fill="#EE3124"/>
        <rect x="18" y="8" width="6" height="24" rx="1" fill="#EE3124"/>
        <text x="30" y="28" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#EE3124">fortinet</text>
      </svg>
    ),
  },
  {
    name: "Azure",
    svg: (
      <svg viewBox="0 0 120 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <polygon points="20,5 40,5 30,42" fill="#0078D4" opacity="0.8"/>
        <polygon points="5,42 25,42 12,18" fill="#0078D4"/>
        <polygon points="28,18 48,42 35,42" fill="#0078D4" opacity="0.6"/>
        <text x="55" y="30" fontFamily="Arial" fontSize="17" fontWeight="bold" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: "Symantec",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="16" cy="20" r="13" fill="#FFB81C"/>
        <text x="6" y="26" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#1A1A1A">S</text>
        <text x="32" y="27" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#1A1A1A">SYMANTEC</text>
      </svg>
    ),
  },
];

export function ProductLogos() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 2200, stopOnInteraction: false })]
  );

  return (
    <section className="bg-white border-y border-[#dce4ef] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs text-[#4a6080] tracking-widest uppercase font-['Inter'] font-semibold mb-8">
          Products &amp; Technology Supported
        </p>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-0">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-none flex flex-col items-center justify-center gap-2 px-8 min-w-[120px] group"
              >
                <div className="opacity-40 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center h-12">
                  {logo.svg}
                </div>
                <span className="text-[10px] text-[#90a8c3] group-hover:text-[#4a6080] transition-colors tracking-wider font-['Inter'] uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
