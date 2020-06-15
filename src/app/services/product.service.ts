import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getDoctorListPaginateAll(thePage :number,thePageSize:number): Observable<GetResponseProduct>{
    const prodlUrl=`${this.baseUrl}?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProduct>(prodlUrl);
  }





  getProductListAll():Observable<Product[]>{

    const productUrl=`${this.baseUrl}`;
    return this.httpClient.get<GetResponseProduct>(productUrl).pipe(
      map(response => response._embedded.products)
    );

  }

}

interface GetResponseProduct{

  _embedded:{
    products : Product[];
  }

  page:{

    size :number,
    totalElements : number,
    totalPages : number,
    number : number


  }
}