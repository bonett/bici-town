import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public showLoading: boolean = true;

  @Input() sourceStatus: boolean = true;

  constructor() {}

  ngOnInit() {
    this.handleShowLoader(this.sourceStatus);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.handleShowLoader(this.sourceStatus);
    }
  }

  private handleShowLoader(status: boolean): void {
    this.showLoading = status;
  }
}
