import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelrpaymentComponent } from './telrpayment.component';

describe('TelrpaymentComponent', () => {
  let component: TelrpaymentComponent;
  let fixture: ComponentFixture<TelrpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelrpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelrpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
