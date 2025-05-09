import React, { useState } from 'react';
import { LogIn as WhatsappLogo } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { formatPrice, generateWhatsAppLink } from '../../utils/helpers';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
        {/* Görsel Alanı */}
        <div className="space-y-4 w-full">
          <motion.div
              className="relative bg-transparent w-full rounded-lg overflow-hidden object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
          >

              <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
              />

          </motion.div>

          {/* Küçük Görseller */}
          <div className="flex flex-wrap gap-2">
            {product.images.map((image, index) => (
                <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 p-1 rounded-md border transition-opacity ${
                        activeImage === index
                            ? 'border-primary-800'
                            : 'border-transparent opacity-80 hover:opacity-100'
                    }`}
                >
                  <img
                      src={image}
                      alt={`${product.name} - Görsel ${index + 1}`}
                      className="w-full h-full object-contain"
                  />
                </button>
            ))}
          </div>
        </div>

        {/* Ürün Bilgi Alanı */}
        <div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-medium mb-4">{product.name}</h1>

            <div className="mb-6">
              <div className="flex items-center space-x-2 text-sm text-primary-600 mb-4">
              <span>
                {product.category === 'cekmecesiz_okeyset' && 'Çekmecesiz Okey Masa Seti'}
                {product.category === 'chair' && 'Sandalye'}
                {product.category === 'cekmeceli_okeyset' && 'Çekmeceli Okey Masa Seti'}
                {product.category === 'set' && 'Set'}
              </span>
                <span>•</span>
                <span>Stokta</span>
              </div>

              <div className="text-2xl font-medium text-primary-900 mb-6">
                {formatPrice(product.price)}
              </div>

              <p className="text-primary-800 mb-8">{product.description}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-medium mb-2">Malzeme</h3>
                  <p className="text-primary-700">{product.material}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Ölçüler</h3>
                  <p className="text-primary-700">
                    {product.dimensions.width} cm (genişlik) x {product.dimensions.depth} cm (derinlik) x {product.dimensions.height} cm (yükseklik)
                  </p>
                </div>
              </div>

              <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full sm:w-auto flex items-center justify-center"
              >
                <WhatsappLogo className="mr-2 h-5 w-5" />
                WhatsApp'tan Sipariş Ver
              </a>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default ProductInfo;
