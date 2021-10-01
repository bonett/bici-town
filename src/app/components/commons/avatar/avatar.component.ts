import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() sourceName: string = '';
  @Input() sourcePhotoUrl: string = '';
  @Input() sourceRole: string = '';

  public currentUser: string = '';
  public currentPhoto: string = '';
  public currentRole: string = '';

  constructor() {}

  ngOnInit() {
    this.currentUser = this.sourceName;
    this.currentPhoto = this.sourcePhotoUrl;
    this.currentRole = this.sourceRole;
  }
}
