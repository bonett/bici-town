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
      thumbnail: '../../../assets/img/7.jpeg',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '../../../assets/img/7.jpeg',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail: '',
      title: 'Trek MTB, para damas',
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
      gender: 'Mujer',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail: '',
      title: 'Trek MTB, para damas',
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
      gender: 'Mujer',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 1,
      thumbnail: '',
      title: 'Specialized MTB - 29, Doble suspensión',
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
      gender: 'Unisex',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail: '',
      title: 'Trek MTB, para damas',
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
      gender: 'Mujer',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail: '',
      title: 'Trek MTB, para damas',
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
      gender: 'Mujer',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail: '',
      title: 'Trek MTB, para damas',
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
      gender: 'Mujer',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
    {
      categoryId: 1,
      id: 2,
      thumbnail: '',
      title: 'Trek MTB, para damas',
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
      gender: 'Mujer',
      media: [
        {
          id: '12',
          url: '',
        },
        {
          id: '12323',
          url: '',
        },
        {
          id: '123',
          url: '',
        },
      ],
    },
  ];
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  public showItemDetails(item: any) {
    const { id } = item;
    this.navCtrl.navigateForward(`inventory/details/${id}`);
  }
}
