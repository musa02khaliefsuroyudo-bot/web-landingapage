"use client";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPWA({ showAlways = false }: { showAlways?: boolean }) {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setPrompt(null);
    });
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (installed) return null;
  // Kalau tidak ada prompt tapi showAlways = true, tampilkan tombol panduan
  if (!prompt && !showAlways) return null;

  return (
    <button
      onClick={async () => {
        if (prompt) {
          await prompt.prompt();
          const { outcome } = await prompt.userChoice;
          if (outcome === "accepted") setInstalled(true);
          setPrompt(null);
        } else {
          alert("Untuk install: buka browser Chrome/Edge → klik ikon install di address bar, atau pilih 'Add to Home Screen' di menu browser.");
        }
      }}
      className="w-full flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-4 py-2.5 rounded-lg text-sm transition"
      title="Install ke perangkat"
    >
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      Install Aplikasi
    </button>
  );
}
