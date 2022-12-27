import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandLordComponent } from './add-land-lord.component';

describe('AddLandLordComponent', () => {
  let component: AddLandLordComponent;
  let fixture: ComponentFixture<AddLandLordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLandLordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLandLordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
