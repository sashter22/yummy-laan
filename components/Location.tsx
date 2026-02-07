"use client";
import { motion } from "framer-motion";

export default function Location() {
  const latitude = -6.451672;
  const longitude = 106.886662;

  // Perbaikan link Google Maps
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <section id="location" className="py-24 bg-[#FFF7ED] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* SISI KIRI: Teks Alamat dengan Animasi Fade-Up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-black text-[#3D1A0B] italic tracking-tighter">
                Our Home Location
              </h2>
              <div className="h-1.5 w-16 bg-orange-500 rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#3D1A0B]">
                Yummy.Laan — Premium Brownies for Your Day
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Jl. Raya Karanggan, <br />
                Desa Karanggan, Kecamatan Gunung Putri, <br />
                Kabupaten Bogor.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#3D1A0B] text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:bg-orange-600 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs"
              >
                Petunjuk Jalan
              </a>
            </div>
          </motion.div>

          {/* SISI KANAN: Map Box dengan Animasi Zoom-In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group"
          >
            <iframe
              src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay dekoratif di pojok peta */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-orange-50">
              <span className="text-[10px] font-black text-[#3D1A0B] uppercase tracking-widest">
                Visit Us
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
