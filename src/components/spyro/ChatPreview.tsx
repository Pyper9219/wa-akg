"use client";

import { useState } from "react";

interface Message {
  id: number;
  sender: "user" | "bot" | "other";
  text: string;
  time: string;
  isMenu?: boolean;
}

const messages: Message[] = [
  { id: 1, sender: "other", text: "Hey, what can this bot do?", time: "10:30 AM" },
  { id: 2, sender: "user", text: ".menu", time: "10:30 AM" },
  {
    id: 3,
    sender: "bot",
    text: `*━━ 📂 COMMAND DIRECTORY ━━*

🤖 *GENERAL* — 30 cmds _Core · Help · Status_
\`\`\`.menu general\`\`\`

👥 *GROUP* — 25 cmds _Members · Polls · Mods_
\`\`\`.menu group\`\`\`

🛡️ *ADMIN & SECURITY* — 21 cmds _Protection · Anti-link_
\`\`\`.menu admin\`\`\`

🎬 *MEDIA* — 21 cmds _Stickers · Audio · VV_
\`\`\`.menu media\`\`\`

🧠 *TOOLS* — 36 cmds _AI · QR · Weather_
\`\`\`.menu tools\`\`\`

🎮 *FUN* — 24 cmds _Games · Memes · Jokes_
\`\`\`.menu fun\`\`\`

*━━ ⚡ QUICK ACCESS ━━*
\`\`\`.ping\`\`\` · \`\`\`.alive\`\`\` · \`\`\`.help\`\`\` · \`\`\`.channel\`\`\`

*━━ ✦ FEATURED ━━*
🎨 \`\`\`.imagine <prompt>\`\`\` — AI images (free)
🧠 \`\`\`.ai <question>\`\`\` — AI chat (30/day)
🎛️ \`\`\`.customize status\`\`\` — personalize
📅 \`\`\`.schedule\`\`\` · \`\`\`.event\`\`\` · \`\`\`.autorule\`\`\`

_SPYRO INTELLIGENCE • © SPYRO TECHNOLOGIES_`,
    time: "10:30 AM",
    isMenu: true,
  },
  { id: 4, sender: "other", text: "Wow! How do I generate an image?", time: "10:31 AM" },
  { id: 5, sender: "user", text: ".imagine a cyberpunk cat with neon lights", time: "10:31 AM" },
  {
    id: 6,
    sender: "bot",
    text: '🎨 Generating image...\n\n✅ Here\'s your AI-generated image!\n\n_Prompt: "a cyberpunk cat with neon lights"_\n_AI Provider: Pollinations (FREE)_',
    time: "10:32 AM",
  },
  { id: 7, sender: "other", text: "Can it download view once messages?", time: "10:33 AM" },
  { id: 8, sender: "user", text: "Yes! Use .vv or .antiviewonce to auto-capture them", time: "10:33 AM" },
];

export default function ChatPreview() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">💬 Chat Preview</h2>
        <span className="text-sm text-gray-500">See the bot in action</span>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-[#0b141a] rounded-3xl border-2 border-[#2a3942] overflow-hidden shadow-2xl shadow-black/50">
          <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 border-b border-[#2a3942]">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00a884] to-[#25d366] rounded-full flex items-center justify-center text-lg">
              🤖
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">Spyro Bot</p>
              <p className="text-[#00a884] text-xs">online</p>
            </div>
            <div className="flex gap-3 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
              </svg>
            </div>
          </div>

          <div className="h-[500px] overflow-y-auto p-4 space-y-3 bg-[#0b141a]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2730' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 ${
                    msg.sender === "user"
                      ? "bg-[#005c4b] text-white rounded-br-sm"
                      : msg.sender === "bot"
                      ? "bg-[#1f2c34] text-gray-200 rounded-bl-sm border border-[#2a3942]"
                      : "bg-[#1f2c34] text-gray-300 rounded-bl-sm"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <p className="text-[#00a884] text-xs font-bold mb-1">🤖 Spyro Bot</p>
                  )}
                  <p className={`text-sm whitespace-pre-wrap ${msg.isMenu ? "font-mono text-xs leading-relaxed" : ""}`}>
                    {msg.text}
                  </p>
                  <p className="text-[10px] text-gray-500 text-right mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 border-t border-[#2a3942]">
            <span className="text-gray-400 text-xl">😊</span>
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
              <p className="text-gray-500 text-sm">Type a message</p>
            </div>
            <div className="w-8 h-8 bg-[#00a884] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => setShowFullMenu(!showFullMenu)}
            className="text-[#00a884] text-sm hover:underline"
          >
            {showFullMenu ? "▲ Hide" : "▼ Show"} full menu output
          </button>
        </div>

        {showFullMenu && (
          <div className="mt-4 bg-[#1a2730] border border-[#2a3942] rounded-xl p-4 overflow-x-auto">
            <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">{`*━━ 📂 COMMAND DIRECTORY ━━*

🤖 *GENERAL* — \`\`\`30 cmds\`\`\` _Core · Help · Status_
\`\`\`.menu general\`\`\`

👥 *GROUP* — \`\`\`25 cmds\`\`\` _Members · Polls · Mods_
\`\`\`.menu group\`\`\`

🛡️ *ADMIN & SECURITY* — \`\`\`21 cmds\`\`\` _Protection · Anti-link_
\`\`\`.menu admin\`\`\`

🎬 *MEDIA* — \`\`\`21 cmds\`\`\` _Stickers · Audio · VV_
\`\`\`.menu media\`\`\`

🧠 *TOOLS* — \`\`\`36 cmds\`\`\` _AI · QR · Weather_
\`\`\`.menu tools\`\`\`

🎮 *FUN* — \`\`\`24 cmds\`\`\` _Games · Memes · Jokes_
\`\`\`.menu fun\`\`\`

*━━ ⚡ QUICK ACCESS ━━*
\`\`\`.ping\`\`\` · \`\`\`.alive\`\`\` · \`\`\`.help\`\`\` · \`\`\`.channel\`\`\`

*━━ ✦ FEATURED ━━*
🎨 \`\`\`.imagine <prompt>\`\`\` — AI images (free)
🧠 \`\`\`.ai <question>\`\`\` — AI chat (30/day)
🎛️ \`\`\`.customize status\`\`\` — personalize
📅 \`\`\`.schedule\`\`\` · \`\`\`.event\`\`\` · \`\`\`.autorule\`\`\`

_SPYRO INTELLIGENCE • © SPYRO TECHNOLOGIES_`}</pre>
          </div>
        )}
      </div>
    </section>
  );
}
