import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  public inventoryList: Array<any> = [
    {
      categoryId: 1,
      id: 1,
      thumbnail:
        'https://labicikleta.com/wp-content/uploads/2021/04/i2FOTOS-Ri%CC%81gida-vs-Doble-8.jpg',
      title: 'Specialized CRX-2',
      description:
        'Hermosa bicicleta marce Specialized para disfrutar tus rutas MTB. Talla 29 Pulgadas doble suspensión. Suspensión Fox y más',
      atCreated: '01/10/2021',
      author: 'Alejandra palacio',
      location: 'madrid',
      address: 'Calle real diagonal al bar de moe',
      phone: '38932893',
      rate: 4.5,
      color: 'Negro',
      year: 2021,
      size: 'S',
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail:
        'https://as.com/deportes_accion/imagenes/2020/02/17/reportajes/1581954305_702109_1581955981_noticiareportajes_grande.jpg',
      title: 'Specialized Golden Boy',
      description:
        'Hermosa bicicleta marce Specialized para disfrutar tus rutas MTB. Talla 29 Pulgadas doble suspensión. Suspensión Fox y más',
      atCreated: '01/10/2021',
      author: 'Alejandra palacio',
      location: 'madrid',
      address: 'Calle real diagonal al bar de moe',
      phone: '38932893',
      rate: 4.5,
      color: 'Negro',
      year: 2021,
      size: 'XL',
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail:
        'https://labicikleta.com/wp-content/uploads/2021/04/i2FOTOS-Ri%CC%81gida-vs-Doble-12.jpg',
      title: 'Scott Lite 3',
      description:
        'Hermosa bicicleta marce Specialized para disfrutar tus rutas MTB. Talla 29 Pulgadas doble suspensión. Suspensión Fox y más',
      atCreated: '01/10/2021',
      author: 'Alejandra palacio',
      location: 'madrid',
      address: 'Calle real diagonal al bar de moe',
      phone: '38932893',
      rate: 4.5,
      color: 'Negro',
      year: 2021,
      size: 'XL',
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail:
        'https://trek.scene7.com/is/image/TrekBicycleProducts/DomaneSLR9eTap_21_33300_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
      title: 'Trek Marlin R2',
      description:
        'Hermosa bicicleta marce Specialized para disfrutar tus rutas MTB. Talla 29 Pulgadas doble suspensión. Suspensión Fox y más',
      atCreated: '01/10/2021',
      author: 'Alejandra palacio',
      location: 'madrid',
      address: 'Calle real diagonal al bar de moe',
      phone: '38932893',
      rate: 4.5,
      color: 'Negro',
      year: 2021,
      size: 'M',
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail:
        'https://labicikleta.com/wp-content/uploads/2021/04/i2FOTOS-Ri%CC%81gida-vs-Doble-1.jpg',
      title: 'Specialized Evox',
      description:
        'Hermosa bicicleta marce Specialized para disfrutar tus rutas MTB. Talla 29 Pulgadas doble suspensión. Suspensión Fox y más',
      atCreated: '01/10/2021',
      author: 'Alejandra palacio',
      location: 'madrid',
      address: 'Calle real diagonal al bar de moe',
      phone: '38932893',
      rate: 4.5,
      color: 'Negro',
      year: 2021,
      size: 'XL',
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail:
        'https://trek.scene7.com/is/image/TrekBicycleProducts/DomaneSLR7Etap_21_31050_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
      title: 'Trek Ruta 12',
      description:
        'Rento bicicleta Trek. Talla L Una suspensión. Suspensión Brembo',
      atCreated: '11/06/2021',
      author: 'Andrea Gomez',
      location: 'Barcelona',
      address: 'Calle barcelona # 12 - 39',
      phone: '38932893',
      rate: 4,
      color: 'Blanco',
      year: 2020,
      size: 'L',
    },
  ];
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  public showItemDetails(item: any) {
    const { id } = item;
    this.navCtrl.navigateForward(`inventory/details/${id}`);
  }
}
