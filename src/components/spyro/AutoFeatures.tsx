"use client";

import { useState } from "react";

interface AutoFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  command: string;
  status: "active" | "inactive";
  details: string[];
}

const autoFeatures: AutoFeature[] = [
  {
    id: "vv",
    title: "View Once Downloader",
    description: "Automatically download and save view-once images and videos before they disappear.",
    icon: "📸",
    command: ".vv / .antiviewonce",
    status: "active",
    details: [
      "Captures view-once images automatically",
      "Saves view-once videos with full quality",
      "Notifies sender that media was captured",
      "Works in both DMs and groups",
      "Stores media for 24 hours",
      'Use .vv to manually save any VV media',
    ],
  },
  {
    id: "autostatus",
    title: "Auto-View Status",
    description: "Automatically view all status updates from your contacts without them knowing.",
    icon: "👁️",
    command: ".autostatus / .autoview",
    status: "active",
    details: [
      "Views all incoming status updates",
      "Works silently — no notification to poster",
      "Supports images, videos, and text statuses",
      "Configurable whitelist/blacklist",
      "Logs viewed statuses",
      "Can be toggled on/off per contact",
    ],
  },
  {
    id: "autoreply",
    title: "Auto-Reply",
    description: "Automatically respond to messages when you are unavailable or set custom responses.",
    icon: "💬",
    command: ".autoreply / .autorule",
    status: "active",
    details: [
      "Set custom auto-responses for specific triggers",
      "AI-powered smart replies when configured",
      "Schedule auto-replies for specific times",
      "Different replies for DMs vs groups",
      "Supports text, images, and stickers as replies",
      "Priority queue for multiple triggers",
    ],
  },
  {
    id: "antidelete",
    title: "Anti-Delete Messages",
    description: "Log and recover messages that are deleted by senders before you can read them.",
    icon: "🛡️",
    command: ".antidelete",
    status: "active",
    details: [
      "Captures deleted text messages",
      "Saves deleted media before removal",
      "Notifies you when a message is deleted",
      "Works in groups and DMs",
      "Stores deleted content for review",
      "Admin-configurable per group",
    ],
  },
  {
    id: "menushow",
    title: "Public Menu Access",
    description: "Anyone in the chat can view the bot menu and skills — connected or not.",
    icon: "📋",
    command: ".menu / .help",
    status: "active",
    details: [
      "Menu visible to all chat participants",
      "Works for connected and non-connected users",
      "Shows available commands in real-time",
      "Category-based browsing",
      "Search functionality built-in",
      "Help for individual commands with .help <cmd>",
    ],
  },
  {
    id: "schedule",
    title: "Smart Scheduler",
    description: "Schedule messages, reminders, and automated tasks with precision timing.",
    icon: "📅",
    command: ".schedule / .event",
    status: "active",
    details: [
      "Schedule messages for future delivery",
      "Set recurring reminders",
      "Create events with countdown timers",
      "Auto-reminders before events",
      "Timezone-aware scheduling",
      "Batch scheduling support",
    ],
  },
];

export default function AutoFeatures() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>("vv");

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-2xl font-bold text-white">⚡ Auto Features</h2>
        <span className="px-2 py-1 bg-[#25d366]/20 text-[#25d366] text-xs rounded-full">
          NEW
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-6">
        Powerful automation features that work silently in the background
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {autoFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`bg-[#1a2730] border rounded-xl overflow-hidden transition-all duration-300 ${
              expandedFeature === feature.id
                ? "border-[#00a884] shadow-lg shadow-[#00a884]/10"
                : "border-[#2a3942] hover:border-[#00a884]/30"
            }`}
          >
            <button
              onClick={() =>
                setExpandedFeature(expandedFeature === feature.id ? null : feature.id)
              }
              className="w-full p-5 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00a884]/20 to-[#25d366]/20 rounded-xl flex items-center justify-center text-2xl border border-[#00a884]/20">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <span className={`w-2 h-2 rounded-full ${
                      feature.status === "active" ? "bg-[#25d366]" : "bg-gray-600"
                    }`}></span>
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                  <code className="text-xs text-[#00a884] mt-2 block">
                    {feature.command}
                  </code>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedFeature === feature.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedFeature === feature.id && (
              <div className="px-5 pb-5 border-t border-[#2a3942] pt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Capabilities
                </h4>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00a884] mt-0.5">✓</span>
                      <span className="text-sm text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between bg-[#0b141a] rounded-lg px-4 py-3">
                  <span className="text-sm text-gray-400">Status</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#25d366]">Active</span>
                    <div className="w-10 h-5 bg-[#00a884] rounded-full relative cursor-pointer">
                      <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
