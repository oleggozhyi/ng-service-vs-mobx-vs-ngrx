import { Component, OnInit } from '@angular/core';

import { ItemsProviderService } from '../items-provider.service';
import { Item } from '../models/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: string[];
  constructor(private itemsProvider: ItemsProviderService) {
    this.items = itemsProvider.getItems();
    this.itemsProvider.itemsChanged.subscribe(() => this.items = itemsProvider.getItems());
    
  }
  
  ngOnInit() {
  }

}
