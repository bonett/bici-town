import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public item: any;
  public rentalDays: any;
  public endRental: number = null;
  public status: string = null;

  @Input() sourceItem: object;

  constructor() {}

  ngOnInit() {
    this.item = this.sourceItem;

    const { atCreated, total, days, status } = this.item;
    if (total && status) {
      const start = moment(new Date()).format('D');
      const end = moment(atCreated).add(days, 'days').format('D');

      this.endRental = parseInt(end) - parseInt(start);
      this.status = status;
    }
  }
}
