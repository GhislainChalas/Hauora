import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCloseAdmissionComponent } from './modal-close-admission.component';

describe('ModalCloseAdmissionComponent', () => {
  let component: ModalCloseAdmissionComponent;
  let fixture: ComponentFixture<ModalCloseAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCloseAdmissionComponent]
    });
    fixture = TestBed.createComponent(ModalCloseAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
