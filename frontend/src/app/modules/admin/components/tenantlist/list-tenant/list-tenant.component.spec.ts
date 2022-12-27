import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTenantComponent } from './list-tenant.component';

describe('ListTenantComponent', () => {
  let component: ListTenantComponent;
  let fixture: ComponentFixture<ListTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
