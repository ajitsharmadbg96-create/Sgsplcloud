import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { addEnquiry, type ContactContent } from "../store";

interface ContactProps {
  contact?: ContactContent;
}

export function Contact({ contact }: ContactProps) {
  const phone = contact?.phone ?? "+91 7982023117";
  const email = contact?.email ?? "ajit.sharma@sgspl.cloud";
  const address = contact?.address ?? "India";
  const officeHours = contact?.officeHours ?? "Mon–Sat, 9am–7pm IST";

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({ name: form.name, email: form.email, phone: form.phone, service: form.service, message: form.message });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#1e88e5] text-xs tracking-widest font-['Inter'] font-semibold uppercase">Get In Touch</span>
          <h2 className="text-[#0a2463] mt-2 font-['Rajdhani']" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700 }}>
            Contact Us
          </h2>
          <p className="text-[#4a6080] text-sm mt-3 max-w-xl mx-auto leading-relaxed font-['Inter']">
            Have a project in mind or need IT support? Reach out to us — our team will get back to you within 24 hours.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="w-16 h-1 bg-[#1e88e5] rounded-full block" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {[
              { icon: <Phone size={20} className="text-[#1e88e5]" />, label: "Call Us", value: phone, sub: officeHours, href: `tel:${phone}` },
              { icon: <Mail size={20} className="text-[#1e88e5]" />, label: "Email Us", value: email, sub: "We reply within 24 hours", href: `mailto:${email}` },
              { icon: <MapPin size={20} className="text-[#1e88e5]" />, label: "Our Office", value: "SGSPL CLOUD", sub: address, href: null },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-xl p-5 border border-[#dce4ef] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e8edf5] flex items-center justify-center shrink-0">{c.icon}</div>
                <div>
                  <p className="text-[#4a6080] text-xs font-['Inter']">{c.label}</p>
                  {c.href
                    ? <a href={c.href} className="text-[#0a2463] text-sm font-medium hover:text-[#1e88e5] transition-colors font-['Inter']">{c.value}</a>
                    : <p className="text-[#0a2463] text-sm font-medium font-['Inter']">{c.value}</p>
                  }
                  <p className="text-[#4a6080] text-xs mt-0.5 font-['Inter']">{c.sub}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl overflow-hidden h-40">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&h=300&fit=crop&auto=format" alt="IT support" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-[#dce4ef] shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 size={56} className="text-[#0a7c59] mb-4" />
                <h3 className="text-[#0a2463] font-['Rajdhani'] mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>Message Sent!</h3>
                <p className="text-[#4a6080] text-sm font-['Inter']">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }} className="mt-6 text-[#1e88e5] text-sm hover:underline font-['Inter']">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border border-[#dce4ef] rounded-lg px-4 py-2.5 text-sm text-[#0d1b2a] placeholder-[#90a8c3] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className="w-full border border-[#dce4ef] rounded-lg px-4 py-2.5 text-sm text-[#0d1b2a] placeholder-[#90a8c3] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full border border-[#dce4ef] rounded-lg px-4 py-2.5 text-sm text-[#0d1b2a] placeholder-[#90a8c3] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className="w-full border border-[#dce4ef] rounded-lg px-4 py-2.5 text-sm text-[#0d1b2a] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']">
                      <option value="">Select a service</option>
                      <option>Cloud Services</option>
                      <option>Cybersecurity</option>
                      <option>Server & Data Center</option>
                      <option>Networking Solutions</option>
                      <option>IT Support & AMC</option>
                      <option>Software Solutions</option>
                      <option>Data Backup & Recovery</option>
                      <option>Internet & Connectivity</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your IT requirements..." className="w-full border border-[#dce4ef] rounded-lg px-4 py-2.5 text-sm text-[#0d1b2a] placeholder-[#90a8c3] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all resize-none font-['Inter']" />
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0a2463] hover:bg-[#0d3080] text-white px-8 py-3 rounded-lg font-medium text-sm transition-colors duration-200">
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
