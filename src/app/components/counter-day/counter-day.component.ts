import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter-day',
  templateUrl: './counter-day.component.html',
  styleUrls: ['./counter-day.component.scss'],
})
export class CounterDayComponent implements OnInit {
  public counter: number = 0;

  @Input() sourceCounter: number = 0;
  @Output() handleIncreaseClicked = new EventEmitter();
  @Output() handleDecreaseClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.initializeData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.initializeData();
    }
  }

  private initializeData(): void {
    this.counter = this.sourceCounter;
  }

  public increaseCounter(): void {
    this.handleIncreaseClicked.emit();
  }

  public decreaseCounter(): void {
    this.handleDecreaseClicked.emit();
  }
}
