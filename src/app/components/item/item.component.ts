import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public item: object = {};

  @Input() sourceItem: object;

  constructor() {}

  ngOnInit() {
    console.log(this.sourceItem);

    this.item = this.sourceItem;
  }
}
