import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() sourceItem: object;

  public item: object = null;
  constructor() {}

  ngOnInit() {
    this.item = this.sourceItem;
  }
}
