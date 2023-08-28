import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdmissionActionComponent } from './modal-admission-action.component';

describe('ModalAdmissionActionComponent', () => {
  let component: ModalAdmissionActionComponent;
  let fixture: ComponentFixture<ModalAdmissionActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdmissionActionComponent]
    });
    fixture = TestBed.createComponent(ModalAdmissionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
