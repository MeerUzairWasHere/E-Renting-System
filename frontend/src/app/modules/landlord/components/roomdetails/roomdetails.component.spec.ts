import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomdetailsComponent } from './roomdetails.component';

describe('RoomdetailsComponent', () => {
  let component: RoomdetailsComponent;
  let fixture: ComponentFixture<RoomdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
