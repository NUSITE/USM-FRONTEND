import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmRegisterComponent } from './usm-register.component';

describe('UsmRegisterComponent', () => {
  let component: UsmRegisterComponent;
  let fixture: ComponentFixture<UsmRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsmRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
