export type ProductCategory = 'tees' | 'stickers' | 'zines' | 'other';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
  images: string[];
  sizes?: string[];
  inStock: boolean;
  featured: boolean;
  details?: string[];
  bgColor?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
