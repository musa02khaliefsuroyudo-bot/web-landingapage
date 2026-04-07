"use client";
import { useState } from "react";
import SplitText from "./components/SplitText";
import ChatAI from "./components/ChatAI";
import InstallPWA from "./components/InstallPWA";

const products = [
  { name: "Besi & Baja", desc: "Tersedia berbagai ukuran dan jenis besi baja berkualitas tinggi untuk proyek konstruksi dan industri Anda", icon: "🔩" },
  { name: "Logam Non-Ferrous", desc: "Aluminium, tembaga, kuningan premium untuk aplikasi khusus dengan standar kualitas internasional", icon: "⚙️" },
  { name: "Aksesoris Lengkap", desc: "Perlengkapan dan aksesoris pendukung untuk memenuhi semua kebutuhan proyek Anda", icon: "🛠️" },
];

function SearchBar({ value, onChange, placeholder = "Cari produk...", dark = false }: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  dark?: boolean;
}) {
  return (
    <div className="relative w-full">
      <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? "text-gray-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none transition focus:ring-2 focus:ring-yellow-400 ${
          dark
            ? "bg-gray-700/80 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-400"
            : "bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-yellow-400 backdrop-blur-sm"
        }`}
      />
    </div>
  );
}

function CoverPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">

      {/* SVG Besi Hollow Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="-10" y="60" width="500" height="40" rx="4" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <rect x="2" y="66" width="476" height="28" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="300" y="140" width="600" height="50" rx="4" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <rect x="312" y="147" width="576" height="36" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="-50" y="260" width="450" height="35" rx="4" fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
        <rect x="-38" y="267" width="426" height="21" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="500" y="350" width="700" height="45" rx="4" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <rect x="512" y="357" width="676" height="31" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="100" y="480" width="800" height="55" rx="4" fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
        <rect x="112" y="488" width="776" height="39" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="-20" y="580" width="400" height="38" rx="4" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
        <rect x="-8" y="587" width="376" height="24" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="600" y="650" width="600" height="42" rx="4" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <rect x="612" y="657" width="576" height="28" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="80" y="-10" width="38" height="500" rx="4" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
        <rect x="87" y="-10" width="24" height="500" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="700" y="-20" width="44" height="450" rx="4" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <rect x="708" y="-20" width="28" height="450" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="900" y="200" width="36" height="700" rx="4" fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
        <rect x="908" y="200" width="20" height="700" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="400" y="20" width="60" height="60" rx="3" fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
        <rect x="408" y="28" width="44" height="44" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="1050" y="300" width="70" height="70" rx="3" fill="none" stroke="#94a3b8" strokeWidth="3" />
        <rect x="1059" y="309" width="52" height="52" rx="2" fill="none" stroke="#64748b" strokeWidth="1.5" />
        <rect x="50" y="700" width="55" height="55" rx="3" fill="none" stroke="#7dd3fc" strokeWidth="2" />
        <rect x="58" y="708" width="39" height="39" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-blue-400/60 flex items-center justify-center bg-gray-800/60 backdrop-blur-sm shadow-lg shadow-blue-500/20">
            <span className="text-4xl">⚙️</span>
          </div>
        </div>

        <p className="text-blue-400 tracking-[0.4em] text-sm uppercase mb-3 font-medium">Selamat Datang di</p>

        <h1 className="text-7xl md:text-9xl font-black tracking-widest text-white drop-shadow-lg leading-none animate-slideup">
          SINAR
        </h1>
        <h1 className="text-7xl md:text-9xl font-black tracking-widest text-white drop-shadow-lg leading-none mb-6 animate-slideup2">
          LOGAM
        </h1>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6" />

        <p className="text-gray-400 text-lg md:text-xl mb-10 tracking-wide">
          Supplier Logam Berkualitas Terpercaya
        </p>

        <button
          onClick={onEnter}
          className="group inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/30 text-lg"
        >
          Masuk ke Website
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className="text-gray-600 text-xs mt-8 tracking-widest uppercase">Ungaran · Jawa Tengah · Indonesia</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [showCover, setShowCover] = useState(true);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {showCover && <CoverPage onEnter={() => setShowCover(false)} />}

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between gap-6">
              <div className="text-2xl font-black bg-gradient-to-r from-gray-300 via-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wider shrink-0">SINAR LOGAM</div>
              {/* Search bar tengah navbar - desktop only */}
              <div className="hidden md:block flex-1 max-w-sm">
                <SearchBar value={search} onChange={setSearch} placeholder="Cari produk logam..." dark />
              </div>
              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8 shrink-0">
                <a href="#beranda" className="hover:text-yellow-400 transition">Beranda</a>
                <a href="#produk" className="hover:text-yellow-400 transition">Produk</a>
                <a href="#tentang" className="hover:text-yellow-400 transition">Tentang</a>
                <a href="#kontak" className="hover:text-yellow-400 transition">Kontak</a>
                <InstallPWA showAlways />
              </div>
              {/* Hamburger button - mobile only */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Search bar mobile */}
            <div className="md:hidden mt-3 pb-1">
              <SearchBar value={search} onChange={setSearch} placeholder="Cari produk logam..." dark />
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
              <div className="md:hidden mt-3 pb-2 border-t border-gray-700 pt-3 flex flex-col gap-3">
                <a href="#beranda" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition py-1">Beranda</a>
                <a href="#produk" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition py-1">Produk</a>
                <a href="#tentang" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition py-1">Tentang</a>
                <a href="#kontak" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition py-1">Kontak</a>
                <div className="pt-1">
                  <InstallPWA showAlways />
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section id="beranda" className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">

          {/* Background foto besi hollow */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images (9).jpg')" }}
          />
          {/* Overlay gelap transparan supaya teks tetap terbaca */}
          <div className="absolute inset-0 bg-gray-900/75" />

          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-300 via-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wider mb-6">SINAR LOGAM</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Partner Terpercaya untuk Kebutuhan Logam Anda</p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Solusi lengkap material logam berkualitas premium dengan harga bersaing. Melayani proyek konstruksi, industri, dan manufaktur di seluruh Indonesia
            </p>
            {/* Search bar hero */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="flex gap-2">
                <div className="flex-1">
                  <SearchBar value={search} onChange={setSearch} placeholder="Cari produk, misal: besi, aluminium, tembaga..." />
                </div>
                <a href="#produk" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-lg transition shrink-0 flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                  Cari
                </a>
              </div>
            </div>
            <a href="#kontak" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
              Dapatkan Penawaran Terbaik
            </a>
          </div>
        </section>

        {/* Produk Section */}
        <section id="produk" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Produk Unggulan Kami</h2>
            {search && (
              <p className="text-center text-gray-500 mb-8">
                {filtered.length > 0
                  ? `Menampilkan ${filtered.length} hasil untuk "${search}"`
                  : `Tidak ada produk untuk "${search}"`}
              </p>
            )}
            {!search && <div className="mb-12" />}
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {filtered.map((p) => (
                  <div key={p.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                    <div className="text-4xl mb-4">{p.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{p.name}</h3>
                    <p className="text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg">Produk tidak ditemukan. Coba kata kunci lain.</p>
              </div>
            )}
          </div>
        </section>

        {/* Keunggulan Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Keunggulan Sinar Logam</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Kualitas Premium</h3>
                <p className="text-gray-600">Material pilihan dengan sertifikat standar mutu</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Harga Bersaing</h3>
                <p className="text-gray-600">Penawaran terbaik tanpa kompromi kualitas</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Pengiriman Tepat Waktu</h3>
                <p className="text-gray-600">Distribusi cepat ke seluruh wilayah</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Layanan Profesional</h3>
                <p className="text-gray-600">Tim ahli siap konsultasi kebutuhan Anda</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Section */}
        <section id="tentang" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-800">Tentang Sinar Logam</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sinar Logam hadir sebagai solusi terpercaya untuk memenuhi kebutuhan material logam berkualitas tinggi.
                Dengan pengalaman dan dedikasi tinggi, kami telah dipercaya oleh ratusan pelanggan dari berbagai sektor industri, konstruksi, dan manufaktur.
              </p>
              <p className="text-lg text-gray-600">
                Kepuasan pelanggan adalah prioritas utama kami. Kami berkomitmen memberikan produk terbaik, harga kompetitif,
                dan layanan yang responsif untuk mendukung kesuksesan setiap proyek Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Siap Memulai Proyek Anda?</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">Hubungi kami sekarang untuk konsultasi dan penawaran terbaik</p>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="font-bold mb-2">Telepon</h3>
                  <p className="text-gray-300">+62 858-7952-4025</p>
                  <p className="text-gray-400 text-sm mt-1">(Wiwid Widiyati)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-300">logamsinar453@gmail.com</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold mb-2">Alamat</h3>
                <p className="text-gray-300">Kebunpolo, Gedungkuning, Ungaran</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Sinar Logam. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Chat AI floating */}
      <ChatAI />
    </>
  );
}
