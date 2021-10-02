import { IInventory } from './inventory.interface';

export interface IHistorial extends IInventory {
  bike: string;
  email: string;
  phone: string;
  rentDate: string;
}
