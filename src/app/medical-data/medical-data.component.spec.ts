import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDataComponent } from './medical-data.component';

describe('MedicalDataComponent', () => {
  let component: MedicalDataComponent;
  let fixture: ComponentFixture<MedicalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalDataComponent]
    });
    fixture = TestBed.createComponent(MedicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
