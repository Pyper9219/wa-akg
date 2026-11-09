"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a3942] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00a884] to-[#25d366] rounded-xl flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-white">Spyro Bot</h3>
                <p className="text-xs text-gray-500">v1.0.0</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Your intelligent WhatsApp companion with 182 commands, AI features, and powerful automation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Featured Commands</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { cmd: ".imagine", desc: "AI Images" },
                { cmd: ".ai", desc: "AI Chat" },
                { cmd: ".vv", desc: "View Once" },
                { cmd: ".sticker", desc: "Stickers" },
                { cmd: ".menu", desc: "Commands" },
                { cmd: ".schedule", desc: "Scheduler" },
              ].map((item) => (
                <div key={item.cmd} className="flex items-center gap-2">
                  <code className="text-xs text-[#00a884]">{item.cmd}</code>
                  <span className="text-xs text-gray-600">— {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Bot Info</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Platform</span>
                <span className="text-xs text-gray-300">Linux x64</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Node.js</span>
                <span className="text-xs text-gray-300">v22.23.3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Commands</span>
                <span className="text-xs text-[#00a884]">182</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">AI Provider</span>
                <span className="text-xs text-gray-300">Pollinations + Kilo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Status</span>
                <span className="text-xs text-[#25d366]">● Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2a3942] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            SPYRO INTELLIGENCE • © SPYRO TECHNOLOGIES
          </p>
          <p className="text-xs text-gray-600">
            "Spyro Bot — your intelligent WhatsApp companion"
          </p>
        </div>
      </div>
    </footer>
  );
}
