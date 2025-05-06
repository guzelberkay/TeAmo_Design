import React from 'react';
import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary-800" />,
      title: 'WhatsApp',
      description: 'Hızlı bilgi almak ve sipariş vermek için',
      action: {
        text: 'WhatsApp\'tan Mesaj Gönder',
        link: 'https://wa.me/905555555555'
      }
    },
    {
      icon: <Mail className="h-10 w-10 text-primary-800" />,
      title: 'E-posta',
      description: 'Sorularınız ve özel siparişleriniz için',
      action: {
        text: 'E-posta Gönder',
        link: 'mailto:info@teamodesign.com'
      }
    },
    {
      icon: <Instagram className="h-10 w-10 text-primary-800" />,
      title: 'Instagram',
      description: 'Son koleksiyonlarımızı ve tasarımlarımızı takip edin',
      action: {
        text: 'Instagram\'da Takip Et',
        link: 'https://instagram.com/teamodesign'
      }
    }
  ];
  
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
            <h1 className="text-4xl md:text-5xl font-medium mb-6">İletişim</h1>
            <p className="text-primary-700">
              Sorularınız, önerileriniz veya siparişleriniz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-medium mb-4">Bizimle İletişime Geçin</h2>
                <p className="text-primary-700">
                  Fiziksel mağazamız yoktur. Online olarak hizmet vermekteyiz.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <div className="mb-4">{method.icon}</div>
                    <h3 className="text-lg font-medium mb-2">{method.title}</h3>
                    <p className="text-primary-600 text-sm mb-4">{method.description}</p>
                    <a 
                      href={method.action.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-800 font-medium hover:text-primary-700 transition-colors"
                    >
                      {method.action.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-medium mb-4">Çalışma Saatlerimiz</h2>
            <p className="text-primary-700 mb-2">
              Online hizmet vermekteyiz.
            </p>
            <p className="text-primary-700">
              WhatsApp üzerinden <strong>7/24</strong> mesaj bırakabilirsiniz. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;