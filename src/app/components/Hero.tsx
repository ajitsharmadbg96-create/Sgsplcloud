import { ArrowRight, ShieldCheck, Server, Globe } from "lucide-react";
import type { HeroContent } from "../store";

interface HeroProps {
  hero?: HeroContent;
}

export function Hero({ hero }: HeroProps) {
  const badge = hero?.badge ?? "GROWING IT STARTUP · EST. 2022";
  const headline = hero?.headline ?? "Powering Your Business\nWith Smart IT Solutions";
  const subheadline = hero?.subheadline ?? "SGSPL CLOUD is a young, agile IT services company built on personal attention and genuine expertise.";
  const stat1Label = hero?.stat1Label ?? "Happy Clients";
  const stat2Label = hero?.stat2Label ?? "Years in Business";
  const stat3Label = hero?.stat3Label ?? "Client Retention";

  const headlineLines = headline.split("\n");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a2463 0%, #0d3080 50%, #1a4a9a 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#1e88e5] rounded-full animate-pulse" />
              <span className="text-blue-100 text-xs tracking-wider font-['Inter']">{badge}</span>
            </div>

            <h1
              className="text-white mb-6 leading-tight font-['Rajdhani']"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700 }}
            >
              {headlineLines[0]}
              {headlineLines[1] && (
                <>
                  <br />
                  <span className="text-[#60aeff]">{headlineLines[1]}</span>
                </>
              )}
            </h1>

            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-lg font-['Inter']">
              {subheadline}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => { const el = document.getElementById("services"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white px-6 py-3 rounded font-medium transition-all duration-200 hover:gap-3"
              >
                Explore Services <ArrowRight size={16} />
              </button>
              <button
                onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded font-medium transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { value: "2", label: stat1Label },
                { value: "3", label: stat2Label },
                { value: "100%", label: stat3Label },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-white font-['Rajdhani']" style={{ fontSize: "1.8rem", fontWeight: 700, lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p className="text-blue-300 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: <Server size={28} className="text-[#60aeff]" />, title: "Cloud Infrastructure", desc: "Scalable, reliable cloud hosting and migration services." },
              { icon: <ShieldCheck size={28} className="text-[#60aeff]" />, title: "Cybersecurity", desc: "Protect your business with enterprise-grade security." },
              { icon: <Globe size={28} className="text-[#60aeff]" />, title: "Network Solutions", desc: "High-performance networking for modern enterprises." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60aeff" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: "IT Support", desc: "24/7 managed support and helpdesk services." },
            ].map((card) => (
              <div key={card.title} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300">
                <div className="mb-3">{card.icon}</div>
                <h3 className="text-white font-['Rajdhani'] mb-1" style={{ fontSize: "1rem", fontWeight: 600 }}>{card.title}</h3>
                <p className="text-blue-200 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1080 60 360 0 0 40V60Z" fill="#f0f4f8" />
        </svg>
      </div>
    </section>
  );
}
