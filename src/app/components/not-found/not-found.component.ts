import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  public errMsg: string = '';

  @Input() sourceMessage: string = '';

  constructor() {}

  ngOnInit() {
    this.setErrorMessage(this.sourceMessage);
  }

  private setErrorMessage(message: string): void {
    this.errMsg = message;
  }
}
