import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../shop-items';
import { Item} from '../item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items = ITEMS;
  selectedItem: Item;

constructor() { }

  ngOnInit(): void {
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
  public buyedItems:any[]=[];
}

