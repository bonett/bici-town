import { IInventory } from './inventory.interface';
export interface IHistorial extends IInventory {
  days: number;
  total: number;
}
