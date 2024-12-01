export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category?: string; 
    isAvailable?: string;
    removing?: boolean;
    quantity?: number;
  }