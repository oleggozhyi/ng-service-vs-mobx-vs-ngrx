import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './models/models';

@Injectable()
export class ItemsProviderService {
  
  public itemsChanged: EventEmitter<{}> = new EventEmitter(); 

  private items: Item[] =[
    { name: "bread"},
    { name: "butter"}
  ]; 
  constructor() { }
  public getItems(): string[] {
    return this.items.map(i => i.name);
  }
  public getItemsCount() {
    return this.items.length;
  }
  public addItem(name: string) {
    this.items.push({
      name: name
    });
    this.itemsChanged.emit();
  }
}
