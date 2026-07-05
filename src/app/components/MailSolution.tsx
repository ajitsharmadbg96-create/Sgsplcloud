import { CheckCircle2, Mail, Shield, RefreshCw, Cloud, Server, ArrowRight, Lock, Zap, Users } from "lucide-react";

const features = [
  { icon: <Cloud size={18} />, title: "Cloud + On-Premise", desc: "Seamlessly bridge your existing on-premise mail server with cloud services." },
  { icon: <Shield size={18} />, title: "Advanced Spam & Threat Protection", desc: "AI-powered filtering blocks phishing, malware, and spam before they reach users." },
  { icon: <RefreshCw size={18} />, title: "Zero-Downtime Migration", desc: "Move mailboxes without disrupting day-to-day operations." },
  { icon: <Lock size={18} />, title: "End-to-End Encryption", desc: "Emails in transit and at rest are fully encrypted to meet compliance needs." },
  { icon: <Zap size={18} />, title: "High Availability", desc: "99.9% uptime SLA with automatic failover between cloud and local servers." },
  { icon: <Users size={18} />, title: "Centralised Admin Console", desc: "Manage all mailboxes, policies, and groups from a single dashboard." },
];

const plans = [
  {
    name: "Starter",
    price: "₹1199",
    per: "user / mo",
    highlight: false,
    features: ["Up to 25 users", "30 GB mailbox", "Spam & virus filtering", "Webmail access", "Email support"],
  },
  {
    name: "Business",
    price: "₹2099",
    per: "user / mo",
    highlight: true,
    features: ["Up to 200 users", "100 GB mailbox", "Hybrid sync (cloud + on-prem)", "Advanced threat protection", "Mobile sync (ActiveSync)", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "get a quote",
    highlight: false,
    features: ["Unlimited users", "Unlimited storage", "Custom domain & branding", "Compliance archiving", "Dedicated infra option", "24/7 SLA support"],
  },
];

export function MailSolution() {
  return (
    <section id="mail-solution" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e8edf5] rounded-full px-4 py-1.5 mb-3">
            <Mail size={13} className="text-[#1e88e5]" />
            <span className="text-[#0a2463] text-xs font-semibold font-['Inter'] tracking-wider">PRODUCT</span>
          </div>
          <h2 className="text-[#0a2463] font-['Rajdhani']" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}>
            Mail Solution for Hybrid
          </h2>
          <p className="text-[#4a6080] text-sm mt-2 max-w-2xl mx-auto leading-relaxed font-['Inter']">
            The best of both worlds — keep control of your on-premise mail server while gaining the flexibility,
            security, and accessibility of the cloud. Built for growing Indian businesses.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="w-12 h-0.5 bg-[#1e88e5] rounded-full block" />
          </div>
        </div>

        {/* Hero banner */}
        <div
          className="rounded-2xl overflow-hidden mb-10 relative"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1a4a9a 100%)" }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
          <div className="relative grid md:grid-cols-2 gap-6 p-8 md:p-10 items-center">
            <div>
              <h3 className="text-white font-['Rajdhani'] text-2xl font-bold mb-3">
                Your Email Infrastructure,<br />
                <span className="text-[#60aeff]">Upgraded & Secured</span>
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed font-['Inter'] mb-5">
                SGSPL CLOUD's hybrid mail solution lets you retain your existing Exchange or Postfix server
                while syncing with Microsoft 365 or Google Workspace — giving you redundancy, compliance,
                and remote access without ripping out what works.
              </p>
              <button
                onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 bg-[#1e88e5] hover:bg-[#1976d2] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Request a Demo <ArrowRight size={14} />
              </button>
            </div>
            {/* Visual */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <Server size={28} className="text-[#60aeff] mx-auto mb-2" />
                <p className="text-white text-xs font-semibold font-['Rajdhani']">On-Premise</p>
                <p className="text-blue-300 text-[10px] mt-0.5">Exchange / Postfix</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-0.5 bg-[#1e88e5]" />
                <RefreshCw size={16} className="text-[#1e88e5]" />
                <div className="w-8 h-0.5 bg-[#1e88e5]" />
                <p className="text-blue-300 text-[9px] font-['Inter'] mt-0.5">HYBRID SYNC</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <Cloud size={28} className="text-[#60aeff] mx-auto mb-2" />
                <p className="text-white text-xs font-semibold font-['Rajdhani']">Cloud</p>
                <p className="text-blue-300 text-[10px] mt-0.5">M365 / Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#dce4ef]">
              <div className="w-8 h-8 rounded-lg bg-[#e8edf5] text-[#1e88e5] flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="text-[#0a2463] text-xs font-semibold font-['Rajdhani'] mb-0.5" style={{ fontSize: "0.85rem" }}>{f.title}</p>
                <p className="text-[#4a6080] font-['Inter']" style={{ fontSize: "0.72rem" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div>
          <p className="text-center text-xs text-[#4a6080] tracking-widest uppercase font-semibold font-['Inter'] mb-6">Pricing Plans</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border transition-all ${
                  plan.highlight
                    ? "bg-[#0a2463] border-[#1e88e5] shadow-xl"
                    : "bg-white border-[#dce4ef]"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-[#1e88e5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full mb-3 tracking-wider">
                    MOST POPULAR
                  </span>
                )}
                <h4 className={`font-['Rajdhani'] font-bold text-lg mb-1 ${plan.highlight ? "text-white" : "text-[#0a2463]"}`}>
                  {plan.name}
                </h4>
                <div className="flex items-end gap-1 mb-4">
                  <span className={`font-['Rajdhani'] font-bold leading-none ${plan.highlight ? "text-white" : "text-[#0a2463]"}`} style={{ fontSize: "1.8rem" }}>
                    {plan.price}
                  </span>
                  <span className={`text-xs pb-0.5 font-['Inter'] ${plan.highlight ? "text-blue-300" : "text-[#4a6080]"}`}>
                    {plan.per}
                  </span>
                </div>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#60aeff]" : "text-[#1e88e5]"}`} />
                      <span className={`text-xs font-['Inter'] ${plan.highlight ? "text-blue-100" : "text-[#4a6080]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                  className={`w-full py-2 rounded-lg text-sm font-medium transition-colors font-['Inter'] ${
                    plan.highlight
                      ? "bg-[#1e88e5] hover:bg-[#1976d2] text-white"
                      : "bg-[#e8edf5] hover:bg-[#dce4ef] text-[#0a2463]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
