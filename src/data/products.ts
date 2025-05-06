import {Product, CategoryInfo, ProductCategory} from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'table',
    name: 'Masalar',
    description: 'Şık ve dayanıklı cafe masaları',
    image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'chair',
    name: 'Sandalyeler',
    description: 'Konforlu ve estetik cafe sandalyeleri',
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'stool',
    name: 'Bar Tabureleri',
    description: 'Modern ve şık bar tabureleri',
    image: 'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'set',
    name: 'Setler',
    description: 'Uyumlu ve ekonomik masa-sandalye setleri',
    image: 'https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Milano Masa',
    category: 'table',
    shortDescription: 'Şık ve dayanıklı cafe masası',
    description: 'Milano masa, modern çizgileri ve dayanıklı yapısıyla cafe ve restoranlar için ideal bir seçimdir. Kolay temizlenen yüzeyi ve şık tasarımıyla mekanınıza değer katar.',
    material: 'Meşe ağacı, çelik ayak',
    dimensions: {
      width: 80,
      depth: 80,
      height: 75
    },
    price: 2800,
    images: [
      'https://images.pexels.com/photos/3935312/pexels-photo-3935312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3935310/pexels-photo-3935310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '2',
    name: 'Venedik Masa',
    category: 'table',
    shortDescription: 'Geniş ve kullanışlı restoran masası',
    description: 'Venedik masa, geniş yüzeyi ve sağlam yapısıyla kalabalık gruplar için idealdir. Ahşap ve metal detayların uyumu şık bir görünüm sunar.',
    material: 'Ceviz ağacı, siyah metal ayak',
    dimensions: {
      width: 120,
      depth: 80,
      height: 75
    },
    price: 3500,
    images: [
      'https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '3',
    name: 'Toscana Sandalye',
    category: 'chair',
    shortDescription: 'Konforlu ve estetik cafe sandalyesi',
    description: 'Toscana sandalye, ergonomik tasarımı ve şık görünümüyle cafe ve restoranlar için mükemmel bir seçimdir. Hafif yapısı kolay taşıma imkanı sunar.',
    material: 'Meşe ağacı, kumaş kaplama',
    dimensions: {
      width: 45,
      depth: 50,
      height: 85
    },
    price: 1200,
    images: [
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '4',
    name: 'Napoli Sandalye',
    category: 'chair',
    shortDescription: 'Modern ve dayanıklı restoran sandalyesi',
    description: 'Napoli sandalye, modern tasarımı ve dayanıklı yapısıyla uzun yıllar kullanım sağlar. Yüksek kaliteli ahşap ve metal kombinasyonu ile şık bir görünüm sunar.',
    material: 'Kayın ağacı, siyah metal detay',
    dimensions: {
      width: 48,
      depth: 52,
      height: 88
    },
    price: 1500,
    images: [
      'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '5',
    name: 'Roma Bar Taburesi',
    category: 'stool',
    shortDescription: 'Şık ve konforlu bar taburesi',
    description: 'Roma bar taburesi, yüksek ergonomisi ve şık tasarımıyla bar ve cafe alanları için idealdir. Ayarlanabilir yüksekliği farklı bar tezgahlarına uyum sağlar.',
    material: 'Meşe ağacı, çelik gövde',
    dimensions: {
      width: 40,
      depth: 40,
      height: 75
    },
    price: 1800,
    images: [
      'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '6',
    name: 'Sicilia Bar Taburesi',
    category: 'stool',
    shortDescription: 'Modern ve minimalist bar taburesi',
    description: 'Sicilia bar taburesi, minimalist tasarımı ve sağlam yapısıyla modern mekanlar için mükemmel bir seçimdir. Konforlu oturum alanı uzun süreli kullanım için idealdir.',
    material: 'Ahşap, metal ayak',
    dimensions: {
      width: 38,
      depth: 38,
      height: 78
    },
    price: 1600,
    images: [
      'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '7',
    name: 'Floransa Set',
    category: 'set',
    shortDescription: 'Uyumlu masa ve sandalye seti',
    description: 'Floransa set, bir masa ve dört sandalyeden oluşan uyumlu bir settir. Cafe ve küçük restoranlar için ekonomik ve şık bir çözüm sunar.',
    material: 'Meşe ağacı, çelik detaylar',
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7500,
    images: [
      'https://images.pexels.com/photos/279640/pexels-photo-279640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '8',
    name: 'Verona Set',
    category: 'set',
    shortDescription: 'Lüks restoran mobilya seti',
    description: 'Verona set, bir masa ve altı sandalyeden oluşan lüks bir settir. Yüksek kaliteli malzemeler ve zarif tasarımıyla özel restoranlar için idealdir.',
    material: 'Ceviz ağacı, deri kaplama',
    dimensions: {
      width: 160,
      depth: 90,
      height: 75
    },
    price: 12000,
    images: [
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2995333/pexels-photo-2995333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
];

export const getProductsByCategory = (category: ProductCategory | 'all'): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};