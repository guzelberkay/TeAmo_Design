import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-primary-800" />,
      title: 'Premium Kalite',
      description: 'Yüksek kaliteli malzemelerle üretilen dayanıklı mobilyalar'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-800" />,
      title: 'Güvenilir Kullanım',
      description: 'Yoğun kullanıma uygun, uzun ömürlü tasarımlar'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary-800" />,
      title: 'Modern Tasarım',
      description: 'Estetik görünüm ve ergonomik kullanım bir arada'
    }
  ];
  
  return (
    <Layout>
      <Hero />
      <CategorySection />
      
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Kafe ve Restoranlar için Özel Çözümler</h2>
              <p className="text-primary-700 mb-6">
                Te Amo Design olarak kafe ve restoranların özel ihtiyaçlarını anlıyor ve bu doğrultuda şık, dayanıklı ve konforlu mobilyalar tasarlıyoruz. Her ürünümüz, mekanınızın atmosferine değer katacak şekilde tasarlanmıştır.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-primary-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/products" className="inline-flex items-center text-primary-800 font-medium hover:text-primary-700 transition-colors">
                Tüm Ürünleri Keşfet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Kafe Ortamı"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xs">
                  <p className="text-primary-800 font-medium mb-2">Hemen İletişime Geçin</p>
                  <p className="text-primary-600 text-sm mb-4">Özel ihtiyaçlarınız için size özel çözümler sunalım.</p>
                  <Link to="/contact" className="btn btn-accent w-full justify-center">
                    Bize Ulaşın
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Mekanınıza Uygun Mobilyaları Keşfedin
            </motion.h2>
            <motion.p 
              className="text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Size özel tasarım mobilyalar ile kafe veya restoranınızın atmosferini yükseltin. Modern, şık ve dayanıklı mobilya seçeneklerimizle hizmetinizdeyiz.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/products" className="btn bg-white text-primary-800 hover:bg-primary-100">
                Ürünleri İncele
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;