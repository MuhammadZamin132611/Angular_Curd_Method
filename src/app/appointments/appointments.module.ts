import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';


@NgModule({
  declarations: [
    ViewAppointmentComponent,
    EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AppointmentsModule { }
