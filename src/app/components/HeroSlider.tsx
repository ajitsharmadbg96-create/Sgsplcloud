import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=1600&h=900&fit=crop&auto=format",
    tag: "Cloud Infrastructure",
    headline: "Powering Your Business\nWith Smart IT Solutions",
    sub: "Young, agile, and fully committed — SGSPL CLOUD is your trusted IT partner for the digital era.",
    cta: "Explore Services",
    ctaTarget: "services",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1600&h=900&fit=crop&auto=format",
    tag: "Network & Connectivity",
    headline: "Stay Connected,\nStay Productive",
    sub: "Reliable LAN/WAN design, leased lines, and 24/7 network monitoring to keep your operations running.",
    cta: "Our Services",
    ctaTarget: "services",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=1600&h=900&fit=crop&auto=format",
    tag: "IT Support & AMC",
    headline: "Expert IT Support\nWhen You Need It",
    sub: "Fast response, direct expert access, and flexible support plans tailored for growing businesses.",
    cta: "Contact Us",
    ctaTarget: "contact",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1682559736721-c2e77ff4c650?w=1600&h=900&fit=crop&auto=format",
    tag: "Cybersecurity",
    headline: "Protect What\nMatters Most",
    sub: "From endpoint security to firewall management — we safeguard your business data around the clock.",
    cta: "Learn More",
    ctaTarget: "services",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&auto=format",
    tag: "Our Team",
    headline: "Small Team,\nBig Commitment",
    sub: "We are a passionate startup that treats every client as a long-term partner — not just a ticket number.",
    cta: "About Us",
    ctaTarget: "about",
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>
      {/* Embla viewport */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-none w-full h-full">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.tag}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,21,64,0.88) 0%, rgba(10,36,99,0.65) 55%, rgba(10,36,99,0.25) 100%)" }} />

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
                <div className="max-w-xl pt-20">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                    <span className="w-2 h-2 bg-[#1e88e5] rounded-full animate-pulse" />
                    <span className="text-blue-100 text-xs tracking-wider font-['Inter']">{slide.tag}</span>
                  </div>

                  <h1
                    className="text-white font-['Rajdhani'] mb-5 leading-tight"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 700 }}
                  >
                    {slide.headline.split("\n").map((line, i) => (
                      <span key={i}>
                        {i === 1 ? <span className="text-[#60aeff]">{line}</span> : line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </h1>

                  <p className="text-blue-100 text-base leading-relaxed mb-8 font-['Inter'] max-w-md">
                    {slide.sub}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => scrollToSection(slide.ctaTarget)}
                      className="inline-flex items-center gap-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white px-6 py-3 rounded font-medium text-sm transition-all duration-200 hover:gap-3"
                    >
                      {slide.cta} <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded font-medium text-sm transition-colors duration-200"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors z-10 backdrop-blur-sm"
      >
        <ArrowLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors z-10 backdrop-blur-sm"
      >
        <ArrowRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: current === i ? 28 : 8,
              height: 8,
              backgroundColor: current === i ? "#1e88e5" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0a2463]/80 backdrop-blur-sm border-t border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex divide-x divide-white/10">
            {[
              { value: "2", label: "Happy Clients" },
              { value: "3 Yrs", label: "In Business" },
              { value: "100%", label: "Client Retention" },
              { value: "24/7", label: "Support Available" },
            ].map((s) => (
              <div key={s.label} className="flex-1 py-3 text-center">
                <p className="text-white font-['Rajdhani'] font-bold text-lg leading-none">{s.value}</p>
                <p className="text-blue-300 text-[10px] mt-0.5 tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none sm:hidden">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40L1440 40L1440 15C1080 40 360 0 0 28V40Z" fill="#f0f4f8" />
        </svg>
      </div>
    </section>
  );
}
