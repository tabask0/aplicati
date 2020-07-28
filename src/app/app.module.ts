import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharsComponent } from './chars/chars.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { MessageService } from './inventory/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    CharsComponent,
    ShopComponent,
    InventoryComponent,
    CharDetailComponent,
    ItemDetailComponent,
    DialogDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
