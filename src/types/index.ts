export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  material: string;
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  price: number;
  images: string[];
}

export type ProductCategory = 'table' | 'chair' | 'stool' | 'set';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}