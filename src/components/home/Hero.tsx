import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import HeaderImage from '../../images/header.webp'; // ✅ header.webp import edildi

const Hero: React.FC = () => {
  return (
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        {/* ✅ Arka plan resmi doğrudan style ile uygulandı */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HeaderImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <div className="relative container-custom h-full flex flex-col justify-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
          >
            <motion.h1
                className="mb-4 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mekanınıza Özel Tasarım Mobilyalar
            </motion.h1>

            <motion.p
                className="mb-8 text-lg md:text-xl text-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
              Kafe ve restoranlar için estetik, dayanıklı ve konforlu mobilya çözümleri. Minimal tasarımlar, maksimum kalite.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/products" className="btn btn-primary">
                Ürünleri Keşfet
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>

              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:bg-opacity-20">
                Bize Ulaşın
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
