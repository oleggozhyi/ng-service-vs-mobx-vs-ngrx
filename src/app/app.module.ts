import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingSummaryComponent } from './shopping-summary/shopping-summary.component';
import { ItemsProviderService } from './items-provider.service';
import { ItemAppenderComponent } from './item-appender/item-appender.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingSummaryComponent,
    ItemAppenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemsProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
