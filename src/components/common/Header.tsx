import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../images/Logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Ürünler', path: '/products' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-6 min-h-[80px] flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.img
                src={Logo}
                alt="Te Amo Design Logo"
                className="h-28 w-auto object-contain"
                whileHover={{ rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-semibold hover:text-primary-800 transition-colors ${
                        location.pathname === link.path ? 'text-primary-800' : 'text-primary-600'
                    }`}
                >
                  {link.name}
                </Link>
            ))}
            <Link to="/contact" className="btn btn-accent ml-4">
              Bize Ulaşın
            </Link>
          </nav>

          <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white"
              >
                <div className="px-6 py-4 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                      <Link
                          key={link.path}
                          to={link.path}
                          className={`py-2 px-4 text-lg font-semibold hover:bg-primary-50 rounded-md transition-colors ${
                              location.pathname === link.path
                                  ? 'text-primary-800 bg-primary-50'
                                  : 'text-primary-600'
                          }`}
                      >
                        {link.name}
                      </Link>
                  ))}
                  <Link to="/contact" className="btn btn-accent w-full justify-center mt-4">
                    Bize Ulaşın
                  </Link>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
};

export default Header;
