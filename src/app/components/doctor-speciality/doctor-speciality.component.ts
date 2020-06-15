import { Component, OnInit } from '@angular/core';
import { Doctorspeciality } from 'src/app/common/doctorspeciality';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-speciality',
  templateUrl: './doctor-speciality.component.html',
  styleUrls: ['./doctor-speciality.component.css']
})
export class DoctorSpecialityComponent implements OnInit {



  doctorspeciality: Doctorspeciality[];


  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.listSpeciality();
  }

  listSpeciality() {


    this.doctorService.getDoctorSpeciality().subscribe(
      data => {
        this.doctorspeciality = data;
      })
    console.log("doctor speciality method is calling...");

  }
  processResult() {


    return data => {

      this.doctorspeciality = data._embedded.doctorspeciality;
      //this.thePage=data.page.number+1;
      //this.thesize=data.page.size;
      //this.thePageElements=data.page.totalElements;
    };


  }

}
