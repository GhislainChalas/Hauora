import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreationConfirmationComponent } from './modal-creation-confirmation.component';

describe('ModalCreationConfirmationComponent', () => {
  let component: ModalCreationConfirmationComponent;
  let fixture: ComponentFixture<ModalCreationConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreationConfirmationComponent]
    });
    fixture = TestBed.createComponent(ModalCreationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
