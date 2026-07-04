import { useState } from "react";
import { useNavigate } from "react-router";
import { Cloud, Eye, EyeOff, Lock, User } from "lucide-react";
import { login } from "../store";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ user: "", pass: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (login(form.user, form.pass)) {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid username or password.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #0a2463 0%, #1a4a9a 100%)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#1e88e5] flex items-center justify-center mb-3 shadow-lg">
            <Cloud size={28} className="text-white" />
          </div>
          <h1 className="text-white font-['Rajdhani'] text-2xl font-bold tracking-wider">
            SGSPL CLOUD
          </h1>
          <p className="text-blue-300 text-xs tracking-widest mt-0.5">ADMIN PANEL</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-[#0a2463] font-['Rajdhani'] text-xl font-bold mb-1">
            Welcome back
          </h2>
          <p className="text-[#4a6080] text-xs mb-6 font-['Inter']">
            Sign in to manage your website
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">
                Username
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#90a8c3]" />
                <input
                  type="text"
                  autoComplete="username"
                  required
                  value={form.user}
                  onChange={(e) => setForm({ ...form, user: e.target.value })}
                  placeholder="admin"
                  className="w-full border border-[#dce4ef] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[#0d1b2a] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#0a2463] mb-1.5 font-['Inter']">
                Password
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#90a8c3]" />
                <input
                  type={showPass ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={form.pass}
                  onChange={(e) => setForm({ ...form, pass: e.target.value })}
                  placeholder="••••••••"
                  className="w-full border border-[#dce4ef] rounded-lg pl-9 pr-10 py-2.5 text-sm text-[#0d1b2a] bg-[#f8fafc] focus:outline-none focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-['Inter']"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#90a8c3] hover:text-[#0a2463]"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2 font-['Inter']">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0a2463] hover:bg-[#0d3080] disabled:opacity-60 text-white py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 font-['Inter']"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-[#4a6080] font-['Inter']">
            <a href="/" className="text-[#1e88e5] hover:underline">
              ← Back to website
            </a>
          </p>
        </div>

        <p className="text-blue-300/50 text-xs text-center mt-6 font-['Inter']">
          SGSPL CLOUD Admin v1.0
        </p>
      </div>
    </div>
  );
}
