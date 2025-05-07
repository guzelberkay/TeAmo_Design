import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import ProductInfo from '../components/product-detail/ProductInfo';
import { getProductById, getProductsByCategory } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = id ? getProductById(id) : undefined;

  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const relatedProducts = getProductsByCategory(product.category)
      .filter((p) => p.id !== product.id)
      .slice(0, 4);

  return (
      <Layout>
        <section className="pt-32 pb-16 bg-primary-50">
          <div className="container-custom">
            <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(-1)}
                className="inline-flex items-center text-primary-700 hover:text-primary-900 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Geri Dön
            </motion.button>
          </div>

          {/* Görselin kenar boşluklarını kaldırmak için dışarı taşıyoruz */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <div className="container-custom">
              <ProductInfo product={product} />
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
            <section className="py-16 bg-white">
              <div className="container-custom">
                <h2 className="text-2xl font-medium mb-8">Benzer Ürünler</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </div>
            </section>
        )}
      </Layout>
  );
};

export default ProductDetail;
