import { useState } from "react";
import { Save, CheckCircle2 } from "lucide-react";
import { loadSiteData, saveSiteData } from "../store";

export default function EditContactInfo() {
  const [form, setForm] = useState(loadSiteData().contact);
  const [saved, setSaved] = useState(false);

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSave = () => {
    const data = loadSiteData();
    data.contact = form;
    saveSiteData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-[#0a2463] font-['Rajdhani'] text-2xl font-bold">Contact Info</h1>
        <p className="text-[#4a6080] text-sm mt-0.5">Update your contact details shown on the website.</p>
      </div>

      <div className="bg-white rounded-xl border border-[#dce4ef] p-6 space-y-5">
        {[
          { key: "phone" as const, label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
          { key: "email" as const, label: "Email Address", placeholder: "you@company.com", type: "email" },
          { key: "address" as const, label: "Office Address", placeholder: "City, State, India", type: "text" },
          { key: "officeHours" as const, label: "Office Hours", placeholder: "Mon–Sat, 9am–7pm IST", type: "text" },
        ].map(({ key, label, placeholder, type }) => (
          <div key={key}>
            <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">{label}</label>
            <input
              type={type}
              value={form[key]}
              onChange={(e) => set(key, e.target.value)}
              placeholder={placeholder}
              className="w-full border border-[#dce4ef] rounded-lg px-3 py-2.5 text-sm text-[#0d1b2a] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']"
            />
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
