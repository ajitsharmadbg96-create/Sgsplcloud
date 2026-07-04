import { useEffect, useState } from "react";
import { Mail, Phone, Clock, Trash2, MailOpen, MessageSquare } from "lucide-react";
import { loadSiteData, saveSiteData, type Enquiry } from "../store";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const load = () => setEnquiries(loadSiteData().enquiries);

  useEffect(() => {
    load();
    window.addEventListener("sitedata", load);
    return () => window.removeEventListener("sitedata", load);
  }, []);

  const markRead = (id: string) => {
    const data = loadSiteData();
    data.enquiries = data.enquiries.map((e) => e.id === id ? { ...e, read: true } : e);
    saveSiteData(data);
    if (selected?.id === id) setSelected({ ...selected, read: true });
  };

  const deleteEnquiry = (id: string) => {
    const data = loadSiteData();
    data.enquiries = data.enquiries.filter((e) => e.id !== id);
    saveSiteData(data);
    if (selected?.id === id) setSelected(null);
  };

  const openEnquiry = (enq: Enquiry) => {
    setSelected(enq);
    if (!enq.read) markRead(enq.id);
  };

  const unread = enquiries.filter((e) => !e.read).length;

  return (
    <div className="max-w-5xl space-y-4">
      <div>
        <h1 className="text-[#0a2463] font-['Rajdhani'] text-2xl font-bold">Enquiries</h1>
        <p className="text-[#4a6080] text-sm mt-0.5">
          {enquiries.length} total · {unread} unread
        </p>
      </div>

      {enquiries.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#dce4ef] p-16 text-center">
          <MessageSquare size={40} className="mx-auto text-[#dce4ef] mb-3" />
          <p className="text-[#4a6080] text-sm">No enquiries yet.</p>
          <p className="text-[#90a8c3] text-xs mt-1">Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 gap-4">
          {/* List */}
          <div className="md:col-span-2 space-y-2">
            {enquiries.map((enq) => (
              <div
                key={enq.id}
                onClick={() => openEnquiry(enq)}
                className={`bg-white rounded-xl border p-4 cursor-pointer transition-all ${
                  selected?.id === enq.id
                    ? "border-[#1e88e5] ring-2 ring-[#1e88e5]/20"
                    : !enq.read
                    ? "border-[#1e88e5]/30 bg-blue-50/40 hover:border-[#1e88e5]/60"
                    : "border-[#dce4ef] hover:border-[#90a8c3]"
                }`}
              >
                <div className="flex items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {!enq.read && <span className="w-2 h-2 rounded-full bg-[#1e88e5] shrink-0" />}
                      <p className="text-sm font-medium text-[#0a2463] truncate">{enq.name}</p>
                    </div>
                    <p className="text-xs text-[#4a6080] mt-0.5">{enq.service || "General"}</p>
                    <p className="text-xs text-[#90a8c3] mt-0.5 truncate">{enq.message}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteEnquiry(enq.id); }}
                    className="text-[#90a8c3] hover:text-red-500 transition-colors p-0.5 shrink-0"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                <div className="flex items-center gap-1 mt-2 text-[#90a8c3]">
                  <Clock size={10} />
                  <span className="text-[10px]">
                    {new Date(enq.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail */}
          <div className="md:col-span-3">
            {selected ? (
              <div className="bg-white rounded-xl border border-[#dce4ef] p-6 space-y-4 sticky top-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-['Rajdhani'] font-bold text-[#0a2463]">{selected.name}</h2>
                    {selected.service && (
                      <span className="inline-block bg-[#e8edf5] text-[#0a2463] text-xs px-2.5 py-0.5 rounded-full mt-1 font-medium">
                        {selected.service}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {!selected.read && (
                      <button
                        onClick={() => markRead(selected.id)}
                        className="flex items-center gap-1.5 text-xs text-[#1e88e5] border border-[#1e88e5]/30 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <MailOpen size={13} /> Mark read
                      </button>
                    )}
                    <button
                      onClick={() => deleteEnquiry(selected.id)}
                      className="flex items-center gap-1.5 text-xs text-red-500 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={13} /> Delete
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#f8fafc] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-[#4a6080] mb-0.5">
                      <Mail size={11} /> Email
                    </div>
                    <a href={`mailto:${selected.email}`} className="text-[#0a2463] font-medium hover:text-[#1e88e5] break-all">
                      {selected.email}
                    </a>
                  </div>
                  {selected.phone && (
                    <div className="bg-[#f8fafc] rounded-lg p-3">
                      <div className="flex items-center gap-1.5 text-[#4a6080] mb-0.5">
                        <Phone size={11} /> Phone
                      </div>
                      <a href={`tel:${selected.phone}`} className="text-[#0a2463] font-medium hover:text-[#1e88e5]">
                        {selected.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs font-medium text-[#4a6080] mb-2">Message</p>
                  <div className="bg-[#f8fafc] rounded-lg p-4 text-sm text-[#0d1b2a] leading-relaxed border border-[#dce4ef] whitespace-pre-wrap font-['Inter']">
                    {selected.message}
                  </div>
                </div>

                <p className="text-xs text-[#90a8c3] flex items-center gap-1">
                  <Clock size={10} />
                  Received: {new Date(selected.date).toLocaleString("en-IN", { dateStyle: "long", timeStyle: "short" })}
                </p>

                {/* Reply shortcut */}
                <a
                  href={`mailto:${selected.email}?subject=Re: Your enquiry to SGSPL CLOUD`}
                  className="inline-flex items-center gap-2 bg-[#0a2463] hover:bg-[#0d3080] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  <Mail size={14} /> Reply via Email
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-[#dce4ef] p-12 text-center h-full flex flex-col items-center justify-center">
                <MailOpen size={32} className="text-[#dce4ef] mb-3" />
                <p className="text-[#4a6080] text-sm">Select an enquiry to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
