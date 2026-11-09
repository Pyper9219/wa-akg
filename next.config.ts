import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "sharp",
    "bcryptjs",
    "@whiskeysockets/baileys",
    "jimp",
    "pino",
    "qrcode-terminal",
  ],
};

export default nextConfig;
