import { PatientService } from './../services/patient.service';
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
    emergencyPeople: [],
    socialSecurityNumber: '',
  };

  public toggleArrow = 'fa-angles-left';

  private state: any;

  constructor(private router: Router, private patientService: PatientService) {
    this.state = this.router.getCurrentNavigation()?.extras?.state;
  }
  public async ngOnInit(): Promise<void> {
    if (this.state && this.state['user']) {
      this.user = await this.patientService.getPatient(this.state['user']);
    }
  }
}
