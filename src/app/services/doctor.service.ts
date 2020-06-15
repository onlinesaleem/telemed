import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../common/doctor';
import { map } from 'rxjs/operators';
import { Doctorspeciality } from '../common/doctorspeciality';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  

  private baseUrl='http://localhost:8080/api/doctors';
  
  private specialityUrl='http://localhost:8080/api/doctor-speciality';



  constructor(private httpClient: HttpClient) { }


  getDoctor(theDoctorId: number): Observable<Doctor> {
    
    const doctorUrl=`${this.baseUrl}/${theDoctorId}`;
    return this.httpClient.get<Doctor>(doctorUrl);

  }

  getDoctorbyid(theDoctorId:number): Observable<GetResponseSingleDoctor>{

    const doctorUrl=`${this.baseUrl}/${theDoctorId}`;
    return this.httpClient.get<GetResponseSingleDoctor>(doctorUrl);
  }

  getDoctorListPaginateAll(thePage :number,thePageSize:number): Observable<GetResponseDoctorsListAll>{
    const docallUrl=`${this.baseUrl}?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseDoctorsListAll>(docallUrl);
  }


  searchDoctors(theKeyword: string):Observable<Doctor[]> {
    

    const searchUrl=`${this.baseUrl}/search/findByDocEngnameContaining?name=${theKeyword}`;
    return this.httpClient.get<GetResponseDoctors>(searchUrl).pipe(
      map(response => response._embedded.doctors)
    );

  }


  searchDoctorPaginate(thePage :number,thePageSize:number,theKeyword: String): Observable<GetResponseDoctorsListAll>{
    const docallUrl=`${this.baseUrl}/search/findByDocEngnameContaining?name=${theKeyword}`
    + `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseDoctorsListAll>(docallUrl);
  }

  getDoctorSpecialityPaginate(thePage :number,thePageSize:number,
                                  dspecialityid:number): Observable<GetResponseDoctorsListAll>{
    const docallUrl=`${this.baseUrl}/search/findBySpecialityId?id=${dspecialityid}`
    + `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseDoctorsListAll>(docallUrl);
  }

  //get the doctor list by speciality
  getDoctorList(theSpecialityId:number): Observable<Doctor[]>{

    const searchUrl=`${this.baseUrl}/search/findBySpecialityId?id=${theSpecialityId}`;
    return this.httpClient.get<GetResponseDoctors>(searchUrl).pipe(
      map(response => response._embedded.doctors)
    );


  }


  
  getDoctorListAll(): Observable<Doctor[]>{
    const docallUrl=`${this.baseUrl}`;
    return this.httpClient.get<GetResponseDoctorsListAll>(docallUrl).pipe(
      map(response => response._embedded.doctors)
    );
  }


//get the doctor speciality
getDoctorSpeciality():Observable<Doctorspeciality[]> {
  const spUrl=`${this.specialityUrl}`;
  return this.httpClient.get<GetResponseDoctorSpeciality>(spUrl).pipe(
    map(response=>response._embedded.doctorspeciality)
  );
 }


}

interface GetResponseSingleDoctor{

  _embedded:{
    doctors : Doctor[];
  }

}

interface GetResponseDoctors{

  _embedded:{
    doctors : Doctor[];
  }
  page:{

    size :number,
    totalElements : number,
    totalPages : number,
    number : number


  }
}

interface GetResponseDoctorSpeciality{

  _embedded:{
    doctorspeciality : Doctorspeciality[];
  }
}

interface GetResponseDoctorsListAll{
  _embedded:{
    doctors :Doctor[];
  }
  page:{

    size :number,
    totalElements : number,
    totalPages : number,
    number : number

}
}