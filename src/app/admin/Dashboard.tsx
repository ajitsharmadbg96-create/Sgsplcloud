import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MessageSquare, Layers, Settings, Info, Phone, ArrowRight, Clock } from "lucide-react";
import { loadSiteData, type Enquiry } from "../store";

export default function Dashboard() {
  const [data, setData] = useState(loadSiteData());

  useEffect(() => {
    const update = () => setData(loadSiteData());
    window.addEventListener("sitedata", update);
    return () => window.removeEventListener("sitedata", update);
  }, []);

  const unread = data.enquiries.filter((e) => !e.read).length;
  const recent = data.enquiries.slice(0, 3);

  const cards = [
    { label: "Total Enquiries", value: data.enquiries.length, sub: `${unread} unread`, color: "#1e88e5", icon: <MessageSquare size={20} /> },
    { label: "Services Listed", value: data.services.length, sub: "Visible on site", color: "#0a7c59", icon: <Settings size={20} /> },
    { label: "Unread Messages", value: unread, sub: "Needs attention", color: unread > 0 ? "#b91c1c" : "#4a6080", icon: <MessageSquare size={20} /> },
  ];

  const sections = [
    { to: "/admin/hero", icon: <Layers size={18} />, label: "Hero Section", desc: "Edit headline, badge, stats" },
    { to: "/admin/services", icon: <Settings size={18} />, label: "Services", desc: "Add, edit, or remove services" },
    { to: "/admin/about", icon: <Info size={18} />, label: "About Section", desc: "Update company story" },
    { to: "/admin/contact-info", icon: <Phone size={18} />, label: "Contact Info", desc: "Phone, email, address" },
    { to: "/admin/enquiries", icon: <MessageSquare size={18} />, label: "Enquiries", desc: `${unread} unread messages` },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-[#0a2463] font-['Rajdhani'] text-2xl font-bold">Dashboard</h1>
        <p className="text-[#4a6080] text-sm mt-0.5">Welcome back, Admin. Here's your site overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl p-5 border border-[#dce4ef]">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${c.color}15`, color: c.color }}>
                {c.icon}
              </div>
            </div>
            <p className="text-3xl font-['Rajdhani'] font-bold text-[#0a2463] leading-none">{c.value}</p>
            <p className="text-xs text-[#4a6080] mt-1">{c.label}</p>
            <p className="text-xs font-medium mt-0.5" style={{ color: c.color }}>{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Quick access */}
        <div className="bg-white rounded-xl border border-[#dce4ef] p-5">
          <h2 className="text-[#0a2463] font-['Rajdhani'] font-bold text-base mb-4">Manage Sections</h2>
          <div className="space-y-2">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0f4f8] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e8edf5] text-[#0a2463] flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#0a2463]">{s.label}</p>
                  <p className="text-xs text-[#4a6080]">{s.desc}</p>
                </div>
                <ArrowRight size={14} className="text-[#90a8c3] group-hover:text-[#1e88e5] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent enquiries */}
        <div className="bg-white rounded-xl border border-[#dce4ef] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#0a2463] font-['Rajdhani'] font-bold text-base">Recent Enquiries</h2>
            <Link to="/admin/enquiries" className="text-xs text-[#1e88e5] hover:underline">View all</Link>
          </div>
          {recent.length === 0 ? (
            <div className="text-center py-8 text-[#4a6080] text-sm">
              <MessageSquare size={32} className="mx-auto mb-2 opacity-30" />
              No enquiries yet
            </div>
          ) : (
            <div className="space-y-3">
              {recent.map((enq: Enquiry) => (
                <div key={enq.id} className={`p-3 rounded-lg border ${!enq.read ? "border-[#1e88e5]/30 bg-blue-50/50" : "border-[#dce4ef]"}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-[#0a2463]">{enq.name}</p>
                      <p className="text-xs text-[#4a6080]">{enq.service || "General enquiry"}</p>
                    </div>
                    {!enq.read && (
                      <span className="w-2 h-2 rounded-full bg-[#1e88e5] shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-xs text-[#4a6080] mt-1 line-clamp-1">{enq.message}</p>
                  <div className="flex items-center gap-1 mt-1.5 text-[#90a8c3]">
                    <Clock size={10} />
                    <span className="text-[10px]">{new Date(enq.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
