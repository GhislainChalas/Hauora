import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLostQrCodeComponent } from '../dialog/modal-lost-qr-code/modal-lost-qr-code.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  public goToCreation(): void {
    this.router.navigate(['creation']);
  }

  public goToScan(): void {
    this.router.navigate(['scan']);
  }

  public goToResume(): void {
    this.router.navigate(['resume']);
  }

  public openRetrieveModal(): void {
    this.dialog
      .open(ModalLostQrCodeComponent, { disableClose: true })
      .afterClosed()
      .subscribe((user) => {
        if (user) {
          this.goToResume();
        } else {
          this.goToCreation();
        }
      });
  }
}
