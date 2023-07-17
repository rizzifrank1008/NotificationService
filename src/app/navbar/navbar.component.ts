import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  visible:boolean=false
  @ViewChild('idDestinatario') idDestinatario!:ElementRef;
  @Output() idEmitter = new EventEmitter<number>
  @Output() visibilityEmitter=new EventEmitter<boolean>()
  changeVisibility(){
    this.visible=!this.visible
    this.visibilityEmitter.emit(this.visible)
  }
  emitId(){
    this.idEmitter.emit(this.idDestinatario.nativeElement.value)
  }
}

