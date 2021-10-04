import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IInventory } from 'src/app/models/inventory.interface';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss'],
})
export class ModalOptionsComponent implements OnInit {
  public dataList: Array<IInventory> = [];
  public dataListBackup: Array<IInventory> = [];
  private itemSelected: string = '';

  @Input() search: boolean = false;
  @Input() title: string = 'Example here';
  @Input() source: Array<IInventory> = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.initializeData();
  }

  private initializeData(): void {
    this.dataList = this.source;
    this.dataListBackup = this.source;
  }

  public searchItem(e) {
    const searchTerm = e.target.value;
    this.dataList = this.dataListBackup;

    if (!searchTerm) {
      return;
    }

    this.dataList = this.dataList.filter((item) => {
      if (item.title && searchTerm) {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }
    });
  }

  public itemSelect(key: string): void {
    this.itemSelected = key;
    this.confirmModal();
  }

  public radioSelect(event): void {
    const {
      target: { value },
    } = event;
    this.itemSelected = value;
  }

  public async confirmModal() {
    if (this.itemSelected !== '') {
      await this.modalCtrl.dismiss({
        id: this.itemSelected,
      });
    } else {
      this.closeModal();
    }
  }

  public async closeModal() {
    await this.modalCtrl.dismiss({
      id: '',
    });
  }
}
