import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctors : Doctor=new Doctor();
  constructor(private doctorService : DoctorService,
              private route: ActivatedRoute) 
              { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleDoctorDetails();
    })
  }

  handleDoctorDetails() {
    //get the "id" param string. convert string to a number using the "+" symbol
    const theDoctorId: number=+this.route.snapshot.paramMap.get('id');

    console.log("the doctor id is"+theDoctorId);
    this.doctorService.getDoctor(theDoctorId).subscribe(
      data=>{
        this.doctors=data;
      }
    )



  }

}
