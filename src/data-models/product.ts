import { Tag } from './tag';

export type Product = {
  id: string;
  title: string;
  price: number;
  image?: string;
  tags: Tag[];
  description: string;
};
