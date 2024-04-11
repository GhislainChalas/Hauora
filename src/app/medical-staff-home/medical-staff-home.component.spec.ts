import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStaffHomeComponent } from './medical-staff-home.component';

describe('MedicalStaffHomeComponent', () => {
  let component: MedicalStaffHomeComponent;
  let fixture: ComponentFixture<MedicalStaffHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalStaffHomeComponent]
    });
    fixture = TestBed.createComponent(MedicalStaffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
