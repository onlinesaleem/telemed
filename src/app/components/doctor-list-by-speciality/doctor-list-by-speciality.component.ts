import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-list-by-speciality',
  templateUrl: './doctor-list-by-speciality.component.html',
  styleUrls: ['./doctor-list-by-speciality.component.css']
})
export class DoctorListBySpecialityComponent implements OnInit {



  doctors: Doctor[];
  
  thePageNumber :number=1;
  thePageSize :number=10;
  theTotalElements: number=0;
  currentSpecialityId : number;


  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.listdoctorsbyspeciality();

  }
  listdoctorsbyspeciality() {

    const hasSpecialityId: boolean=this.route.snapshot.paramMap.has(`id`);

    
    if(hasSpecialityId){
    this.currentSpecialityId=+this.route.snapshot.paramMap.get(`id`);
    
  }
  else {
    this.currentSpecialityId=1;
  }

  console.log(`Clicked Doctor id is ${this.currentSpecialityId}`);
  this.doctorService.getDoctorSpecialityPaginate(this.thePageNumber-1,this.thePageSize,
                                        this.currentSpecialityId).subscribe(
                                          data =>{
                                            this.doctors = data._embedded.doctors;
                                            this.thePageNumber=data.page.number+1;
                                            this.thePageSize=data.page.size;
                                            this.theTotalElements=data.page.totalElements;
                                          }
                                          )
                                           

}
  processResult()
  {
   

    return data =>{
      this.doctors=data._embedded.doctors;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };


  }


}