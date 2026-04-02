"use client";
import { useState, useRef, useEffect } from "react";

const botReplies: Record<string, string> = {
  harga: "Untuk informasi harga terbaru, silakan hubungi kami di +62 858-7952-4025 atau email logamsinar453@gmail.com. Kami siap berikan penawaran terbaik!",
  besi: "Kami menyediakan berbagai jenis besi & baja: besi hollow, besi siku, besi plat, besi beton, dan lainnya. Mau tanya ukuran atau spesifikasi tertentu?",
  baja: "Produk baja kami tersedia dalam berbagai ukuran dan grade untuk kebutuhan konstruksi maupun industri. Hubungi kami untuk spesifikasi lengkap.",
  aluminium: "Kami menyediakan aluminium dalam berbagai bentuk: plat, hollow, siku, dan profil. Kualitas premium dengan harga bersaing.",
  tembaga: "Tembaga tersedia dalam bentuk batang, plat, dan kawat. Cocok untuk aplikasi kelistrikan dan industri.",
  kuningan: "Kuningan/brass tersedia dalam berbagai ukuran. Biasa digunakan untuk fitting, dekorasi, dan komponen mesin.",
  hollow: "Besi hollow tersedia dalam ukuran 20x20, 30x30, 40x40, 50x50, 40x60, 50x100 mm dan lainnya. Ketebalan bervariasi 1.2mm - 3mm.",
  pengiriman: "Kami melayani pengiriman ke seluruh wilayah Indonesia. Untuk estimasi ongkir, hubungi kami langsung ya!",
  alamat: "Kami berlokasi di Kebunpolo, Gedungkuning, Ungaran, Jawa Tengah.",
  kontak: "Bisa hubungi kami di:\n📞 +62 858-7952-4025 (Wiwid Widiyati)\n📧 logamsinar453@gmail.com",
  default: "Terima kasih sudah menghubungi Sinar Logam! Untuk pertanyaan lebih lanjut, silakan hubungi kami di +62 858-7952-4025 atau ketik kata kunci seperti: harga, besi, hollow, pengiriman, alamat.",
};

function getReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const key of Object.keys(botReplies)) {
    if (key !== "default" && lower.includes(key)) return botReplies[key];
  }
  return botReplies.default;
}

interface Message {
  from: "user" | "bot";
  text: string;
}

export default function ChatAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Halo! Saya asisten Sinar Logam 👋 Ada yang bisa saya bantu? Tanya soal produk, harga, atau pengiriman ya!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getReply(text) }]);
    }, 900);
  }

  return (
    <>
      {/* Tombol chat floating */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-full shadow-lg shadow-yellow-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Buka chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 16c0 1.1-.9 2-2 2H7l-4 4V6a2 2 0 012-2h14a2 2 0 012 2v10z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200" style={{ height: "460px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-black text-sm shrink-0">SL</div>
            <div>
              <p className="font-bold text-sm">Asisten Sinar Logam</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-yellow-500 text-gray-900 rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ketik pesan..."
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
            <button
              onClick={send}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-xl px-3 py-2 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
