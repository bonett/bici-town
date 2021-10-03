import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICategory } from 'src/app/models/category.interface';

@Component({
  selector: 'app-chip-filter',
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.scss'],
})
export class ChipFilterComponent implements OnInit {
  public categoryList: Array<ICategory> = [];
  public chipSelected: string = 'ALL';

  @Input() sourceList: Array<ICategory> = [];
  @Input() sourceSelected: string = 'ALL';
  @Output() handleChipSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.setCategoryList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setCategoryList();
    }
  }

  private setCategoryList(): void {
    this.chipSelected = this.sourceSelected;
    this.categoryList = this.sourceList;
  }

  public handleChipClicked(category: string): void {
    if (category !== 'ALL') {
      this.handleChipSelected.emit(category);
    } else {
      this.handleChipSelected.emit('ALL');
    }
  }
}
