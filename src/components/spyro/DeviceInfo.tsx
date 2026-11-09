"use client";

export default function DeviceInfo() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">🖥️ Bot Device Info</h2>
      </div>

      <div className="bg-[#1a2730] border border-[#2a3942] rounded-xl overflow-hidden">
        <div className="bg-[#111b21] px-6 py-4 border-b border-[#2a3942]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-500 font-mono">spyro-bot@server:~</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-[#00a884] uppercase tracking-wider mb-3">
              📦 Platform
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoRow label="OS" value="Linux 6.8.0-1053-aws" />
              <InfoRow label="Platform" value="linux" />
              <InfoRow label="Arch" value="x64" />
              <InfoRow label="Hostname" value="srv-db69vmp42hec73bfc9m0" mono />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#00a884] uppercase tracking-wider mb-3">
              ⚡ Runtime
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoRow label="Node.js" value="v22.23.3" />
              <InfoRow label="Bot" value="Spyro Bot v1.0.0" />
              <InfoRow label="PID" value="1" />
              <InfoRow label="Uptime (system)" value="170d 19h 50m" />
              <InfoRow label="Uptime (bot)" value="12m" highlight />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#00a884] uppercase tracking-wider mb-3">
              💾 CPU
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoRow label="Model" value="AMD EPYC 7R13 Processor" />
              <InfoRow label="Cores" value="8" />
              <InfoRow label="Load avg" value="2.98, 4.20, 4.67" />
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>CPU Load</span>
                <span>37%</span>
              </div>
              <div className="h-2 bg-[#0b141a] rounded-full overflow-hidden">
                <div className="h-full w-[37%] bg-gradient-to-r from-[#00a884] to-[#25d366] rounded-full"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#00a884] uppercase tracking-wider mb-3">
              📊 Memory
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoRow label="Bot RSS" value="161.1 MB" />
              <InfoRow label="Heap used" value="54.1 MB" />
              <InfoRow label="Heap total" value="56.6 MB" />
              <InfoRow label="System used" value="19,390 MB" />
              <InfoRow label="System total" value="31,387 MB" />
              <InfoRow label="System free" value="11,997 MB" />
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>System Memory</span>
                <span>61.8%</span>
              </div>
              <div className="h-2 bg-[#0b141a] rounded-full overflow-hidden">
                <div className="h-full w-[62%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#00a884] uppercase tracking-wider mb-3">
              ⚙️ Config
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoRow label="Prefix" value="." />
              <InfoRow label="Commands" value="182" highlight />
              <InfoRow label="AI" value="FREE (Pollinations + Kilo + Puter)" />
              <InfoRow label="AI limit" value="30/day" />
            </div>
          </div>

          <div className="pt-4 border-t border-[#2a3942]">
            <p className="text-xs text-gray-600 italic">
              This is the bot's own runtime info — no user data is shown.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[#1a2730] border border-[#2a3942] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00a884] to-[#25d366] rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-[#00a884]/20">
            🤖
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">Spyro Bot</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              <div>
                <p className="text-xs text-gray-500">Version</p>
                <p className="text-sm font-mono text-[#00a884]">1.0.0</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Uptime</p>
                <p className="text-sm font-mono text-white">0d 0h 7m 23s</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Commands</p>
                <p className="text-sm font-mono text-[#00a884]">182</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Status</p>
                <p className="text-sm font-mono text-[#25d366]">● qr_ready</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#00a884] mb-2">🎨 AI Features</h4>
            <ul className="space-y-1">
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.imagine &lt;prompt&gt;</code> — generate images (FREE!)
              </li>
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.avatar &lt;desc&gt;</code> — generate avatars (FREE!)
              </li>
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.ai &lt;question&gt;</code> — AI chat (30/day)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#00a884] mb-2">🎬 Media Features</h4>
            <ul className="space-y-1">
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.sticker</code> — image/video → sticker
              </li>
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.tomp3</code> — video/audio → MP3
              </li>
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.tovn</code> — audio → voice note
              </li>
              <li className="text-xs text-gray-400">
                <code className="text-[#00a884]">.vv</code> — save view-once media
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  mono,
  highlight,
}: {
  label: string;
  value: string;
  mono?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between bg-[#0b141a] rounded-lg px-3 py-2">
      <span className="text-xs text-gray-500">{label}:</span>
      <span className={`text-xs ${highlight ? "text-[#25d366] font-bold" : "text-gray-300"} ${mono ? "font-mono" : ""}`}>
        {value}
      </span>
    </div>
  );
}
