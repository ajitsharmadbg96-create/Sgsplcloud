import { useState } from "react";
import { Save, CheckCircle2, Plus, Trash2, GripVertical } from "lucide-react";
import { loadSiteData, saveSiteData, type ServiceItem } from "../store";

const COLORS = ["#1e88e5", "#0a7c59", "#6d28d9", "#c05621", "#0a2463", "#b91c1c", "#065f46", "#1e40af", "#d97706", "#be185d"];

export default function EditServices() {
  const [services, setServices] = useState<ServiceItem[]>(loadSiteData().services);
  const [saved, setSaved] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);

  const update = (id: string, key: keyof ServiceItem, value: string) =>
    setServices((s) => s.map((item) => item.id === id ? { ...item, [key]: value } : item));

  const addNew = () => {
    const newItem: ServiceItem = {
      id: Date.now().toString(),
      title: "New Service",
      desc: "Describe your service here.",
      color: "#1e88e5",
    };
    setServices((s) => [...s, newItem]);
    setEditing(newItem.id);
  };

  const remove = (id: string) => setServices((s) => s.filter((item) => item.id !== id));

  const handleSave = () => {
    const data = loadSiteData();
    data.services = services;
    saveSiteData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[#0a2463] font-['Rajdhani'] text-2xl font-bold">Services</h1>
          <p className="text-[#4a6080] text-sm mt-0.5">Manage the services shown on your website.</p>
        </div>
        <button
          onClick={addNew}
          className="flex items-center gap-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={15} /> Add Service
        </button>
      </div>

      <div className="space-y-3">
        {services.map((svc) => (
          <div key={svc.id} className="bg-white rounded-xl border border-[#dce4ef] overflow-hidden">
            {/* Collapsed header */}
            <div
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#f8fafc] transition-colors"
              onClick={() => setEditing(editing === svc.id ? null : svc.id)}
            >
              <GripVertical size={16} className="text-[#90a8c3] shrink-0" />
              <div
                className="w-4 h-4 rounded shrink-0"
                style={{ backgroundColor: svc.color }}
              />
              <p className="flex-1 text-sm font-medium text-[#0a2463] font-['Inter']">{svc.title}</p>
              <button
                onClick={(e) => { e.stopPropagation(); remove(svc.id); }}
                className="text-[#90a8c3] hover:text-red-500 transition-colors p-1"
              >
                <Trash2 size={14} />
              </button>
            </div>

            {/* Expanded editor */}
            {editing === svc.id && (
              <div className="px-4 pb-4 border-t border-[#dce4ef] pt-4 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[#0a2463] mb-1 font-['Inter']">Service Title</label>
                  <input
                    type="text"
                    value={svc.title}
                    onChange={(e) => update(svc.id, "title", e.target.value)}
                    className="w-full border border-[#dce4ef] rounded-lg px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0a2463] mb-1 font-['Inter']">Description</label>
                  <textarea
                    rows={3}
                    value={svc.desc}
                    onChange={(e) => update(svc.id, "desc", e.target.value)}
                    className="w-full border border-[#dce4ef] rounded-lg px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all resize-none font-['Inter']"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0a2463] mb-2 font-['Inter']">Icon Color</label>
                  <div className="flex flex-wrap gap-2">
                    {COLORS.map((c) => (
                      <button
                        key={c}
                        onClick={() => update(svc.id, "color", c)}
                        className="w-6 h-6 rounded-full border-2 transition-all"
                        style={{
                          backgroundColor: c,
                          borderColor: svc.color === c ? "#0a2463" : "transparent",
                          transform: svc.color === c ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="flex items-center gap-2 bg-[#0a2463] hover:bg-[#0d3080] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
      >
        {saved ? <CheckCircle2 size={16} /> : <Save size={16} />}
        {saved ? "Saved!" : "Save Changes"}
      </button>
    </div>
  );
}
