import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { MessageService } from '../inventory/services/message.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor(private messageService: MessageService) { }
  sendMessage(): void {
    this.messageService.sendMessage('Character/Item added!')
}
  clearMessage(): void {
    this.messageService.clearMessages();
}
  ngOnInit(): void {
  }
  public buyedItems:any[]=[];
  addItems(item){
    this.buyedItems.push(item)
   }
}
