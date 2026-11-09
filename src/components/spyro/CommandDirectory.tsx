"use client";

import { useState } from "react";

interface Command {
  name: string;
  aliases: string;
  description: string;
}

interface Category {
  id: string;
  emoji: string;
  name: string;
  count: number;
  subtitle: string;
  commands: Command[];
}

const categories: Category[] = [
  {
    id: "general",
    emoji: "🤖",
    name: "GENERAL",
    count: 30,
    subtitle: "Core · Help · Status",
    commands: [
      { name: ".quote", aliases: "q", description: "Reply with a quoted message" },
      { name: ".alive", aliases: "a, status, online", description: "Show bot status, uptime, and connection health" },
      { name: ".appeal", aliases: "review, dispute", description: "Request a review of a moderation action" },
      { name: ".botinfo", aliases: "info, about", description: "Show version, runtime, and bot information" },
      { name: ".channel", aliases: "join, joinchannel, updates", description: "Get the link to join our WhatsApp channel" },
      { name: ".date", aliases: "today", description: "Show the current date" },
      { name: ".deviceinfo", aliases: "device, sysinfo, runtime", description: "Report the bot's own runtime and platform information" },
      { name: ".donate", aliases: "tip, coffee", description: "Show donation information" },
      { name: ".feedback", aliases: "fb", description: "Submit feedback to the owner" },
      { name: ".groupinfo", aliases: "ginfo", description: "Show group subject, member count, admins, and settings" },
      { name: ".help", aliases: "h, ?", description: "Show help for a specific command" },
      { name: ".jid", aliases: "id", description: "Show current chat and sender JIDs" },
      { name: ".language", aliases: "lang", description: "Select a supported interface language" },
      { name: ".menu", aliases: "m, commands, list", description: "Show the SPYRO BOT command directory" },
      { name: ".owner", aliases: "contact, creator", description: "Show the bot owner with a generated profile picture" },
      { name: ".pair", aliases: "paircode, link, connect", description: "Get a pairing code to link your WhatsApp" },
      { name: ".ping", aliases: "p", description: "Check bot response latency" },
      { name: ".privacy", aliases: "datapolicy, mydata, gdpr", description: "See what the bot stores about you" },
      { name: ".privacyguide", aliases: "privacy, privacysettings", description: "Guide to WhatsApp privacy settings" },
      { name: ".profile", aliases: "whoami, me", description: "Show supported public profile information" },
      { name: ".report", aliases: "reportuser, flag", description: "Submit a moderation report about a user" },
      { name: ".rules", aliases: "grouprules", description: "Show the configured group rules" },
      { name: ".runtime", aliases: "uptime", description: "Show formatted bot uptime" },
      { name: ".sessioncheck", aliases: "session, conncheck", description: "Check the bot's connection and session health" },
      { name: ".settings", aliases: "config", description: "Show permitted bot settings for this chat" },
      { name: ".support", aliases: "support", description: "Show support information" },
      { name: ".time", aliases: "clock", description: "Show the current time" },
      { name: ".health", aliases: "diagnostics", description: "Run a quick health check" },
      { name: ".pluginlist", aliases: "plugins, cmdlist", description: "List loaded plugins and commands" },
      { name: ".stats", aliases: "statistics", description: "Show bot usage statistics" },
    ],
  },
  {
    id: "group",
    emoji: "👥",
    name: "GROUP",
    count: 25,
    subtitle: "Members · Polls · Mods",
    commands: [
      { name: ".add", aliases: "invite-user", description: "Attempt to add a participant" },
      { name: ".admins", aliases: "staff", description: "List group administrators" },
      { name: ".announce", aliases: "broadcast-group", description: "Send an admin announcement" },
      { name: ".close", aliases: "lockchat, announce", description: "Restrict messaging to admins only" },
      { name: ".delete", aliases: "revoke, del", description: "Delete an eligible quoted message" },
      { name: ".demote", aliases: "unadmin", description: "Demote an admin to a member" },
      { name: ".event", aliases: "events, createevent", description: "Create group events with countdown" },
      { name: ".groupdna", aliases: "dna, vibe, groupanalysis", description: "Analyze the group's vibe and activity" },
      { name: ".hidetag", aliases: "hTag, stitch", description: "Send a hidden mention message" },
      { name: ".invite", aliases: "link, grouplink", description: "Get the group invite link" },
      { name: ".kick", aliases: "remove, ban", description: "Remove a member from the group" },
      { name: ".lock", aliases: "locksettings", description: "Lock group settings to admins only" },
      { name: ".mute", aliases: "tempmute, silence", description: "Temporarily mute a user" },
      { name: ".open", aliases: "unlockchat", description: "Allow all members to send messages" },
      { name: ".poll", aliases: "vote", description: "Create a group poll" },
      { name: ".promote", aliases: "makeadmin", description: "Promote a member to admin" },
      { name: ".resetwarn", aliases: "unwarn", description: "Clear warnings for a member" },
      { name: ".revokeinvite", aliases: "resetlink, revokelink", description: "Revoke and regenerate group invite link" },
      { name: ".setdesc", aliases: "description, setdescription", description: "Change the group description" },
      { name: ".setname", aliases: "subject, setsubject", description: "Change the group subject" },
      { name: ".tagall", aliases: "everyone, here", description: "Mention all group members in batches" },
      { name: ".unlock", aliases: "unlocksettings", description: "Unlock group settings for all" },
    ],
  },
  {
    id: "admin",
    emoji: "🛡️",
    name: "ADMIN & SECURITY",
    count: 21,
    subtitle: "Protection · Anti-link",
    commands: [
      { name: ".antilink", aliases: "nolink", description: "Auto-detect and remove links" },
      { name: ".antibot", aliases: "nobots", description: "Prevent other bots in the group" },
      { name: ".antispam", aliases: "nospam", description: "Auto-detect and warn spammers" },
      { name: ".antitoxic", aliases: "notoxic", description: "Filter toxic messages" },
      { name: ".warn", aliases: "warning", description: "Issue a warning to a user" },
      { name: ".block", aliases: "ban", description: "Block a user from the bot" },
      { name: ".unblock", aliases: "unban", description: "Unblock a user" },
      { name: ".antidelete", aliases: "nodelete", description: "Log deleted messages" },
      { name: ".antiviewonce", aliases: "novv, catchvv", description: "Auto-download view once media" },
      { name: ".restrict", aliases: "lockdown", description: "Enable full group restrictions" },
    ],
  },
  {
    id: "media",
    emoji: "🎬",
    name: "MEDIA",
    count: 21,
    subtitle: "Stickers · Audio · VV",
    commands: [
      { name: ".sticker", aliases: "s, stiker", description: "Convert image/video to sticker" },
      { name: ".tomp3", aliases: "mp3, audio", description: "Convert video/audio to MP3" },
      { name: ".tovn", aliases: "vn, voice", description: "Convert audio to voice note" },
      { name: ".vv", aliases: "viewonce, savevv", description: "Save view-once media" },
      { name: ".take", aliases: "wm, watermark", description: "Add watermark to sticker" },
      { name: ".toimg", aliases: "toimage, png", description: "Convert sticker to image" },
      { name: ".gif", aliases: "togif", description: "Convert video to GIF" },
      { name: ".wallpaper", aliases: "wall", description: "Get random wallpapers" },
      { name: ".play", aliases: "music, song", description: "Play music from YouTube" },
      { name: ".ytmp3", aliases: "yta, ytaudio", description: "Download YouTube audio" },
      { name: ".ytmp4", aliases: "ytv, ytvideo", description: "Download YouTube video" },
      { name: ".upload", aliases: "tourl", description: "Upload media to get a URL" },
    ],
  },
  {
    id: "tools",
    emoji: "🧠",
    name: "TOOLS",
    count: 36,
    subtitle: "AI · QR · Weather",
    commands: [
      { name: ".ai", aliases: "chat, gpt", description: "AI chat (30/day free)" },
      { name: ".imagine", aliases: "dalle, img", description: "Generate AI images (FREE!)" },
      { name: ".avatar", aliases: "pfp, profile", description: "Generate AI avatars (FREE!)" },
      { name: ".qr", aliases: "qrcode", description: "Generate QR code from text/URL" },
      { name: ".weather", aliases: "cuaca, climate", description: "Get weather for a location" },
      { name: ".translate", aliases: "tr, trans", description: "Translate text between languages" },
      { name: ".calc", aliases: "calculate, math", description: "Calculate math expressions" },
      { name: ".currency", aliases: "convert, fx", description: "Convert between currencies" },
      { name: ".wiki", aliases: "wikipedia", description: "Search Wikipedia" },
      { name: ".lyrics", aliases: "song", description: "Get song lyrics" },
      { name: ".github", aliases: "gh", description: "Search GitHub repositories" },
      { name: ".npm", aliases: "package", description: "Search npm packages" },
      { name: ".url", aliases: "shorten", description: "Shorten a URL" },
      { name: ".ssweb", aliases: "screenshot", description: "Take website screenshot" },
    ],
  },
  {
    id: "fun",
    emoji: "🎮",
    name: "FUN",
    count: 24,
    subtitle: "Games · Memes · Jokes",
    commands: [
      { name: ".truth", aliases: "t", description: "Get a truth question" },
      { name: ".dare", aliases: "d", description: "Get a dare challenge" },
      { name: ".joke", aliases: "funny", description: "Get a random joke" },
      { name: ".meme", aliases: "memes", description: "Get a random meme" },
      { name: ".8ball", aliases: "magic8ball", description: "Ask the magic 8-ball" },
      { name: ".coinflip", aliases: "flip", description: "Flip a coin" },
      { name: ".dice", aliases: "roll", description: "Roll a dice" },
      { name: ".rps", aliases: "rockpaperscissors", description: "Play rock paper scissors" },
      { name: ".trivia", aliases: "quiz", description: "Get a trivia question" },
      { name: ".quote", aliases: "inspire", description: "Get a random quote" },
      { name: ".fact", aliases: "randomfact", description: "Get a random fun fact" },
      { name: ".compliment", aliases: "praise", description: "Get a random compliment" },
    ],
  },
];

export default function CommandDirectory() {
  const [activeTab, setActiveTab] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = categories.find((c) => c.id === activeTab)!;
  const filteredCommands = activeCategory.commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.aliases.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">📂 Command Directory</h2>
      </div>

      <div className="mb-6">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1a2730] border border-[#2a3942] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00a884] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === cat.id
                ? "bg-[#00a884] text-white shadow-lg shadow-[#00a884]/20"
                : "bg-[#1a2730] text-gray-400 hover:text-white border border-[#2a3942]"
            }`}
          >
            {cat.emoji} {cat.name}
            <span className="ml-2 text-xs opacity-70">({cat.count})</span>
          </button>
        ))}
      </div>

      <div className="bg-[#1a2730] border border-[#2a3942] rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">━━ {activeCategory.emoji} {activeCategory.name} ━━</h3>
            <p className="text-sm text-gray-500">{activeCategory.subtitle} · {activeCategory.count} commands</p>
          </div>
          <code className="text-sm text-[#00a884] bg-[#0b141a] px-3 py-1 rounded-lg">
            .menu {activeTab}
          </code>
        </div>
      </div>

      <div className="space-y-2">
        {filteredCommands.map((cmd) => (
          <div key={cmd.name} className="bg-[#1a2730] border border-[#2a3942] rounded-lg p-4 hover:border-[#00a884]/30 transition-all duration-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-[#00a884] font-mono font-bold">{cmd.name}</code>
                  <span className="text-gray-600 text-xs">({cmd.aliases})</span>
                </div>
                <p className="text-sm text-gray-400">{cmd.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCommands.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-4xl mb-4">🔍</p>
          <p>No commands found matching "{searchQuery}"</p>
        </div>
      )}
    </section>
  );
}
