import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Menu } from 'src/app/models/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userName: string = 'wilfrido bonett';
  public userPhoto: string = '../../../../assets/img/profile.jpeg';
  public userRole: string = 'Developer';

  public pages: Array<Menu> = [
    {
      title: 'Catalogo Completo',
      pageName: 'inventory',
      tabComponent: 'InventoryPage',
      index: 0,
      icon: 'browsers-outline',
    },
    {
      title: 'Historial de Renta',
      pageName: 'historial',
      tabComponent: 'HistorialPage',
      index: 1,
      icon: 'list',
    },
  ];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
}
