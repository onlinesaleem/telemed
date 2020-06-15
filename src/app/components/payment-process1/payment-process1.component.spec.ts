import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProcess1Component } from './payment-process1.component';

describe('PaymentProcess1Component', () => {
  let component: PaymentProcess1Component;
  let fixture: ComponentFixture<PaymentProcess1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProcess1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProcess1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
