import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];

   thePage :number=1;
   thesize :number=10;
   thePageElements: number=0;


  constructor(private productService:ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.listProductAll();

  }
  listProductAll() {
    


    this.productService.getDoctorListPaginateAll(this.thePage-1,
      this.thesize).subscribe(this.processResult());


    



  }
  processResult(){

    return data=>{

      this.products=data._embedded.products;
      this.thePage=data.page.number+1;
      this.thesize=data.page.size;
      this.thePageElements=data.page.totalElements;
      

    };
    



  }

}