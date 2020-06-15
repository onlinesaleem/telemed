import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytabsComponent } from './paytabs.component';

describe('PaytabsComponent', () => {
  let component: PaytabsComponent;
  let fixture: ComponentFixture<PaytabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
