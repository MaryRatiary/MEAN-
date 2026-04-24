export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
  rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
