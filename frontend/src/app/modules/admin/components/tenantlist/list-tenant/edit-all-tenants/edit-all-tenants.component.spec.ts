import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllTenantsComponent } from './edit-all-tenants.component';

describe('EditAllTenantsComponent', () => {
  let component: EditAllTenantsComponent;
  let fixture: ComponentFixture<EditAllTenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAllTenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
