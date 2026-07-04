import { useState } from "react";
import { Save, CheckCircle2 } from "lucide-react";
import { loadSiteData, saveSiteData } from "../store";

export default function EditHero() {
  const [form, setForm] = useState(loadSiteData().hero);
  const [saved, setSaved] = useState(false);

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSave = () => {
    const data = loadSiteData();
    data.hero = form;
    saveSiteData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-[#0a2463] font-['Rajdhani'] text-2xl font-bold">Hero Section</h1>
        <p className="text-[#4a6080] text-sm mt-0.5">Edit the top banner of your homepage.</p>
      </div>

      <div className="bg-white rounded-xl border border-[#dce4ef] p-6 space-y-5">
        <Field label="Badge Text" value={form.badge} onChange={(v) => set("badge", v)} placeholder="e.g. GROWING IT STARTUP · EST. 2022" />
        <Field label="Headline" value={form.headline} onChange={(v) => set("headline", v)} placeholder="Main headline" textarea />
        <Field label="Sub-headline" value={form.subheadline} onChange={(v) => set("subheadline", v)} placeholder="Supporting description text" textarea />

        <div className="border-t border-[#dce4ef] pt-4">
          <p className="text-xs font-semibold text-[#0a2463] mb-3">Stats Labels</p>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Stat 1 Label" value={form.stat1Label} onChange={(v) => set("stat1Label", v)} placeholder="e.g. Happy Clients" small />
            <Field label="Stat 2 Label" value={form.stat2Label} onChange={(v) => set("stat2Label", v)} placeholder="e.g. Years in Business" small />
            <Field label="Stat 3 Label" value={form.stat3Label} onChange={(v) => set("stat3Label", v)} placeholder="e.g. Client Retention" small />
          </div>
        </div>
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

function Field({
  label, value, onChange, placeholder, textarea, small,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  small?: boolean;
}) {
  const cls = `w-full border border-[#dce4ef] rounded-lg px-3 py-2 text-sm text-[#0d1b2a] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']`;
  return (
    <div>
      <label className={`block font-medium text-[#0a2463] mb-1 font-['Inter'] ${small ? "text-[11px]" : "text-xs"}`}>
        {label}
      </label>
      {textarea ? (
        <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`${cls} resize-none`} />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}
