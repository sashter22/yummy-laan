export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#3D1A0B] text-white pt-16 pb-10 px-6 scroll-mt-10 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Bagian Atas: Branding (Kiri) & Stay Sweet (Kanan) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Sisi Kiri: Branding */}
          <div className="space-y-3 max-w-md">
            <h2 className="text-3xl font-bold italic tracking-tight">
              Yummy.<span className="text-orange-500">Laan</span>
            </h2>
            <p className="text-orange-100/80 leading-relaxed text-sm md:text-base">
              Temukan manisnya kebahagiaan di setiap gigitan. Kami siap melayani
              pesanan untuk acara spesial atau cemilan di rumah.
            </p>
          </div>

          {/* Sisi Kanan: Stay Sweet */}
          <div className="md:text-right w-full md:w-auto">
            <h3 className="text-xl font-bold text-orange-400 italic mb-1">
              Stay Sweet!
            </h3>
            <p className="text-orange-100/60 text-base md:text-lg italic leading-relaxed">
              "Karena setiap hari berhak mendapatkan{" "}
              <br className="hidden md:block" /> sedikit rasa manis."
            </p>
          </div>
        </div>

        {/* Bagian Bawah: Sosmed & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center">
          {/* Link Sosmed - Dikasih pointer-events-auto biar pasti bisa diklik */}
          <div className="flex items-center space-x-5 mb-5 relative z-20 pointer-events-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6289638727454"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] p-2.5 rounded-full hover:scale-110 active:scale-95 transition-transform shadow-md block"
              title="Hubungi via WhatsApp"
            >
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.027 4.009 1.569 6.163 1.57h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>

            {/* Instagram - Link Sudah Diperbarui */}
            <a
              href="https://www.instagram.com/yummy.laan?igsh=dGswYzFkY256bmQy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-2.5 rounded-full hover:scale-110 active:scale-95 transition-transform shadow-md block"
              title="Follow Instagram Kami"
            >
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.44-.645-1.44-1.44.645-1.44 1.44-1.44z" />
              </svg>
            </a>
          </div>

          <p className="text-orange-200/40 text-[10px] md:text-xs font-medium tracking-widest uppercase">
            © 2026 Yummy.Laan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
