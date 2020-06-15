import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from 'src/app/common/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { NgbDatepicker, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-appointment-form',
  //templateUrl: './doctor-appointment-form.component.html',
  templateUrl: './doctor-appointment-form.component-final.html',
  styleUrls: ['./doctor-appointment-form.component.css']
})
export class DoctorAppointmentFormComponent implements OnInit {

  public minDate: Date;
  public maxDate: Date;
  appointment : Appointment;
  doctorid: number=null;
  consFees: number=null;

  apptime :Date;

  

  appointmentFormGroup : FormGroup;
  myTime: Date;

  minTime: Date = new Date();
  maxTime: Date = new Date();

  //time between 9 Am to 9 PM


  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private appointmentService : AppointmentService,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar)
    { 

      this.minTime.setHours(9);
      this.minTime.setMinutes(0);
      this.maxTime.setHours(21);
      this.maxTime.setMinutes(0);
      this.minDate = new Date();
      this.maxDate = new Date();
      this.minDate.setDate(this.minDate.getDate() + 3);
      this.maxDate.setDate(this.maxDate.getDate() + 30);
      this.appointment=new Appointment();
      this.doctorid=+this.route.snapshot.paramMap.get('id1');
     }

  ngOnInit(): void {
    this.appointmentFormGroup=this.formBuilder.group({
      patient:this.formBuilder.group({
        patFirstname:[''],
        patLastname:[''],
        gender:[''],
        age :[''],
        mobile:[''],
        email:[''],
        
      }),
      address : this.formBuilder.group({
        street:[''],
        city : [''],
        state :[''],
        nationality :[''],
        zipcode : ['']

      }),

      appointmentBooking : this.formBuilder.group({
        appointDate:[''],
        appointTime:[''],
        
        reasonVisit:['']
      
      }),

    });
    this.minDate = new Date(2020, 0, 1);
    this.maxDate = new Date(2020, 0, 365);
  }


  






  onSubmit(){
     

     this.consFees=+this.route.snapshot.paramMap.get('id2');
     var myapp=new Date(this.apptime);
     
    // this.apptime=(this.appointmentFormGroup.get('appointmentBooking.appointDate').value).setHours(
    //  (this.appointmentFormGroup.get('appointmentBooking.appointTime').value).getHours(),
    //  (this.appointmentFormGroup.get('appointmentBooking.appointTime').value).getMinutes());
     alert("local time is"+this.appointmentFormGroup.get('appointmentBooking.appointTime').value);
    // console.log("the time you choosen is"+this.apptime);
     
     

     console.log('the given doctor id is'+this.doctorid);
     console.log(this.appointmentFormGroup.get('patient').value);
     console.log(this.appointmentFormGroup.get('address').value);
     console.log(this.appointmentFormGroup.get('appointmentBooking').value);
    
    
     this.appointment.patFirstname=this.appointmentFormGroup.get('patient.patFirstname').value;
     this.appointment.patLastname=this.appointmentFormGroup.get('patient.patLastname').value;
     this.appointment.gender=this.appointmentFormGroup.get('patient.gender').value;
     this.appointment.age=this.appointmentFormGroup.get('patient.age').value;
     this.appointment.mobile=this.appointmentFormGroup.get('patient.mobile').value;
     this.appointment.email=this.appointmentFormGroup.get('patient.email').value;

     this.appointment.street=this.appointmentFormGroup.get('address.street').value;
     this.appointment.state=this.appointmentFormGroup.get('address.state').value;
     this.appointment.city=this.appointmentFormGroup.get('address.city').value;
     this.appointment.nationality=this.appointmentFormGroup.get('address.nationality').value;
     this.appointment.zipcode=this.appointmentFormGroup.get('address.zipcode').value;

     this.appointment.reasonVisit=this.appointmentFormGroup.get('appointmentBooking.reasonVisit').value;
     this.appointment.appointDoctorid=this.doctorid;
     this.appointment.appointDate=this.appointmentFormGroup.get('appointmentBooking.appointDate').value;
    this.appointment.appointTime =this.appointmentFormGroup.get('appointmentBooking.appointTime').value;


    
     this.appointmentService.saveAppointment(this.appointment)
                .subscribe(result => this.gotoUserList());
    
    
  }
  gotoUserList(){

    console.log('Consultation fees'+this.consFees);
    console.log('(records) saved successfully');
    this.router.navigateByUrl(`/payment/${this.doctorid}/${this.consFees}`);
   
  }

}
