import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomComponent } from './view-room.component';

describe('ViewRoomComponent', () => {
  let component: ViewRoomComponent;
  let fixture: ComponentFixture<ViewRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
