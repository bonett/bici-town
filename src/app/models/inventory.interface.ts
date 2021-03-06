import { ICategory } from './category.interface';
export interface IInventory extends ICategory {
  id?: string;
  key?: string;
  uuid?: string;
  thumbnail: string;
  title: string;
  price?: number;
  type: string;
  description: string;
  location: string;
  color: string;
  size: string;
  atCreated: any;
  days?: any;
  total?: number;
  categoryId: string;
  client?: string;
}
