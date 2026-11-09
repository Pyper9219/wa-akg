"use client";

const features = [
  {
    category: "🤖 General",
    count: 30,
    color: "from-blue-500 to-cyan-500",
    desc: "Core · Help · Status",
    commands: [".menu", ".alive", ".ping", ".botinfo", ".owner", ".pair", ".profile", ".runtime", ".sessioncheck", ".settings", ".support", ".time", ".health", ".pluginlist", ".stats"],
  },
  {
    category: "👥 Group",
    count: 25,
    color: "from-purple-500 to-pink-500",
    desc: "Members · Polls · Mods",
    commands: [".add", ".admins", ".announce", ".close", ".delete", ".demote", ".event", ".groupdna", ".hidetag", ".invite", ".kick", ".lock", ".mute", ".open", ".poll", ".promote", ".resetwarn", ".revokeinvite", ".setdesc", ".setname", ".tagall", ".unlock"],
  },
  {
    category: "🛡️ Admin & Security",
    count: 21,
    color: "from-red-500 to-orange-500",
    desc: "Protection · Anti-link",
    commands: [".antilink", ".antibot", ".antispam", ".antitoxic", ".warn", ".block", ".unblock", ".antidelete", ".antiviewonce", ".restrict"],
  },
  {
    category: "🎬 Media",
    count: 21,
    color: "from-green-500 to-emerald-500",
    desc: "Stickers · Audio · VV",
    commands: [".sticker", ".tomp3", ".tovn", ".vv", ".take", ".toimg", ".gif", ".wallpaper", ".play", ".ytmp3", ".ytmp4", ".upload"],
  },
  {
    category: "🧠 Tools",
    count: 36,
    color: "from-yellow-500 to-amber-500",
    desc: "AI · QR · Weather",
    commands: [".ai", ".imagine", ".avatar", ".qr", ".weather", ".translate", ".calc", ".currency", ".wiki", ".lyrics", ".github", ".npm", ".url", ".ssweb"],
  },
  {
    category: "🎮 Fun",
    count: 24,
    color: "from-indigo-500 to-violet-500",
    desc: "Games · Memes · Jokes",
    commands: [".truth", ".dare", ".joke", ".meme", ".8ball", ".coinflip", ".dice", ".rps", ".trivia", ".quote", ".fact", ".compliment"],
  },
];

export default function FeaturesSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">Command Categories</h2>
        <span className="px-2 py-1 bg-[#00a884]/20 text-[#00a884] text-xs rounded-full">
          182 total
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.category}
            className="bg-[#1a2730] border border-[#2a3942] rounded-xl p-5 hover:border-[#00a884]/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{feature.category}</h3>
              <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                {feature.count} cmds
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{feature.desc}</p>

            <div className="flex flex-wrap gap-1.5">
              {feature.commands.slice(0, 6).map((cmd) => (
                <span
                  key={cmd}
                  className="px-2 py-1 bg-[#0b141a] text-[#00a884] text-xs font-mono rounded-md border border-[#2a3942] group-hover:border-[#00a884]/30 transition-colors"
                >
                  {cmd}
                </span>
              ))}
              {feature.commands.length > 6 && (
                <span className="px-2 py-1 text-gray-600 text-xs">
                  +{feature.commands.length - 6} more
                </span>
              )}
            </div>

            <div className="mt-4 h-1 bg-[#0b141a] rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-500`}
                style={{ width: `${(feature.count / 36) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
