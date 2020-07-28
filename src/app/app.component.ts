import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorldOfAngular';
  public show:boolean = false;
  public buttonName:any = 'Inventory';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
  }
}
