"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const daftarMenu = [
  {
    id: 1,
    nama: "Browkies",
    harga: "28k",
    img: "/img/browkies.jpeg",
    unit: "/ Cup",
  },
  {
    id: 2,
    nama: "Browgi",
    harga: "25k",
    img: "/img/browgi.jpeg",
    unit: "/ Cup",
  },
  {
    id: 3,
    nama: "Browcheese",
    harga: "28k",
    img: "/img/browcheese.jpeg",
    unit: "/ Cup",
  },
  {
    id: 4,
    nama: "Browkies",
    harga: "60k",
    img: "/img/browkies.jpeg",
    unit: "/ Loyang",
  },
  {
    id: 5,
    nama: "Browgi",
    harga: "55k",
    img: "/img/browgi.jpeg",
    unit: "/ Loyang",
  },
  {
    id: 6,
    nama: "Browcheese",
    harga: "60k",
    img: "/img/browcheese.jpeg",
    unit: "/ Loyang",
  },
];

export default function Menu() {
  return (
    <section id="gallery" className="py-20 bg-[#FFF7ED] px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#3D1A0B] italic mb-3 tracking-tighter">
            Our Menu Selection
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-[#3D1A0B]/60 font-medium text-sm md:text-base">
            Tersedia dalam ukuran Cup dan Loyang
          </p>
        </motion.div>

        {/* Grid Menu: Gap diperkecil di mobile biar nggak lebar-lebar amat */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 justify-items-center">
          {daftarMenu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-orange-100 flex flex-col w-full max-w-[320px]"
            >
              {/* Image Section: Aspect Square nahan biar nggak lonjong */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={item.img}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-0.5 md:py-1 rounded-full shadow-sm">
                  <span className="text-[8px] md:text-[10px] font-black text-[#3D1A0B] uppercase tracking-widest">
                    {item.unit.replace("/", "")}
                  </span>
                </div>
              </div>

              {/* Text Content: Padding dikurangin drastis di mobile (p-4) biar rapet */}
              <div className="p-4 md:p-8 text-center flex-grow flex flex-col items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-xl font-black text-[#3D1A0B] tracking-tight uppercase">
                    {item.nama}
                  </h3>

                  <p className="mt-1 md:mt-2 flex items-baseline justify-center gap-0.5 md:gap-1">
                    <span className="text-orange-600 font-black text-xl md:text-3xl">
                      {item.harga}
                    </span>
                    <span className="text-[#3D1A0B]/30 text-[8px] md:text-xs font-bold uppercase tracking-widest">
                      {item.unit}
                    </span>
                  </p>
                </div>

                {/* Button: mt-4 biar nggak kejauhan jaraknya sama harga */}
                <a
                  href={`https://wa.me/6289638727454?text=Halo Yummy.Laan, saya mau pesan ${item.nama} ${item.unit}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-8 w-full bg-[#3D1A0B] text-white text-[9px] md:text-[10px] py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.1em] md:tracking-[0.2em] 
                  hover:bg-orange-600  active:bg-orange-700 active:scale-90 active:shadow-inner transition-all duration-200 shadow-xl shadow-orange-900/10 touch-manipulation"
                >
                  Pesan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
