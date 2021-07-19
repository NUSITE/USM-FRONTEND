import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmLoginComponent } from './usm-login.component';

describe('UsmLoginComponent', () => {
  let component: UsmLoginComponent;
  let fixture: ComponentFixture<UsmLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsmLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
