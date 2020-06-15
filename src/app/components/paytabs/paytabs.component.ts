import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { Paytabs } from 'src/app/common/paytabs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-paytabs',
  templateUrl: './paytabs.component.html',
  styleUrls: ['./paytabs.component.css']
})
export class PaytabsComponent implements OnInit {



  finalAmount: number = 1;
  docid: number;

  ordernum: number = 1;
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


paymentprocess()

{


  var ourRequest = new XMLHttpRequest();
  
  let total:number=1;
   total=(this.finalAmount*5/100)+(this.finalAmount);
   let svat:number=1;
   svat=(this.finalAmount*5/100);

  
  var url = 'https://www.paytabs.com/apiv2/create_pay_page';
  var params = 'merchant_email=saleem@alqadihospital.com&secret_key=OLCIcadyGpdBN18ngCiQjglxvtVao6XdRAW3L9CszP3mQcJ7O1Y7ijFOMBYaHWozxkDiufK34NqVZa2Nc0VujAi6cghTdFtK062u' +
    '&site_url=http://www.nmcnajran.com'
    + '&return_url=http://alqadihospital.com/&title=NMCNAJRAN Hospital Telemedicine'
    + '&cc_first_name=saleem'
    + '&cc_last_name=badusha&cc_phone_number=1&phone_number=1234567890&email=badusha8@hotmail.com'
    + '&products_per_title=cons&unit_price='+this.finalAmount+'&quantity=1&other_charges='+svat+'&amount='+total+'&discount=0'
    + '&currency=SAR&reference_no=123&ip_customer=1234&ip_merchant=1234&billing_address=NAJRAN&state=NAJRAN&city=NAJRAN'
    + '&postal_code=12345-6789&country=SAU&shipping_first_naME=SALEEM&shipping_last_name=BADUSHA&ddress_shipping=NAJRAN'
    + '&address_shipping=najran'
    + '&city_shipping=NAJRAN&state_shipping=NAJRAN&postal_code_shipping=NAJRAN&country_shipping=SAU&msg_lang=Arabic&cms_with_version=1'
    +'&payment_type=stcpayqr';


  //Send the proper header information along with the request
  var json: JSON;
  let headers = new Headers();
  
  

  //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
  
  
  ourRequest.open('POST', url,true);
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('GET', 'POST');
  ourRequest.setRequestHeader('Access-Control-Allow-Origin', 'https://localhost:4200');
  
  ourRequest.setRequestHeader('Access-Control-Allow-Methods', 'POST');

  


  ourRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  //ourRequest.setRequestHeader("Content-length", params.length);
  ourRequest.setRequestHeader("Connection", "close");
  
  const httpHeaders = new HttpHeaders().append('Access-Control-Allow-Origin', 'https://www.paytabs.com/apiv2/create_pay_page');
 //ourRequest.getResponseHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // ourRequest.setRequestHeader("Connection", "close");
  ourRequest.onload = function () {//Call a function when the state changes.
    if (ourRequest.readyState == 4 && ourRequest.status == 200) {
      //	var response = JSON.stringify(ourRequest.responseText);
      json = JSON.parse(ourRequest.responseText);
      //location.href=json.result.payment_url;

      let paytabs=Object.assign(new Paytabs(),json);

      console.log(json);

      console.log(paytabs.payment_url);

     location.href = paytabs.payment_url;
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
