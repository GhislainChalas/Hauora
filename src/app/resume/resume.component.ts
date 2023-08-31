import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../types/user';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  public user: User = {
    id: '',
    firstName: '',
    lastName: '',
    usualName: '',
    birthName: '',
    nationality: '',
    phone: '',
    email: '',
    zipCode: '',
    address: '',
    country: '',
    city: '',
    bloodType: '',
    rhesus: '',
    birthDate: '',
    birthPlace: '',
    weight: 65,
    size: 160,
    emergencyPeople: [
      {
        firstName: 'Test',
        lastName: 'Test',
        address: 'Adresse test',
        zipCode: '26000',
        city: 'Valence',
        nationality: 'Française',
        email: 'test@test.com',
        phone: '0475000000',
      },
    ],
    socialSecurityNumber: '',
  };

  public toggleArrow = 'fa-angles-left';

  private state: any;

  constructor(private router: Router) {
    this.state = this.router.getCurrentNavigation()?.extras?.state;
    if (this.state && this.state['user']) {
      this.user = this.state['user'];
    }
  }
}
