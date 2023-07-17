import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';


@Component({
  selector: 'app-notification-pending',
  templateUrl: './notification-pending.component.html',
  styleUrls: ['./notification-pending.component.css']
})
export class NotificationPendingComponent{
  notifications: Notification[] = [];
  ENDPOINT:string =`http://localhost:8080/api/notification-service/`
    async getProva(){
      await  fetch(`${this.ENDPOINT}readNotifications`)
      .then((res) => res.json())
      .then((json) => {
          this.notifications = json;
          
      })
    }
   constructor() {
    this.getProva();
  }
}
