import { CheckCircle2 } from "lucide-react";
import type { AboutContent } from "../store";

interface AboutProps {
  about?: AboutContent;
}

export function About({ about }: AboutProps) {
  const tagline = about?.tagline ?? "About Us";
  const heading = about?.heading ?? "Your Reliable Technology Partner";
  const para1 = about?.para1 ?? "";
  const para2 = about?.para2 ?? "";
  const highlights = about?.highlights ?? [];
  const badge = about?.badge ?? "100%";
  const badgeSub = about?.badgeSub ?? "Client Retention Rate";

  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=700&h=500&fit=crop&auto=format"
                alt="SGSPL CLOUD team"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#0a2463] text-white rounded-xl px-6 py-4 shadow-xl hidden sm:block">
              <p className="text-3xl font-['Rajdhani'] font-bold leading-none">{badge}</p>
              <p className="text-blue-200 text-xs mt-1">{badgeSub}</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl opacity-20" style={{ background: "linear-gradient(135deg, #1e88e5, #0a2463)" }} />
          </div>

          <div>
            <span className="text-[#1e88e5] text-xs tracking-widest font-['Inter'] font-semibold uppercase">{tagline}</span>
            <h2 className="text-[#0a2463] mt-2 mb-5 font-['Rajdhani']" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 700 }}>
              {heading}
            </h2>
            {para1 && <p className="text-[#4a6080] text-sm leading-relaxed mb-4 font-['Inter']">{para1}</p>}
            {para2 && <p className="text-[#4a6080] text-sm leading-relaxed mb-7 font-['Inter']">{para2}</p>}

            {highlights.length > 0 && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#1e88e5] mt-0.5 shrink-0" />
                    <span className="text-[#0d1b2a] text-xs font-['Inter']">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-[#0a2463] hover:bg-[#0d3080] text-white px-6 py-3 rounded font-medium text-sm transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
