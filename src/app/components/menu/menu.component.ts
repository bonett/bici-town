import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IMenu } from 'src/app/models/menu.interface';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.services';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userName: string = 'wilfrido bonett';
  public userPhoto: string = '../../../../assets/img/profile.jpeg';
  public userRole: string = 'Software Engineer';
  public userLogged: IUser;
  private userSubscription$: Subscription = null;

  public pages: Array<IMenu> = [
    {
      title: 'Catalogo Completo',
      pageName: 'inventory',
      tabComponent: 'InventoryPage',
      index: 0,
      icon: 'storefront-outline',
    },
    {
      title: 'Historial de Renta',
      pageName: 'historial',
      tabComponent: 'HistorialPage',
      index: 1,
      icon: 'bar-chart-outline',
    },
    {
      title: 'Configuración',
      pageName: 'settings',
      tabComponent: 'SettingPage',
      index: 2,
      icon: 'settings-outline',
    },
    {
      title: 'Salir',
      pageName: 'signOut',
      tabComponent: 'SignOutPage',
      index: 2,
      icon: 'log-out-outline',
    },
  ];

  constructor(public navCtrl: NavController, private userService: UserService) {
    this.userSubscription$ = this.userService.userLogged$.subscribe(
      (currentUser) => {
        this.userLogged = currentUser && currentUser[currentUser.length - 1];
      }
    );
  }

  ngOnInit() {
    this.initializeData();
  }

  private initializeData(): void {
    this.userService.getUserList();
  }

  ngOnDestroy() {
    this.userSubscription$.unsubscribe();
  }
}
