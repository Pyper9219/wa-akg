"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CommandDirectory from "./CommandDirectory";
import ChatPreview from "./ChatPreview";
import DeviceInfo from "./DeviceInfo";
import AutoFeatures from "./AutoFeatures";
import Footer from "./Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b141a] text-gray-100 font-sans">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#00a884] text-white p-2 rounded-lg shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 lg:ml-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activeSection === "home" && (
              <>
                <HeroSection />
                <AutoFeatures />
                <FeaturesSection />
                <ChatPreview />
              </>
            )}
            {activeSection === "commands" && <CommandDirectory />}
            {activeSection === "features" && (
              <>
                <AutoFeatures />
                <FeaturesSection />
              </>
            )}
            {activeSection === "device" && <DeviceInfo />}
            {activeSection === "chat" && <ChatPreview />}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
