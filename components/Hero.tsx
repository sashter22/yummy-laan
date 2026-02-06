"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      // Menggunakan min-h-screen agar di mobile tinggi halaman mengikuti konten dan tidak mepet
      className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Section menggunakan Unsplash */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339942302-3112c322d640?q=80&w=2000"
          alt="Premium Brownies Background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Overlay Gradient Cokelat Gelap agar teks terbaca jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D1A0B]/90 via-[#3D1A0B]/80 to-[#3D1A0B]/95"></div>
      </div>

      {/* Content Section dengan penyesuaian padding untuk mobile */}
      <div className="relative z-10 text-center px-6 pt-32 pb-20 md:pt-16 md:pb-0">
        {/* Judul dengan animasi Fade Up */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter"
        >
          Perpaduan <span className="text-orange-400 italic">Sempurna</span>{" "}
          <br />
          Cokelat Murni Pilihan <span className="text-orange-400">Terbaik</span>
        </motion.h1>

        {/* Deskripsi dengan animasi Fade In pelan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-xl text-orange-100/80 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Premium Homemade Brownies dengan bahan pilihan.{" "}
          <br className="hidden md:block" /> Renyah di luar, lumer di dalam.
        </motion.p>

        {/* Tombol Call to Action yang sedikit memantul (Spring) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1,
          }}
          className="mt-10"
        >
          <a
            href="#gallery"
            className="bg-orange-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-2xl shadow-orange-950/50 active:scale-95 inline-block"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Indikator Scroll Down pelan di bawah (Hanya muncul di desktop agar tidak mengganggu mobile) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
}
