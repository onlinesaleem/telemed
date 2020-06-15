import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomemenuComponent } from './welcomemenu.component';

describe('WelcomemenuComponent', () => {
  let component: WelcomemenuComponent;
  let fixture: ComponentFixture<WelcomemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
