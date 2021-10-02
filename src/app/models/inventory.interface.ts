import { ICategory } from './category.interface';

export interface IInventory extends ICategory {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  location: string;
  color: string;
  size: string;
}
