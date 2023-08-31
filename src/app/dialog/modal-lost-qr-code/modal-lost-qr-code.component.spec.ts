import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLostQrCodeComponent } from './modal-lost-qr-code.component';

describe('ModalLostQrCodeComponent', () => {
  let component: ModalLostQrCodeComponent;
  let fixture: ComponentFixture<ModalLostQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLostQrCodeComponent]
    });
    fixture = TestBed.createComponent(ModalLostQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
