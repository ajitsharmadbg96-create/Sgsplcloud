import { useState, useEffect, useRef } from "react";
import { Menu, X, Cloud, Phone, ChevronDown, Package } from "lucide-react";
import type { ContactContent, SiteSettings } from "../store";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const products = [
  {
    label: "Mail Solution for Hybrid",
    id: "mail-solution",
    desc: "On-premise & cloud hybrid email platform",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface NavbarProps {
  settings?: SiteSettings;
  contact?: ContactContent;
}

export function Navbar({ settings, contact }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const companyName = settings?.companyName ?? "SGSPL CLOUD";
  const tagline = settings?.tagline ?? "IT SERVICES";
  const phone = contact?.phone ?? "+91 7982023117";
  const email = contact?.email ?? "ajit.sharma@sgspl.cloud";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a2463] shadow-lg" : "bg-[#0a2463]/95"}`}>
      {/* Top bar */}
      <div className="bg-[#061540] px-4 py-1 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end gap-6 text-xs text-blue-200">
          <span className="flex items-center gap-1.5"><Phone size={11} />{phone}</span>
          <span className="flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
            {email}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#1e88e5] flex items-center justify-center">
              <Cloud size={18} className="text-white" />
            </div>
            <div>
              <span className="text-white font-['Rajdhani'] tracking-wider text-base leading-none block">{companyName}</span>
              <span className="text-blue-300 text-[9px] tracking-widest leading-none block">{tagline}</span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded text-sm transition-colors duration-200 font-['Inter'] cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center gap-1 text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded text-sm transition-colors duration-200 font-['Inter'] cursor-pointer"
              >
                Products
                <ChevronDown size={13} className={`transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`} />
              </button>

              {productOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-[#0a2463] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { scrollTo(p.id); setProductOpen(false); }}
                      className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1e88e5]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Package size={15} className="text-[#60aeff]" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-semibold font-['Inter']">{p.label}</p>
                          <p className="text-blue-300 text-[11px] mt-0.5 font-['Inter']">{p.desc}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="ml-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white px-4 py-1.5 rounded text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#061540] border-t border-blue-800/40 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setOpen(false); }}
              className="block w-full text-left text-blue-100 hover:text-white py-2.5 border-b border-blue-900/40 text-sm font-['Inter']"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-1">
            <p className="text-blue-400 text-[10px] tracking-widest uppercase py-2 font-['Inter']">Products</p>
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => { scrollTo(p.id); setOpen(false); }}
                className="block w-full text-left text-blue-100 hover:text-white py-2.5 border-b border-blue-900/40 text-sm font-['Inter'] pl-2"
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="mt-3 text-blue-200 text-xs space-y-1.5">
            <p>📞 {phone}</p>
            <p>✉ {email}</p>
          </div>
        </div>
      )}
    </nav>
  );
}
