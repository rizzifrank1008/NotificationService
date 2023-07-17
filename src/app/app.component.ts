import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idDestinatario!:number;
  title = 'notificationProgectAngular';
  visible:boolean=false;
  receiveVisibility(visibility:boolean){
   this.visible=visibility
  }
  receiveId(id:number){
    this.idDestinatario = id
  }
}
