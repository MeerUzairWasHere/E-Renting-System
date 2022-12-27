import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsComponent } from './view-details.component';

describe('ViewDetailsComponent', () => {
  let component: ViewDetailsComponent;
  let fixture: ComponentFixture<ViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
