import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors : Doctor[];
  currentSpecialityId: number;

   thePage : number = 1;
   thesize : number = 10;
   thePageElements: number = 0;

  searchMode: boolean;

  previousKeyword: string = null;

  constructor(private doctorService: DoctorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.listdoctorsAll();
  }

  listdoctorsAll() {
    //   //getting all the doctors list
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode)
    {
      this.handleSearchDoctors();

    }

    else{
      this.handleListProducts();
    
    }


    

  }
  handleListProducts() {


   this.doctorService.getDoctorListPaginateAll(this.thePage - 1,
    this.thesize).subscribe(this.processResult());
   


  }



  handleSearchDoctors() {


   
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    


    //if we have a different keyword than previous
    //then set thePageNumber to 1

    
    if (this.previousKeyword != theKeyword){
      
      this.thePage = 1;

      
      console.log(`keyword=${theKeyword},thePageNumber=${this.thePage}`);
  
      
    }

    
     
    this.previousKeyword = theKeyword;
    console.log(`keyword=${theKeyword},thePageNumber=${this.thePage}`);

    this.doctorService.searchDoctorPaginate(this.thePage - 1, this.thesize, theKeyword).subscribe(
      this.processResult());
    

  }
  processResult() {

    return data => {

      this.doctors = data._embedded.doctors;
      this.thePage = data.page.number + 1;
      this.thesize = data.page.size;
      this.thePageElements = data.page.totalElements;
      

    };
    
    
  }


  updatePageSize(pageSize : number){
    this.thesize = pageSize;
    this.thePage = 1;
    this.listdoctorsAll();
  }

}
