import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.component.html',
  styleUrls: ['./scan-qr-code.component.css'],
})
export class ScanQrCodeComponent {
  constructor(private router: Router) {}
  qrResultString: String = '';

  public onCodeResult(resultString: string): void {
    this.qrResultString = resultString;
    this.router.navigate(['resume'], {
      state: { user: JSON.parse(resultString) },
    });
  }
}
