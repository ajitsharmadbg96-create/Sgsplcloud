import {
  Cloud, ShieldCheck, Server, Globe, Headphones, Code2, Database, Wifi, BrainCircuit,
} from "lucide-react";
import type { ServiceItem } from "../store";

const iconMap: Record<string, React.ReactNode> = {
  "Cloud Services": <Cloud size={26} />,
  "Cybersecurity": <ShieldCheck size={26} />,
  "Server & Data Center": <Server size={26} />,
  "Networking Solutions": <Globe size={26} />,
  "IT Support & AMC": <Headphones size={26} />,
  "Software Solutions": <Code2 size={26} />,
  "Data Backup & Recovery": <Database size={26} />,
  "Internet & Connectivity": <Wifi size={26} />,
  "AI & Automation": <BrainCircuit size={26} />,
};

const fallbackServices: ServiceItem[] = [
  { id: "1", title: "Cloud Services", desc: "Migrate and manage workloads on AWS, Azure, and GCP with expert architecture support.", color: "#1e88e5" },
  { id: "2", title: "Cybersecurity", desc: "Firewall management, endpoint protection, and compliance consulting.", color: "#0a7c59" },
  { id: "3", title: "Server & Data Center", desc: "On-premise servers, hardware procurement, and lifecycle management.", color: "#6d28d9" },
  { id: "4", title: "Networking Solutions", desc: "LAN/WAN design, SD-WAN, and 24/7 network monitoring.", color: "#c05621" },
  { id: "5", title: "IT Support & AMC", desc: "Annual contracts, helpdesk, and on-site support with SLA guarantees.", color: "#0a2463" },
  { id: "6", title: "Software Solutions", desc: "Custom development, ERP/CRM implementation, and digital transformation.", color: "#b91c1c" },
  { id: "7", title: "Data Backup & Recovery", desc: "Automated backups, disaster recovery, and business continuity.", color: "#065f46" },
  { id: "8", title: "Internet & Connectivity", desc: "Leased line, broadband, MPLS, and VPN across locations.", color: "#1e40af" },
  { id: "9", title: "AI & Automation", desc: "AI-powered workflows, intelligent bots, and process automation to boost productivity.", color: "#7c3aed" },
];

interface ServicesProps { services?: ServiceItem[]; }

export function Services({ services }: ServicesProps) {
  const items = (services && services.length > 0) ? services : fallbackServices;

  return (
    <section id="services" className="py-12 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-[#1e88e5] text-xs tracking-widest font-['Inter'] font-semibold uppercase">What We Offer</span>
          <h2 className="text-[#0a2463] mt-1 font-['Rajdhani']" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700 }}>
            Our IT Services
          </h2>
          <p className="text-[#4a6080] text-xs mt-2 max-w-xl mx-auto leading-relaxed font-['Inter']">
            Full-spectrum technology services — from cloud and AI to day-to-day IT support.
          </p>
          <div className="mt-3 flex justify-center">
            <span className="w-12 h-0.5 bg-[#1e88e5] rounded-full block" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-xl p-4 border border-[#dce4ef] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
              >
                {iconMap[svc.title] ?? <Cloud size={26} />}
              </div>
              <h3 className="text-[#0a2463] text-xs font-semibold mb-1.5 font-['Rajdhani'] leading-tight" style={{ fontSize: "0.82rem" }}>
                {svc.title}
              </h3>
              <p className="text-[#4a6080] leading-relaxed font-['Inter']" style={{ fontSize: "0.7rem" }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
