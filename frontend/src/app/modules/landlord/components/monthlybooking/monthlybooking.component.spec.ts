import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlybookingComponent } from './monthlybooking.component';

describe('MonthlybookingComponent', () => {
  let component: MonthlybookingComponent;
  let fixture: ComponentFixture<MonthlybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlybookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
