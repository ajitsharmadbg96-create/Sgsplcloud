import { Cloud, Phone, Mail, MapPin } from "lucide-react";
import type { ContactContent, ServiceItem, SiteSettings } from "../store";

interface FooterProps {
  settings?: SiteSettings;
  contact?: ContactContent;
  services?: ServiceItem[];
}

export function Footer({ settings, contact, services }: FooterProps) {
  const year = new Date().getFullYear();
  const companyName = settings?.companyName ?? "SGSPL CLOUD";
  const tagline = settings?.tagline ?? "IT SERVICES";
  const phone = contact?.phone ?? "+91 7982023117";
  const email = contact?.email ?? "ajit.sharma@sgspl.cloud";
  const address = contact?.address ?? "India";

  return (
    <footer className="bg-[#061540] text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#1e88e5] flex items-center justify-center">
                <Cloud size={20} className="text-white" />
              </div>
              <div>
                <span className="text-white font-['Rajdhani'] tracking-wider text-base leading-none block">{companyName}</span>
                <span className="text-blue-400 text-[10px] tracking-widest leading-none block">{tagline}</span>
              </div>
            </div>
            <p className="text-blue-300 text-xs leading-relaxed font-['Inter'] mb-5">
              Empowering businesses with cutting-edge IT infrastructure, cloud solutions, and managed support services.
            </p>
            <div className="space-y-2">
              <a href={`tel:${phone}`} className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition-colors font-['Inter']">
                <Phone size={12} /> {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition-colors font-['Inter']">
                <Mail size={12} /> {email}
              </a>
              <span className="flex items-center gap-2 text-xs text-blue-300 font-['Inter']">
                <MapPin size={12} /> {address}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-['Rajdhani'] font-semibold mb-4 tracking-wider">SERVICES</h4>
            <ul className="space-y-2">
              {(services ?? []).slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button onClick={() => { const el = document.getElementById("services"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="text-blue-300 hover:text-white text-xs transition-colors font-['Inter']">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-['Rajdhani'] font-semibold mb-4 tracking-wider">COMPANY</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", id: "about" },
                { label: "Why Choose Us", id: "why-us" },
                { label: "Contact Us", id: "contact" },
                { label: "Get a Quote", id: "contact" },
              ].map((l) => (
                <li key={l.label}>
                  <button onClick={() => { const el = document.getElementById(l.id); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="text-blue-300 hover:text-white text-xs transition-colors font-['Inter']">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-['Rajdhani'] font-semibold mb-4 tracking-wider">FREE CONSULTATION</h4>
            <p className="text-blue-300 text-xs leading-relaxed mb-4 font-['Inter']">
              Talk to our IT experts about your business challenges. Free, no-obligation consultation.
            </p>
            <button
              onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block bg-[#1e88e5] hover:bg-[#1976d2] text-white text-xs px-5 py-2.5 rounded font-medium transition-colors duration-200"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-400 text-xs font-['Inter']">© {year} {companyName}. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-blue-400 hover:text-white text-xs transition-colors font-['Inter']">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
