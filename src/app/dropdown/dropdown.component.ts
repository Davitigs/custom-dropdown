import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItem } from '../models/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() placeholder: string = 'placeholder'
  @Input() items!: DropdownItem[] | null;
  @Input() set selectedOption(value: DropdownItem | null) {
    this._selectedOption = value;
  };
  @Output() setSelectedOption: EventEmitter<DropdownItem> = new EventEmitter<DropdownItem>();

  trackByFn(index: number, item: DropdownItem) {
    if (!item) return null;
    return item.id;
  }


  _selectedOption: DropdownItem | null = null;

  dropdownOpened: boolean = false;


  openDropDown(): void {
    this.dropdownOpened = true;
  }

  closeDropDown(): void {
    this.dropdownOpened = false;
  }

  selectItem(item: DropdownItem): void {
    if (this._selectedOption && this._selectedOption.id === item.id) {
      return;
    }
    this.setSelectedOption.emit(item);
  }

}
