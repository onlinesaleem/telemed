import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../common/appointment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Telr } from '../common/telr';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  private appointmentUrl: string;
  doctorid: number;
  constructor(private httpClient: HttpClient) {
    this.appointmentUrl = `http://localhost:8080/api/appointments`;


  }







getAppointmentListAll():Observable<Appointment[]> 
{
  const appUrl = `${this.appointmentUrl}`;
  return this.httpClient.get<GetResponseAppointmentlist>(appUrl).pipe(
    map(response => response._embedded.appointments)
     );
}






 public telrpayment(telr: Telr){

  const telrurl = `https://secure.telr.com/gateway/order.json`;

  
  console.log(`the url is ${telrurl}`);
  return this.httpClient.post(telrurl,telr).toPromise().then(
    data => {
      console.log(data);
    }
  );

}
  

  public saveAppointment(appointment : Appointment){
    
  console.log(this.appointmentUrl);
  return this.httpClient.post<Appointment>(this.appointmentUrl, appointment);
}

}

interface GetResponseAppointmentlist {


  _embedded: {
    appointments: Appointment[];
  }

}

