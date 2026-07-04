import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import {
  Cloud, LayoutDashboard, Layers, Info, Phone,
  MessageSquare, Settings, LogOut, Menu, X, ExternalLink,
} from "lucide-react";
import { isAuthenticated, logout, loadSiteData } from "../store";

const navItems = [
  { to: "/admin/dashboard", icon: <LayoutDashboard size={16} />, label: "Dashboard" },
  { to: "/admin/hero", icon: <Layers size={16} />, label: "Hero Section" },
  { to: "/admin/services", icon: <Settings size={16} />, label: "Services" },
  { to: "/admin/about", icon: <Info size={16} />, label: "About" },
  { to: "/admin/contact-info", icon: <Phone size={16} />, label: "Contact Info" },
  { to: "/admin/enquiries", icon: <MessageSquare size={16} />, label: "Enquiries" },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (!isAuthenticated()) navigate("/admin");
  }, [navigate]);

  useEffect(() => {
    const update = () => {
      const data = loadSiteData();
      setUnread(data.enquiries.filter((e) => !e.read).length);
    };
    update();
    window.addEventListener("sitedata", update);
    return () => window.removeEventListener("sitedata", update);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-[#0a2463] w-60">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1e88e5] flex items-center justify-center">
            <Cloud size={16} className="text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-['Rajdhani'] font-bold tracking-wider leading-none">
              SGSPL CLOUD
            </p>
            <p className="text-blue-300 text-[9px] tracking-widest leading-none mt-0.5">
              ADMIN PANEL
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-['Inter'] transition-colors duration-150 ${
                isActive
                  ? "bg-[#1e88e5] text-white"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
            {item.label === "Enquiries" && unread > 0 && (
              <span className="ml-auto bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {unread}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-white/10 space-y-0.5">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-blue-200 hover:bg-white/10 hover:text-white transition-colors font-['Inter']"
        >
          <ExternalLink size={16} />
          View Website
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-blue-200 hover:bg-red-500/20 hover:text-red-300 transition-colors font-['Inter']"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-[#f0f4f8] overflow-hidden font-['Inter']">
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col h-full shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="flex flex-col h-full">
            <Sidebar />
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-[#dce4ef] px-4 sm:px-6 h-14 flex items-center gap-3 shrink-0">
          <button
            className="md:hidden text-[#0a2463]"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
          <div className="flex-1">
            <span className="text-[#0a2463] text-sm font-semibold">Website Manager</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-[#4a6080] hover:text-red-500 flex items-center gap-1.5 transition-colors"
          >
            <LogOut size={13} /> Sign out
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
