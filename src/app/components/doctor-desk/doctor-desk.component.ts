import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/common/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-desk',
  templateUrl: './doctor-desk.component.html',
  styleUrls: ['./doctor-desk.component.css']
})
export class DoctorDeskComponent implements OnInit {

  appointment :Appointment[];
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private appointmentService : AppointmentService
  ) { }

  ngOnInit() {

    this.listAppointment();

  }
  listAppointment() {

    console.log("function calling from doctor desk");
    this.appointmentService.getAppointmentListAll().subscribe(
      data =>
      { 
      this.appointment=data;
      }
    )
  }

}
