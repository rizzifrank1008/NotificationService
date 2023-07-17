import { Component, ElementRef, ViewChild } from '@angular/core';
import { Messaggio } from '../messaggio';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent {
@ViewChild('testo') testo!:ElementRef;
@ViewChild('mittente') mittente!:ElementRef;
@ViewChild('destinatario') destinatario!:ElementRef;

aggiungiNotifica(){
    let messaggio:Messaggio={
    text:this.testo.nativeElement.value,
    status: 'pending',
      mittente:this.mittente.nativeElement.value,
      destinatario:this.destinatario.nativeElement.value
  } 
 
  this.postNotifications(messaggio)
  
}
async postNotifications(messaggio:Messaggio){
  
 await  fetch(`http://localhost:8080/api/notification-service/createNotification`, {
   method:'POST',
   headers:{
    'Content-type': 'application/json'},
    body: JSON.stringify(messaggio)
 })}
}
