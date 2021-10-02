import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  public currentColor: string = '';

  @Input() sourceColor: string = '';

  constructor() {}

  ngOnInit() {
    this.currentColor = this.sourceColor;
  }
}
