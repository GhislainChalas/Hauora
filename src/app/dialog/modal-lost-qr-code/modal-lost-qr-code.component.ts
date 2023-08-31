import { Component } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-modal-lost-qr-code',
  templateUrl: './modal-lost-qr-code.component.html',
  styleUrls: ['./modal-lost-qr-code.component.css'],
})
export class ModalLostQrCodeComponent {
  public lostData: any = {
    email: '',
    firstName: '',
    lastName: '',
  };

  public user: User | undefined;

  public isQRCodeRetrieved: Boolean = false;
}
