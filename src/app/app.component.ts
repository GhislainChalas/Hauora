import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isConnected = true;
  public title = 'Le carnet de santé Numérique';
  public isOpen: Boolean = true;

  constructor(private router: Router) {}
  public goToReference(): void {
    this.router.navigate(['reference']);
  }

  public goToResume(): void {
    this.router.navigate(['resume']);
  }

  public checkOpenSideNav(event: any): void {
    this.isOpen = event;
  }
}
