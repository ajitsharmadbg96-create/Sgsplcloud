import { useState } from "react";
import { Save, CheckCircle2, Plus, Trash2 } from "lucide-react";
import { loadSiteData, saveSiteData } from "../store";

export default function EditAbout() {
  const [form, setForm] = useState(loadSiteData().about);
  const [saved, setSaved] = useState(false);

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const updateHighlight = (i: number, v: string) =>
    setForm((f) => {
      const h = [...f.highlights];
      h[i] = v;
      return { ...f, highlights: h };
    });

  const addHighlight = () =>
    setForm((f) => ({ ...f, highlights: [...f.highlights, "New highlight"] }));

  const removeHighlight = (i: number) =>
    setForm((f) => ({ ...f, highlights: f.highlights.filter((_, idx) => idx !== i) }));

  const handleSave = () => {
    const data = loadSiteData();
    data.about = form;
    saveSiteData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-[#0a2463] font-['Rajdhani'] text-2xl font-bold">About Section</h1>
        <p className="text-[#4a6080] text-sm mt-0.5">Edit your company story and highlights.</p>
      </div>

      <div className="bg-white rounded-xl border border-[#dce4ef] p-6 space-y-5">
        <Field label="Section Tagline" value={form.tagline} onChange={(v) => set("tagline", v)} placeholder="e.g. About Us" />
        <Field label="Heading" value={form.heading} onChange={(v) => set("heading", v)} placeholder="Main heading" />
        <Field label="Paragraph 1" value={form.para1} onChange={(v) => set("para1", v)} placeholder="First paragraph" textarea />
        <Field label="Paragraph 2" value={form.para2} onChange={(v) => set("para2", v)} placeholder="Second paragraph" textarea />

        <div className="border-t border-[#dce4ef] pt-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-[#0a2463]">Highlights / Key Points</p>
            <button onClick={addHighlight} className="text-xs text-[#1e88e5] hover:underline flex items-center gap-1">
              <Plus size={12} /> Add
            </button>
          </div>
          <div className="space-y-2">
            {form.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  value={h}
                  onChange={(e) => updateHighlight(i, e.target.value)}
                  className="flex-1 border border-[#dce4ef] rounded-lg px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']"
                />
                <button onClick={() => removeHighlight(i)} className="text-[#90a8c3] hover:text-red-500 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#dce4ef] pt-4">
          <p className="text-xs font-semibold text-[#0a2463] mb-3">Floating Badge</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Badge Value" value={form.badge} onChange={(v) => set("badge", v)} placeholder="e.g. 100%" small />
            <Field label="Badge Label" value={form.badgeSub} onChange={(v) => set("badgeSub", v)} placeholder="e.g. Client Retention Rate" small />
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

function Field({ label, value, onChange, placeholder, textarea, small }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; textarea?: boolean; small?: boolean;
}) {
  const cls = `w-full border border-[#dce4ef] rounded-lg px-3 py-2 text-sm text-[#0d1b2a] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']`;
  return (
    <div>
      <label className={`block font-medium text-[#0a2463] mb-1 font-['Inter'] ${small ? "text-[11px]" : "text-xs"}`}>{label}</label>
      {textarea
        ? <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`${cls} resize-none`} />
        : <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />
      }
    </div>
  );
}
