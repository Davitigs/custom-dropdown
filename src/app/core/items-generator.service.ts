import { Injectable } from '@angular/core';
import { DropdownItem } from '../models/dropdown';
import { mergeMap, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsGeneratorService {

  items: DropdownItem[] = Array(8).fill(0).map((_, idx) => ({id: idx.toString(), itemName: `Option ${idx}`}));
  selectedItemMock: DropdownItem = this.items[3];


  constructor() { }


  getItems() {
    return timer(2000).pipe(
      mergeMap(_ => of(this.items))
    )
  }
}
