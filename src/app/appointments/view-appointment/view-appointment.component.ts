import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/add-appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {


  // Patients: Patients = new Patients();
  Patients: any;

  DataModalObj = {
    PatientName: "",
    Gender: "",
    MobileNo: "",
    IsRegistered: "",
    RegisteredDate: "",
    City: "",
    State: "",
    Country: "",
    Zip_Code: "",
    Latitude: "",
    Longitud: "",
  }

  constructor(private appointmentService: AppointmentService) {
  }



  appointment: Appointment | any = new Appointment()

  ngOnInit(): void {

    this.getAllAppointment();

  }

  getAllAppointment() {
    this.appointmentService.getAppointment().subscribe((appointment) => {
      this.Patients = appointment;
    },
      (error) => {
        console.log(error);
      })
  }




  editAppointment(appointment: Appointment) {
    this.appointmentService.setAppointment(appointment)
  }


  DeleteData(data: Appointment) {
    this.appointmentService.deleteAppointment(data.id).subscribe();
    window.location.reload();
  }
}


// data
  // FetchAddressData(data: Appointment) {
  //  this.appointmentService.setAppointment(data)
  // }