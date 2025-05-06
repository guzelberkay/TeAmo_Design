import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { categories } from '../../data/products';

const ProductFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get('category') || 'all';
  
  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(location.search);
    
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    
    navigate({ pathname: location.pathname, search: params.toString() });
  };
  
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Filter size={20} className="text-primary-800" />
        <h3 className="font-medium">Kategoriler</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm ${
            currentCategory === 'all'
              ? 'bg-primary-800 text-white'
              : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
          } transition-colors`}
        >
          Tümü
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm ${
              currentCategory === category.id
                ? 'bg-primary-800 text-white'
                : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
            } transition-colors`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;