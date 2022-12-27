import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRentComponent } from './edit-rent.component';

describe('EditRentComponent', () => {
  let component: EditRentComponent;
  let fixture: ComponentFixture<EditRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
