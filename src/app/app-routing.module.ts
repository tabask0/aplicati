import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharsComponent } from './chars/chars.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component'


const routes: Routes = [
  { path: '', component: CharsComponent},
  { path: 'chars', component: CharsComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
