import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  public userName: string = '';
  public photoUrl: string = '';
  public currentLocation: string = '';
  public points: number = 0;

  @Input() sourceData: IUser;

  constructor() {}

  ngOnInit() {
    this.initializeData();
  }

  private initializeData(): void {
    const { firstname, lastname, points, photo, location } = this.sourceData;

    this.userName = `${firstname} ${lastname}`;
    this.photoUrl = photo;
    this.points = points;
    this.currentLocation = location;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      const { points } = this.sourceData;
      this.points = points;
    }
  }
}
