import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordlistComponent } from './landlordlist.component';

describe('LandlordlistComponent', () => {
  let component: LandlordlistComponent;
  let fixture: ComponentFixture<LandlordlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
