import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card group"
      >
        <Link to={`/product/${product.id}`}>
          {/* Görsel kutusu: sabit oran ve boyut */}
          <div className="w-full h-96 overflow-hidden relative">
            <img
                src={product.images[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

          {/* Alt içerik */}
          <div className="p-5">
            <h3 className="text-lg font-medium mb-2 group-hover:text-primary-800 transition-colors">
              {product.name}
            </h3>
            <p className="text-primary-600 text-sm mb-4">
              {product.shortDescription}
            </p>
            <div className="flex justify-between items-center">
            <span className="text-sm text-primary-700">
              {product.category === 'cekmecesiz_okeyset' && 'Çekmecesiz Okey Masa Seti'}
              {product.category === 'chair' && 'Sandalye'}
              {product.category === 'cekmeceli_okeyset' && 'Çekmeceli Okey Masa Seti'}
              {product.category === 'set' && 'Set'}
            </span>
              <span className="inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-700 transition-colors">
              Detay Gör
            </span>
            </div>
          </div>
        </Link>
      </motion.div>
  );
};

export default ProductCard;
