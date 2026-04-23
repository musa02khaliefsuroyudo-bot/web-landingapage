"use client";
import { useState } from "react";
import ChatAI from "./components/ChatAI";
import InstallPWA from "./components/InstallPWA";

const products = [
  { name: "Besi & Baja", desc: "Tersedia berbagai ukuran dan jenis besi baja berkualitas tinggi untuk proyek konstruksi dan industri Anda", icon: "🔩" },
  { name: "Logam Non-Ferrous", desc: "Aluminium, tembaga, kuningan premium untuk aplikasi khusus dengan standar kualitas internasional", icon: "⚙️" },
  { name: "Aksesoris Lengkap", desc: "Perlengkapan dan aksesoris pendukung untuk memenuhi semua kebutuhan proyek Anda", icon: "🛠️" },
];

const hollow4x8 = [
  { label: "Merah Galvanis 1,6mm", price: "Rp 275.000", color: "bg-red-500" },
  { label: "Ping Besi Hitam 1,2mm", price: "Rp 171.500", color: "bg-gray-800" },
  { label: "Galvanis 1,2mm", price: "Rp 208.000", color: "bg-blue-400" },
];

const cnpItems = [
  { label: "CNP 100 (real 9cm)", price: "Rp 155.000", color: "bg-green-600" },
  { label: "CNP 12", price: "Rp 180.000", color: "bg-green-800" },
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
                <a href="#katalog" className="hover:text-yellow-400 transition">Katalog</a>
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
                <a href="#katalog" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition py-1">Katalog</a>
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
                    {p.name === "Besi & Baja" && (
                      <div className="border-t mt-4 pt-4">
                        <p className="text-sm font-bold text-gray-700 mb-3">🏷️ Hollow 4x8 (Harga/Batang)</p>
                        <div className="space-y-2">
                          {hollow4x8.map((item) => (
                            <div key={item.label} className="flex justify-between items-center py-1.5 px-3 bg-gray-50 rounded-lg">
                              <span className="text-sm text-gray-700 flex items-center gap-1.5">
                                <span className={`w-3 h-3 rounded-full ${item.color} inline-block shrink-0`}></span>
                                {item.label}
                              </span>
                              <span className="text-sm font-bold text-gray-800 shrink-0 ml-2">{item.price}</span>
                            </div>
                          ))}
                        </div>
                        {/* CNP Section */}
                        <p className="text-sm font-bold text-gray-700 mb-3 mt-4">🏷️ CNP (Harga/Batang)</p>
                        <div className="space-y-2">
                          {cnpItems.map((item) => (
                            <div key={item.label} className="flex justify-between items-center py-1.5 px-3 bg-gray-50 rounded-lg">
                              <span className="text-sm text-gray-700 flex items-center gap-1.5">
                                <span className={`w-3 h-3 rounded-full ${item.color} inline-block shrink-0`}></span>
                                {item.label}
                              </span>
                              <span className="text-sm font-bold text-gray-500 shrink-0 ml-2">{item.price}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href="https://wa.me/6285879524025?text=Halo%20Bu%20Wiwid%2C%20saya%20mau%20tanya%20stok%20Hollow%204x8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-bold py-2 px-4 rounded-lg transition"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.233-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
                          </svg>
                          Pesan Sekarang
                        </a>
                      </div>
                    )}
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

        {/* Katalog Section */}
        <section id="katalog" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Katalog Harga</h2>
            <p className="text-center text-gray-500 mb-10">Daftar harga besi hollow & galvanis per batang. Harga dapat berubah sewaktu-waktu.</p>
            <div className="max-w-2xl mx-auto">
              <img
                src="/katalog.jpg"
                alt="Katalog Harga Sinar Logam - Besi Hollow & Galvanis"
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="text-center text-gray-400 text-sm mt-4">* Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info terbaru.</p>
              <div className="text-center mt-6">
                <a
                  href="https://wa.me/6285879524025?text=Halo%20Bu%20Wiwid%2C%20saya%20ingin%20tanya%20harga%20besi%20hollow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.233-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
                  </svg>
                  Tanya Harga via WhatsApp
                </a>
              </div>
            </div>
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
                  <a
                    href="https://wa.me/6285879524025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.233-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
                    </svg>
                    +62 858-7952-4025
                  </a>
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
