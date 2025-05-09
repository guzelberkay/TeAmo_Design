import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-[#3b2a1a] text-[#f2e9dc] pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Hakkımızda */}
            <div>
              <h3 className="text-xl font-bold mb-4">Te Amo Design</h3>
              <p className="text-sm mb-4 max-w-xs">
                Kafeler ve restoranlar için özel tasarım mobilyalar. Şıklık, konfor ve kalite bir arada.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/teamodesing/?utm_source=qr&igsh=NnJlN3N5dGU1aTB4#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#fff6eb]">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/905339388782" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#fff6eb]">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-[#fff6eb]">Anasayfa</Link></li>
                <li><Link to="/products" className="hover:text-[#fff6eb]">Ürünler</Link></li>
                <li><Link to="/about" className="hover:text-[#fff6eb]">Hakkımızda</Link></li>
                <li><Link to="/contact" className="hover:text-[#fff6eb]">İletişim</Link></li>
              </ul>
            </div>

            {/* Kategoriler */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Ürün Kategorileri</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products?category=cekmecesiz_okeyset" className="hover:text-[#fff6eb]">Çekmecesiz Okey
                  Masa Takımı</Link></li>
                <li><Link to="/products?category=cekmeceli_okeyset" className="hover:text-[#fff6eb]">Çekmecesiz Okey
                  Masa Takımı</Link></li>
                <li><Link to="/products?category=chair" className="hover:text-[#fff6eb]">Sandalyeler</Link></li>
                <li><Link to="/products?category=set" className="hover:text-[#fff6eb]">Setler</Link></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#7a5e44] pt-6 mt-6"/>

          {/* Alt bilgi */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#e2d6c1] mb-3">
              © {currentYear} Te Amo Design. Tüm hakları saklıdır.
            </p>

            {/* CORTEXSOFT Bloğu - Daha Bold ve Açık Kahverengi Geçişli */}
            <a
                href="https://www.cortexsoftdev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 group"
            >
            <span className="text-xs text-[#e0cdb7] tracking-wide uppercase font-medium group-hover:text-white transition">
              Powered by
            </span>
              <span className="text-2xl sm:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8b5e3c] via-[#c69c6d] to-[#8b5e3c] group-hover:brightness-110 transition-all duration-300">
              CORTEXSOFT
            </span>
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
