import { Component, OnInit } from '@angular/core';
import { ItemsProviderService } from '../items-provider.service';

@Component({
  selector: 'app-item-appender',
  templateUrl: './item-appender.component.html',
  styleUrls: ['./item-appender.component.css']
})
export class ItemAppenderComponent implements OnInit {

  constructor(private itemsProvider: ItemsProviderService) { }

  ngOnInit() {
  }
  addItem(name: string) {
    this.itemsProvider.addItem(name);
  }
}
