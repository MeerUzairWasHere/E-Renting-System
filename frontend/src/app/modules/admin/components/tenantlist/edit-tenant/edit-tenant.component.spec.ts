import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTenantComponent } from './edit-tenant.component';

describe('EditTenantComponent', () => {
  let component: EditTenantComponent;
  let fixture: ComponentFixture<EditTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
