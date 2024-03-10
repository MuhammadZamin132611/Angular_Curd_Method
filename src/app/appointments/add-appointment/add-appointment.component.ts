import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/add-appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {

  appointment: Appointment | any = new Appointment();
  addForm = new FormGroup({
    title: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    patient: new FormControl("", Validators.required),
    doctor: new FormControl("", Validators.required),
    reason: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  })
  Patients: Appointment[];
  constructor(private appointmentService: AppointmentService, private router: Router) {
  }

  //  1. Create an angular project
  //  2. Folder Structure
  //  3. Inside view 
  //  4. Create a model
  //  5. Create a Form 
  // I. Title
  // II. Date
  // III. Time 
  data: any;
  date:Date | any;
  ngOnInit() {
    this.getAllAppointment();
    this.date=new Date().toJSON().split('T'[0])
    // this.data = this.appointmentService.temp;
    // Call the api to get patient data and bind to patient drop down

    // Single responsibility class

    // const api = new AppointmentService();

    // const patients = this.appointmentService.addAppointment(this.appointment);
    // bindPatientsToControl(); 
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) { return }
    else {
      this.Appointment();
      this.router.navigate(['viewAppointment']);

    }

  }
  submitted: boolean = false;
  get add() {
    return this.addForm.controls
  }

  //  this.appointment = new Appointment();
  Appointment() {
    //1. Check if the appointment is submitted
    this.checkIfAppointmentIsSubmitted();

    // if (!this.submitted) {
    //   return;
    // }
    // else {
      //3. Check if the date of appointment is not greater than 30 days
      // const isDateValid = this.checkIfAppointmentDateIsNotGreaterThan30Days(this.appointment.value.date);

      // if (isDateValid) {
        //Calling the method to validate time
        //4. Check if the time of appointment is between 9am-6pm
      //   const isTimeValid = this.checkIfAppointmentTimeIsValid();

      //   if (isTimeValid) {

      //   }
      // }
    // }

    //2. Check if the mandatory fields are entered
    //This is taken care in the HTML with the required attribute




    //5. Check if the date of appointment is not for the previous day
    //6. Check if the length of the reason is not greater than 250 characters
    //7. Check if the appointment day is not falling on a Sunday
    //8. What if the browser is closed when user clicks on create appointment
    //9. This feature should work on Chrome, Safari, Edge and Firefrox
    //10. We should store the appointment in 2-3 seconds
    //11. Security - test cases - what should be considered

    this.appointment.title = this.addForm.value.title;
    this.appointment.date = this.addForm.value.date;
    this.appointment.time = this.addForm.value.time;
    this.appointment.patient = this.addForm.value.patient;
    this.appointment.doctor = this.addForm.value.doctor;
    this.appointment.reason = this.addForm.value.reason;
    this.appointment.description = this.addForm.value.description;


    this.appointmentService.addAppointment(this.appointment).subscribe();
  }

  checkIfAppointmentIsSubmitted() {

    if (this.addForm.invalid) {
      this.submitted = false;
    }

    this.submitted = true
  }

  //This is the status variable that has to be set and returned to the caller
  isDateValid: Boolean;
  checkIfAppointmentDateIsNotGreaterThan30Days(appointmentDate: Date) {
    appointmentDate= new Date;
    
    //Here we will write the logic to test if the appointment date is greater than 30 days
    ////Logic If condition
    //set the value of the variable based on the consdition
    this.isDateValid = true;

    //Then i will return the status of the condidtion checked
    return this.isDateValid;

  }

  //This is the status variable that has to be set and returned to the caller
  isTimeValid: Boolean;
  checkIfAppointmentTimeIsValid() {

    //Here we will write the logic to test if the appointment time is valid
    ////Logic If condition
    //set the value of the variable based on the consdition
    this.isTimeValid = true;

    //Then i will return the status of the condidtion checked
    return this.isTimeValid;

  }

  getAllAppointment() {
    this.appointmentService.getAppointment().subscribe((appointment) => {
      this.Patients = appointment;
    },
      (error) => {
        console.log(error);
      })
  }

}
