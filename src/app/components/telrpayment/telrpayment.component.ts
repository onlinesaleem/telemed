import { Component, OnInit } from '@angular/core';
import { Telr } from 'src/app/common/telr';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Doctor } from 'src/app/common/doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-telrpayment',
  templateUrl: './telrpayment.component.html',
  styleUrls: ['./telrpayment.component.css']
})
export class TelrpaymentComponent implements OnInit {


  finalAmount: number = 1;
  docid: number;

  ordernum:number=1;
  doctors: Doctor[];
  

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService) {
    this.finalAmount = +this.route.snapshot.paramMap.get(`amt`);
    this.docid = +this.route.snapshot.paramMap.get(`doctorid`);
    
  }

  ngOnInit() {

    this.listDoctors;

  }

 // paymentprocess() {

 //   this.telr.ivp_amount = 100;
 //   this.telr.ivp_test = 1;
 //   this.telr.ivp_authkey = 'pZ58h~nb6K#cX6zL';
 //   this.telr.ivp_method = 'create';
  //  this.telr.ivp_cart = 1;
//this.telr.ivp_currency = 'USD';
//this.telr.ivp_desc = 'sample';
//this.telr.ivp_store = 23486;
//this.telr.ivp_test = 1;
//this.telr.return_auth = 'http://alqadihospital.com/';
//this.telr.return_can = 'http://alqadihospital.com/';
//this.telr.return_decl = 'http://alqadihospital.com/';
    
 // }

 paymentprocess(){


   var ourRequest = new XMLHttpRequest();
   var storeid = 23486;

   //randaom number formulla Math.floor(Math.random()*(high-low+1))+low;
   let orderrandomnum=Math.floor(Math.random()*(10000-1+1)+1);
   this.ordernum=orderrandomnum;
   var url = 'https://secure.innovatepayments.com/gateway/order.json';
   var params = 'ivp_method=create&ivp_store=' + storeid + '&ivp_authkey=pZ58h~nb6K#cX6zL&ivp_amount='
    +this.finalAmount+'&ivp_currency=SAR'
     + '&return_auth=http://alqadihospital.com/&return_can=http://alqadihospital.com/'
     + '&return_decl=http://alqadihospital.com/'
     + '&ivp_test=1'
     +'&ivp_cart='+(this.ordernum)+'&ivp_desc=ITEMS&ivp_lang=ar';


   //Send the proper header information along with the request
    var json: JSON;
    
   ourRequest.open('POST', url);

   ourRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  // ourRequest.setRequestHeader('Content-length', params.length);
   ourRequest.setRequestHeader("Connection", "close");
   ourRequest.onload = function () {//Call a function when the state changes.
     if (ourRequest.readyState == 4 && ourRequest.status == 200) {
       //	var response = JSON.stringify(ourRequest.responseText);
       json = JSON.parse(ourRequest.responseText);
       
      let telr=Object.assign(new Telr(),json);

      console.log(telr);

       console.log(telr.order.url);

      
      location.href=telr.order.url;
       


     }


   };



   ourRequest.send(params);
 }


  listDoctors() {

    console.log("doctor list function calling");

    this.doctorService.getDoctorbyid(this.docid).subscribe(
      data => {
        this.doctors = data._embedded.doctors;
      }
    )

  }






}