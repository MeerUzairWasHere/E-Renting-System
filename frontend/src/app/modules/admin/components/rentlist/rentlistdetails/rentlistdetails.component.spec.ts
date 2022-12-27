import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentlistdetailsComponent } from './rentlistdetails.component';

describe('RentlistdetailsComponent', () => {
  let component: RentlistdetailsComponent;
  let fixture: ComponentFixture<RentlistdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentlistdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
