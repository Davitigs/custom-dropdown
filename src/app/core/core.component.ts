import { Component, OnInit } from '@angular/core';
import { ItemsGeneratorService } from './items-generator.service';
import { Observable } from 'rxjs';
import { DropdownItem } from '../models/dropdown';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {

  items$: Observable<DropdownItem[]> = this.itemsGenerator.getItems();
  selectedOption: DropdownItem | null = null;

  constructor(
    private itemsGenerator: ItemsGeneratorService
  ) {
    /**
     * Selected Option can be assign right here
     *
     * this.selectedOption = this.itemsGenerator.selectedItemMock;
     */
  }


  setSelectedOption(op: DropdownItem): void {
    this.selectedOption = op;
  }


}
