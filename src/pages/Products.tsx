import React, { useEffect, useState } from 'react';
import Layout from '../components/common/Layout';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductsByCategory } from '../data/products';
import { ProductCategory } from '../types';

const Products: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = (searchParams.get('category') as ProductCategory | 'all') || 'all';

  const allProducts = getProductsByCategory(category);
  const [visibleCount, setVisibleCount] = useState(8);

  // Reset scroll and visible count when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setVisibleCount(8);
  }, [category]);

  const getCategoryTitle = (): string => {
    switch (category) {
      case 'cekmeceli_okeyset':
        return 'Çekmeceli Okey Masa Seti';
      case 'chair':
        return 'Sandalyeler';
      case 'cekmecesiz_okeyset':
        return 'Çekmecesiz Okey Masa Seti';
      case 'set':
        return 'Setler';
      default:
        return 'Tüm Ürünler';
    }
  };

  const displayedProducts = allProducts.slice(0, visibleCount);

  return (
      <Layout>
        <section className="pt-32 pb-24 bg-primary-50">
          <div className="container-custom">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-medium mb-4">{getCategoryTitle()}</h1>
              <p className="text-primary-700 max-w-2xl mx-auto">
                Kafe ve restoranlar için tasarlanmış yüksek kaliteli mobilyalarımızı keşfedin. Şıklık ve dayanıklılık bir arada.
              </p>
            </motion.div>

            <ProductFilter />

            {displayedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayedProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>

                  {/* Daha fazla ürün varsa göster */}
                  {visibleCount < allProducts.length && (
                      <div className="mt-8 text-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 8)}
                            className="text-primary-800 hover:text-primary-900 font-medium text-sm border border-primary-800 px-6 py-2 rounded-full transition-colors"
                        >
                          Daha Fazla Göster
                        </button>
                      </div>
                  )}
                </>
            ) : (
                <div className="text-center py-12">
                  <p className="text-primary-700">Bu kategoride henüz ürün bulunmamaktadır.</p>
                </div>
            )}
          </div>
        </section>
      </Layout>
  );
};

export default Products;
