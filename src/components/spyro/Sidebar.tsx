"use client";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: "home", label: "Dashboard", icon: "🏠" },
  { id: "commands", label: "Commands", icon: "📂" },
  { id: "features", label: "Features", icon: "⚡" },
  { id: "device", label: "Device Info", icon: "🖥️" },
  { id: "chat", label: "Chat Preview", icon: "💬" },
];

export default function Sidebar({
  activeSection,
  setActiveSection,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#111b21] border-r border-[#2a3942] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00a884] to-[#25d366] rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-[#00a884]/20">
              🤖
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Spyro Bot</h1>
              <p className="text-xs text-[#00a884]">v1.0.0 • Online</p>
            </div>
          </div>

          <div className="mb-6 p-3 bg-[#1a2730] rounded-lg border border-[#2a3942]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#25d366] rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Connected</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">182 commands loaded</p>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-[#00a884]/20 text-[#00a884] border border-[#00a884]/30"
                    : "text-gray-400 hover:bg-[#1a2730] hover:text-gray-200"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#2a3942]">
          <div className="text-center">
            <p className="text-xs text-gray-500">SPYRO INTELLIGENCE</p>
            <p className="text-xs text-gray-600 mt-1">© SPYRO TECHNOLOGIES</p>
          </div>
        </div>
      </aside>
    </>
  );
}
