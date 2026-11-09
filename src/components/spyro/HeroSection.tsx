"use client";

export default function HeroSection() {
  return (
    <section className="mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00a884] via-[#025144] to-[#0b141a] p-8 md:p-12 mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#25d366] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00a884] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#25d366]/20 text-[#25d366] text-xs font-medium rounded-full border border-[#25d366]/30">
              ● ONLINE
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full">
              v1.0.0
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spyro Bot
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-6">
            Your intelligent WhatsApp companion with 182 commands across 6 categories.
            Features AI image generation, auto-reply, view-once media download, status auto-view, and much more.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-2xl font-bold text-white">182</p>
              <p className="text-xs text-white/60">Commands</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-2xl font-bold text-white">6</p>
              <p className="text-xs text-white/60">Categories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-2xl font-bold text-white">FREE</p>
              <p className="text-xs text-white/60">AI Features</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
              <p className="text-2xl font-bold text-white">30/day</p>
              <p className="text-xs text-white/60">AI Limit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { cmd: ".ping", label: "Check Latency", icon: "📡" },
          { cmd: ".alive", label: "Bot Status", icon: "💚" },
          { cmd: ".help", label: "Get Help", icon: "❓" },
          { cmd: ".channel", label: "Updates", icon: "📢" },
        ].map((item) => (
          <div
            key={item.cmd}
            className="bg-[#1a2730] border border-[#2a3942] rounded-xl p-4 hover:border-[#00a884]/50 transition-all duration-200 cursor-pointer group"
          >
            <span className="text-2xl mb-2 block">{item.icon}</span>
            <p className="text-sm font-mono text-[#00a884] group-hover:text-[#25d366] transition-colors">
              {item.cmd}
            </p>
            <p className="text-xs text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
