import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentDetailsComponent } from './list-rent-details.component';

describe('ListRentDetailsComponent', () => {
  let component: ListRentDetailsComponent;
  let fixture: ComponentFixture<ListRentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
