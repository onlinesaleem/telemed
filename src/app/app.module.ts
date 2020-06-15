import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { TestComponent } from './components/test/test.component';
import {Routes,RouterModule} from '@angular/router';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorListBySpecialityComponent } from './components/doctor-list-by-speciality/doctor-list-by-speciality.component';
import { DoctorSpecialityComponent } from './components/doctor-speciality/doctor-speciality.component';
import { DoctorDeskComponent } from './components/doctor-desk/doctor-desk.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { DoctorAppointmentFormComponent } from './components/doctor-appointment-form/doctor-appointment-form.component';
import { PaymentProcessComponent } from './components/payment-process/payment-process.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { WelcomemenuComponent } from './components/welcomemenu/welcomemenu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PaymentProcess1Component } from './components/payment-process1/payment-process1.component';
import { TelrpaymentComponent } from './components/telrpayment/telrpayment.component';
import { PaytabsComponent } from './components/paytabs/paytabs.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


const routes: Routes=[

  {path : 'search/:keyword', component: DoctorListComponent},
  {path : 'speciality/:id',component:DoctorListBySpecialityComponent},
  {path : 'doctors/:id',component:DoctorDetailsComponent},
  {path : 'speciality',component:DoctorSpecialityComponent},
  {path : 'doctors', component:DoctorListComponent},
  {path : 'products', component:ProductListComponent},
  {path : 'payment/:doctorid/:amt',component:PaytabsComponent},
  {path : 'doctordesk',component:DoctorDeskComponent},
  {path : 'appointment/:id1/:id2', component:DoctorAppointmentFormComponent},
  {path : 'welcome', component:WelcomemenuComponent},
  {path : 'payment', component:PaytabsComponent},
  {path : '',redirectTo: '/welcome', pathMatch: 'full' },
  {path : '**', redirectTo: '/welcome', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TestComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorListBySpecialityComponent,
    DoctorSpecialityComponent,
    DoctorDeskComponent,
    DoctorAppointmentFormComponent,
    PaymentProcessComponent,
    WelcomemenuComponent,
    ProductListComponent,
    PaymentProcess1Component,
    TelrpaymentComponent,
    PaytabsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
