import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
      alert("Added!");
  }
  clearMessages() {
      this.subject.next();
      alert("Inventory cleared!")
  }
  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}

