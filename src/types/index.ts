export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'food' | 'books' | 'essentials';
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  favorites: string[];
  orders: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'delivered';
  createdAt: Date;
  deliveryMethod: 'pickup' | 'delivery';
  deliveryAddress?: string;
}