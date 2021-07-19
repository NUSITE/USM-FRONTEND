import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmDasboardComponent } from './usm-dasboard.component';

describe('UsmDasboardComponent', () => {
  let component: UsmDasboardComponent;
  let fixture: ComponentFixture<UsmDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsmDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
