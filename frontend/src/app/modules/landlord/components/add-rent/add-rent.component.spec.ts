import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentComponent } from './add-rent.component';

describe('AddRentComponent', () => {
  let component: AddRentComponent;
  let fixture: ComponentFixture<AddRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
