import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  visible:boolean=false
  @Output() visibilityEmitter=new EventEmitter<boolean>()
  changeVisibility(){
    this.visible=!this.visible
    this.visibilityEmitter.emit(this.visible)
  }
}

