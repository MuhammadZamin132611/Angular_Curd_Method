import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {

  }
  url: string = 'http://localhost:3000';

  

  getAppointment() {
    return this.http.get<Appointment[]>(this.url + `/appointment`).pipe(map((response) => {
      return response;
    }))
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.url+`/appointment`, appointment);
  }
























  
  temp:Appointment;
  setAppointment(data:Appointment){
    this.temp = data;
  }

  editAppointment(appointment:Appointment){
    return this.http.put(this.url+`/appointment/`+appointment.id,appointment);
  }

  deleteAppointment(id:Appointment){
    return this.http.delete(this.url+`/appointment/`+id);
  }
}






















// addAppointment(appointment:Appointment): Observable<Appointment[]> {
//   return this.http.post<any>("http://localhost:3300/appointment", appointment);
//   // return this.http.post("http://localhost:3300/appointment",appointment).pipe(
//     // map((responseData:any) => {
//       // const postArray: Appointment[] = [];
//       // for (const key in responseData) {
//       //   if (responseData.hasOwnProperty(key)) {
//       //     // const appointment = new appointment
//       //     postArray.push({ ...responseData[key], id: key });
//       //   }
//       // }
//       // return postArray; 
//   //   }),
//   //   catchError((errorRes: string) => {
//   //     // send to analytics server
//   //     console.log('error from catchError ' + errorRes);
//   //     return throwError(errorRes);
//   //   })
//   // );
// }
