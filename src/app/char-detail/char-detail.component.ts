import { Component, OnInit, Input } from '@angular/core';
import { Char } from '../char';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';
import { MessageService } from '../inventory/services/message.service'

export interface DialogData {
        description: 'For blood and thunder my friend!'
      };
@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit {

  @Input() char: Char;
  constructor(public dialog: MatDialog, private messageService: MessageService) { }

  sendMessage(): void {
    this.messageService.sendMessage('Character/Item added!');
};
  clearMessage(): void {
    this.messageService.clearMessages();
};
  openDialog() {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      data: {description: 'May the light be with you champion!'}
    });
  }
  ngOnInit(): void {
  }
}


