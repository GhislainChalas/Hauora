import { Component, Input } from '@angular/core';
import { User } from '../types/user';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.css'],
})
export class GenerateQrCodeComponent {
  @Input() user: any;

  public qrCodeDownloadLink: SafeUrl = '';

  public onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
