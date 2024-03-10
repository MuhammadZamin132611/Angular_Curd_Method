import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/add-appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit{
  appointment: Appointment | any = new Appointment();

  editForm = new FormGroup({
    title: new FormControl(""),
    date: new FormControl(""),
    time: new FormControl(""),
    patient: new FormControl(""),
    doctor: new FormControl(""),
    reason: new FormControl(""),
    description: new FormControl("")
  })

  constructor(private appointmentService: AppointmentService,private route:Router,){

  }
  ngOnInit(): void {
    this.appointment = this.appointmentService.temp;
  }
  Appointment(){
    this.appointmentService.editAppointment(this.appointment).subscribe();
    window.location.assign('/viewAppointment')
  }


}
