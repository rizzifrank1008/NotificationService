import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationPendingComponent } from './notification-pending/notification-pending.component';
import { NotificationAcceptedComponent } from './notification-accepted/notification-accepted.component';
import { NotificationDeniedComponent } from './notification-denied/notification-denied.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationPendingComponent,
    NotificationAcceptedComponent,
    NotificationDeniedComponent,
    NotificationFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
