"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Bagian gambar - Animasi Masuk dari Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative group"
        >
          <div className="relative z-10 w-full h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="/img/brownies.png"
              alt="Premium Brownies Yummy.Laan"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Badge Animasi Melayang Pelan */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="absolute -top-4 -left-4 bg-[#3D1A0B] text-white p-5 rounded-3xl shadow-xl z-20"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">
              Since 2024
            </p>
            <p className="text-2xl font-black italic">Homemade</p>
          </motion.div>
        </motion.div>

        {/* Bagian teks - Animasi Masuk dari Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
            <span className="text-orange-500">Yummy.Laan</span>{" "}
            <span className="italic text-[#3D1A0B]">Story.</span>
          </h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light text-justify">
            <p>
              Berawal dari dapur rumah di akhir tahun 2024,{" "}
              <span className="font-semibold text-[#3D1A0B]">Yummy.Laan</span>{" "}
              lahir dari dedikasi dan cinta kami terhadap cokelat premium. Kami
              percaya setiap gigitan brownies harus membawa kebahagiaan yang
              tulus bagi siapa saja yang menikmatinya.
            </p>
            <p>
              Kami hanya menggunakan cokelat murni pilihan untuk memastikan
              setiap varian{" "}
              <span className="italic text-orange-600 font-bold">
                Browkies, Browgi, dan Browcheese
              </span>{" "}
              yang sampai ke tanganmu selalu dalam keadaan fresh, lumer, dan
              memiliki kualitas rasa yang konsisten.
            </p>
          </div>

          {/* STATS - Animasi Muncul dari Bawah */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-orange-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-1"
            >
              <p className="text-4xl font-black text-[#3D1A0B]">100%</p>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                Halal & Higienis
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="space-y-1"
            >
              <p className="text-4xl font-black text-[#3D1A0B]">Premium</p>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                Bahan Pilihan
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
