import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userName: string = 'wilfrido bonett';
  public userPhoto: string =
    'https://www.ludoviccareme.com/files/image_211_image_fr.jpg';
  public userRole: string = 'Developer';

  constructor() {}

  ngOnInit() {}
}
