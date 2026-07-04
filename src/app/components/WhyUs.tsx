import { Clock, Users, Award, Headphones, TrendingUp, Lock } from "lucide-react";

const reasons = [
  {
    icon: <Clock size={24} />,
    title: "Quick Response",
    desc: "As a small team, we move fast. No ticket queues — you reach us directly and get answers the same day.",
  },
  {
    icon: <Users size={24} />,
    title: "Direct Expert Access",
    desc: "You work with the engineer, not a middleman. Your issues are handled by the person who knows your setup.",
  },
  {
    icon: <Award size={24} />,
    title: "100% Client Retention",
    desc: "Every client who has worked with us has stayed with us. We let our results speak for themselves.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Startup-Friendly Pricing",
    desc: "Flexible pricing designed for small businesses and startups. Pay for what you need, scale as you grow.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Grow With Us",
    desc: "We are growing too — which means we are invested in your success just as much as our own.",
  },
  {
    icon: <Lock size={24} />,
    title: "Security First",
    desc: "Security is not an add-on for us — it is built into every solution we design and deploy.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-12"
      style={{
        background: "linear-gradient(135deg, #0a2463 0%, #0d3080 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-blue-300 text-xs tracking-widest font-['Inter'] font-semibold uppercase">
            Why Choose Us
          </span>
          <h2
            className="text-white mt-2 font-['Rajdhani']"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700 }}
          >
            Small Team, Big Commitment
          </h2>
          <p className="text-blue-200 text-sm mt-3 max-w-xl mx-auto leading-relaxed font-['Inter']">
            Being a startup is our strength. We are agile, accountable, and genuinely
            invested in every client we work with.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="w-16 h-1 bg-[#1e88e5] rounded-full block" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white/8 border border-white/12 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1e88e5]/20 flex items-center justify-center text-[#60aeff] mb-4">
                {item.icon}
              </div>
              <h3
                className="text-white mb-2 font-['Rajdhani']"
                style={{ fontSize: "1.05rem", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p className="text-blue-200 text-xs leading-relaxed font-['Inter']">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-blue-200 text-sm font-['Inter'] mb-5">
            Ready to work with a team that genuinely cares about your business?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-[#1e88e5] hover:bg-[#1976d2] text-white px-8 py-3 rounded font-medium text-sm transition-colors duration-200"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
}
