"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-orange-100 transition-all duration-300">
      {/* KUNCI: Pakai min-height dan height yang bener-bener dipaksa lewat style inline */}
      <div
        style={{ height: "80px", minHeight: "80px" }}
        className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 md:px-12 relative"
      >
        {/* KIRI: Logo - Pakai tag img biasa supaya scaling-nya kaku (fixed) */}
        <div className="flex items-center gap-3 h-full overflow-hidden">
          <div
            style={{ width: "40px", height: "40px", minWidth: "40px" }}
            className="flex-shrink-0"
          >
            <img
              src="/img/logo.png"
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div className="text-xl md:text-2xl font-bold italic text-[#3D1A0B] whitespace-nowrap">
            Yummy.<span className="text-orange-500">Laan</span>
          </div>
        </div>

        {/* TENGAH: Menu Desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 whitespace-nowrap">
          <a
            href="#home"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest"
          >
            Gallery
          </a>
          <a
            href="#location"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest"
          >
            Location
          </a>
        </div>

        {/* KANAN: Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a
              href="#footer"
              className="bg-[#3D1A0B] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-600 shadow-lg"
            >
              Contact Us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3D1A0B] p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#3D1A0B] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-[#3D1A0B] transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-[#3D1A0B] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-orange-50 shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] font-bold uppercase"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] font-bold uppercase"
              >
                About Us
              </a>
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] font-bold uppercase"
              >
                Gallery
              </a>
              <a
                href="#location"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] font-bold uppercase"
              >
                Location
              </a>
              <a
                href="#footer"
                onClick={() => setIsOpen(false)}
                className="text-orange-600 font-bold uppercase pt-4 border-t"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
