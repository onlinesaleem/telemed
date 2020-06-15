import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';


declare let paypal : any;

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.css']
})
export class PaymentProcessComponent implements OnInit {

  addScript : boolean =false;

  finalAmount : number=1;
  docid: number;

  doctors :Doctor[];

 constructor(private route: ActivatedRoute,
             private doctorService: DoctorService) {

  this.finalAmount=+this.route.snapshot.paramMap.get(`amt`);
  this.docid=+this.route.snapshot.paramMap.get(`doctorid`);
  console.log('the amount is'+this.finalAmount);
  this.paypalConfig;
   

  

  }


 ngOnInit()  {
   
 this.listDoctors;
 
 }



 paypalConfig ={
   env: 'sandbox',
   client :{
     sandbox : 'ARcESfblKkwzcY1JbmhdA3b59_qo8a5AAaMvB-stFEOm4hKsVKgj7yXOmZAW5oDqpFm9WWKsYHhhEn6r',
     production: 'your key'
   },
   commit : true,
   payment : (data,actions) =>{
     return actions.payment.create({
       payment:{
         transactions: [
           {amount: {total : this.finalAmount, currency : 'USD'}}
         ]
       }
     });
   },

   onAuthorize:(data,actions)=>{
     return actions.payment.execute().then((payment) =>{
       //do something when payment is successful.
     })
   }

 };
 
 ngAfterViewChecked(): void {
   if (!this.addScript){
     this.addPaypalScript().then(() =>{

       paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn');

     })
   }
 }

 addPaypalScript(){
   this.addScript = true;
   return new Promise((resolve,reject) =>{
     let scripttagElement = document.createElement('script');
     scripttagElement.src='https://www.paypalobjects.com/api/checkout.js';
     scripttagElement.onload=resolve;
     document.body.appendChild(scripttagElement);
   })
 }
 

 listDoctors()
 {

   console.log("doctor list function calling");
   
   this.doctorService.getDoctorbyid(this.docid).subscribe(
     data=>{
       this.doctors=data._embedded.doctors;
     }
   )

 }






}
