import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDeskComponent } from './doctor-desk.component';

describe('DoctorDeskComponent', () => {
  let component: DoctorDeskComponent;
  let fixture: ComponentFixture<DoctorDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
