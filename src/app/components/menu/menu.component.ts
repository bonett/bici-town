import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IMenu } from 'src/app/models/menu.interface';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.services';
import { STATIC } from 'src/app/data';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userLogged: IUser;
  public pages: Array<IMenu> = STATIC.MENU;
  private userSubscription$: Subscription = null;

  constructor(
    private storageService: StorageService,
    public navCtrl: NavController,
    private userService: UserService
  ) {
    this.userSubscription$ = this.userService.userLogged$.subscribe(
      (currentUser) => {
        this.userLogged = currentUser && currentUser[currentUser.length - 1];
        this.storageService.set('user_logged', this.userLogged);
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
