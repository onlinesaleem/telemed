import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListBySpecialityComponent } from './doctor-list-by-speciality.component';

describe('DoctorListBySpecialityComponent', () => {
  let component: DoctorListBySpecialityComponent;
  let fixture: ComponentFixture<DoctorListBySpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListBySpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListBySpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
