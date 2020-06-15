import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSpecialityComponent } from './doctor-speciality.component';

describe('DoctorSpecialityComponent', () => {
  let component: DoctorSpecialityComponent;
  let fixture: ComponentFixture<DoctorSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
