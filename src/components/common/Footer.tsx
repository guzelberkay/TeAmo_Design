import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2z"/>
                <path d="M12 22c-5.5 0-10-4.5-10-10 0-4.4 2.9-8.2 7-9.5"/>
                <path d="M12 22c5.5 0 10-4.5 10-10 0-4.4-2.9-8.2-7-9.5"/>
              </svg>
              <div className="text-xl font-semibold tracking-tight">Te Amo Design</div>
            </div>
            <p className="text-primary-700 mb-4">
              Kafeler ve restoranlar için özel tasarım mobilyalar. Şıklık, konfor ve kalite bir arada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/teamodesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@teamodesign.com" 
                className="text-primary-700 hover:text-primary-900 transition-colors"
                aria-label="E-posta"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/905555555555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-900 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-700 hover:text-primary-900 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Ürün Kategorileri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=table" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Masalar
                </Link>
              </li>
              <li>
                <Link to="/products?category=chair" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Sandalyeler
                </Link>
              </li>
              <li>
                <Link to="/products?category=stool" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Bar Tabureleri
                </Link>
              </li>
              <li>
                <Link to="/products?category=set" className="text-primary-700 hover:text-primary-900 transition-colors">
                  Setler
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-200 mt-12 pt-8">
          <p className="text-sm text-primary-600 text-center">
            &copy; {new Date().getFullYear()} Te Amo Design. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;