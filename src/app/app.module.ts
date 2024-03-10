import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './appointments/add-appointment/add-appointment.component';
import { AppointmentsModule } from './appointments/appointments.module';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppointmentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
