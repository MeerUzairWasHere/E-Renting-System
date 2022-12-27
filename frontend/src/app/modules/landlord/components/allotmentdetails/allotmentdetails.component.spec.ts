import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentdetailsComponent } from './allotmentdetails.component';

describe('AllotmentdetailsComponent', () => {
  let component: AllotmentdetailsComponent;
  let fixture: ComponentFixture<AllotmentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotmentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
