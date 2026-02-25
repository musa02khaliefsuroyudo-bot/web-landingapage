export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black bg-gradient-to-r from-gray-300 via-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wider">SINAR LOGAM</div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="hover:text-yellow-400 transition">Beranda</a>
              <a href="#produk" className="hover:text-yellow-400 transition">Produk</a>
              <a href="#tentang" className="hover:text-yellow-400 transition">Tentang</a>
              <a href="#kontak" className="hover:text-yellow-400 transition">Kontak</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-300 via-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wider mb-6">SINAR LOGAM</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Partner Terpercaya untuk Kebutuhan Logam Anda</p>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Solusi lengkap material logam berkualitas premium dengan harga bersaing. Melayani proyek konstruksi, industri, dan manufaktur di seluruh Indonesia
          </p>
          <a href="#kontak" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            Dapatkan Penawaran Terbaik
          </a>
        </div>
      </section>

      {/* Produk Section */}
      <section id="produk" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Produk Unggulan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔩</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Besi & Baja</h3>
              <p className="text-gray-600">Tersedia berbagai ukuran dan jenis besi baja berkualitas tinggi untuk proyek konstruksi dan industri Anda</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Logam Non-Ferrous</h3>
              <p className="text-gray-600">Aluminium, tembaga, kuningan premium untuk aplikasi khusus dengan standar kualitas internasional</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Aksesoris Lengkap</h3>
              <p className="text-gray-600">Perlengkapan dan aksesoris pendukung untuk memenuhi semua kebutuhan proyek Anda</p>
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
  );
}
