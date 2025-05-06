import { Product } from '../types';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const generateWhatsAppLink = (product: Product): string => {
  const phoneNumber = '905555555555'; // Replace with actual phone number
  const message = `Merhaba, "${product.name}" ürünü hakkında bilgi almak istiyorum.`;
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};