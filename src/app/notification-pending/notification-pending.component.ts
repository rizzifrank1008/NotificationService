import { Component, Input } from '@angular/core';
import { Notification } from '../notification';


@Component({
  selector: 'app-notification-pending',
  templateUrl: './notification-pending.component.html',
  styleUrls: ['./notification-pending.component.css']
})
export class NotificationPendingComponent{
  @Input() idDestinatario!:number;
  @Input()show='pending'
  notifications: Notification[] = [];
  ENDPOINT:string =`http://localhost:8080/api/notification-service/`
 
  get(){
    setInterval(async () => {
    try {
      const response = await fetch(`${this.ENDPOINT}readNotifications`);
      let json = await response.json();
      this.notifications = json;
      if(this.idDestinatario){
        this.notifications = this.notifications.filter(n => n.destinatario == this.idDestinatario)
      }
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }, 1000);
}
constructor(){
  this.get()
}
changeStatus(id:number, status:string){
  fetch(`http://localhost:8080/api/notification-service/updateNotification`, {
 method:'PATCH',
 headers:{
  'Content-type': 'application/json'},
  body: JSON.stringify({
    id:id,
    status:status
  })
})
}
}
