import React from 'react';
import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Hakkımızda</h1>
            <p className="text-primary-700">
              Te Amo Design, kafe ve restoranlar için özel mobilya tasarımlarıyla, mekanları daha şık ve konforlu hale getirme misyonuyla kurulmuştur.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-medium mb-6">Vizyonumuz</h2>
              <p className="text-primary-700 mb-6">
                Te Amo Design olarak, kafe ve restoranlar için sadece mobilya değil, mekan kimliği oluşturan tasarımlar sunmayı hedefliyoruz. Her ürünümüz, müşterilerimizin işletmelerinin atmosferini ve tarzını yansıtacak şekilde tasarlanmıştır.
              </p>
              <p className="text-primary-700">
                Kullandığımız yüksek kaliteli malzemeler ve özenli işçilik, ürünlerimizin uzun ömürlü olmasını ve yoğun kullanıma dayanmasını sağlar. Amacımız, kafe ve restoranların ihtiyaç duyduğu dayanıklılık ve estetiği bir araya getirerek, benzersiz mekanlar yaratmalarına yardımcı olmaktır.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video md:aspect-square rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Te Amo Design Atölyesi"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative aspect-video md:aspect-square rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/4957646/pexels-photo-4957646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Te Amo Design Kalite"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-medium mb-6">Kalite Anlayışımız</h2>
              <p className="text-primary-700 mb-6">
                Her ürünümüz, seçkin malzemeler ve usta ellerde üretilmektedir. Kalite, tasarımlarımızın merkezinde yer alır. Müşterilerimize sadece güzel görünen değil, aynı zamanda uzun yıllar kullanabilecekleri dayanıklı mobilyalar sunmayı taahhüt ediyoruz.
              </p>
              <p className="text-primary-700">
                Mobilyalarımızın her bir detayı, yoğun kullanıma dayanacak şekilde tasarlanmış ve üretilmiştir. Kullandığımız ahşaplar, kumaşlar ve metal parçalar titizlikle seçilir ve kalite kontrolünden geçirilir. Bu sayede, ürünlerimiz hem estetik hem de fonksiyonel beklentileri karşılar.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-medium mb-6">Tasarım Felsefemiz</h2>
              <p className="text-primary-700 mb-6">
                Tasarımlarımızdaki temel felsefe, modern estetiği işlevsellikle buluşturmaktır. Mobilyalarımız, müşterilerimizin mekanlarına değer katarken, misafirlerine de maksimum konfor sunacak şekilde tasarlanmıştır.
              </p>
              <p className="text-primary-700">
                Minimal ve zarif çizgilerimiz, zamansız bir şıklık yaratırken, ergonomik yapılar konfordan ödün vermez. Her bir ürünümüz, kafe ve restoranların dinamik ortamına ve değişen ihtiyaçlarına uyum sağlayacak şekilde düşünülmüştür.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video md:aspect-square rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Te Amo Design Tasarım"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;