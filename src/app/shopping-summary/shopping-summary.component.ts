import { Component, OnInit } from '@angular/core';
import { ItemsProviderService } from '../items-provider.service';

@Component({
  selector: 'app-shopping-summary',
  templateUrl: './shopping-summary.component.html',
  styleUrls: ['./shopping-summary.component.css']
})
export class ShoppingSummaryComponent implements OnInit {
  itemsCount: number;
  constructor(private itemsProvider: ItemsProviderService) {
    this.itemsCount = itemsProvider.getItemsCount();
    this.itemsProvider.itemsChanged.subscribe(() => this.itemsCount = itemsProvider.getItemsCount());
   }

  ngOnInit() {
  }

}
