import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/products';

const CategorySection: React.FC = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ürün Kategorileri
          </motion.h2>
          <motion.p 
            className="text-primary-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Her ihtiyaca uygun mobilya çözümlerimizle kafe ve restoranınızın atmosferini yükseltin.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/products?category=${category.id}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-100">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;