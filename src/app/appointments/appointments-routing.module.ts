import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const routes: Routes = [
  {path:'viewAppointment', component:ViewAppointmentComponent},
  {path:'', component:AddAppointmentComponent},
  {path:'edit/:id', component:EditAppointmentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
