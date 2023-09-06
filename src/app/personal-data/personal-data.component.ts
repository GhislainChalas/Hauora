import { AdmissionService } from './../services/admission.service';
import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from '../types/user';
import { v4 as uuidv4 } from 'uuid';
import vaccinesData from '../../data/vaccines.json';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
})
export class PersonalDataComponent {
  @Input() user: User;
  @Input() isReadOnly: boolean = true;
  @Input() allowCreationAndModification: Boolean = true;

  public isAdmissionActive: Boolean = false;
  public sizeChart: any;
  public weightChart: any;
  public isHistoryTabActive: Boolean = false;
  public vaccinesData = vaccinesData;
  public displayedAdmissionsColumns: String[] = [
    'date',
    'reason',
    'hospital',
    'status',
  ];
  public displayedConsultationColumns: String[] = ['date', 'reason', 'doctor'];

  public bloods = [
    { value: 1, name: 'O' },
    { value: 2, name: 'A' },
    { value: 3, name: 'B' },
    { value: 4, name: 'AB' },
  ];

  public rhesuses = [
    { value: 1, name: '-' },
    { value: 2, name: '+' },
  ];

  public vaccinesType = [
    { value: 1, name: 'Première injection' },
    { value: 2, name: 'Rappel' },
  ];

  public userVaccines: any[] = [];

  public doctor: any = {
    name: 'Lhermitte Julien',
    email: 'j.lhermitte@doctolib.fr',
    phone: '0475000000',
    adress: "Pole medical - 26450 Cléon d'Andran",
  };

  public lastAdmissions: any[] = [];

  public lastConsultations: any[] = [
    {
      date: '25/08/2023',
      reason: 'Rappel vaccin',
      doctor: "Julien LHERMITTE -Pole médical 26450 Cléon d'Andran",
    },
    {
      date: '23/07/2023',
      reason: 'Grippe intestinale',
      doctor: "Julien LHERMITTE -Pole médical 26450 Cléon d'Andran",
    },
  ];

  constructor(private admissionService: AdmissionService) {
    this.user = {
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
    this.sizeChart = {};
    this.weightChart = {};
    this.lastAdmissions[0] && this.lastAdmissions[0].status === 'active'
      ? (this.isAdmissionActive = true)
      : null;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.user && this.user._id) {
      this.admissionService.getLastAdmissions(this.user._id).then((res) => {
        this.lastAdmissions = res;
      });
    }
  }

  public addNewVaccine(): void {
    this.userVaccines.push({ name: '', date: '', lot: '', type: '' });
  }

  public changeTab(event: any): void {
    if (
      (event.index === 4 && this.isAdmissionActive) ||
      (event.index === 3 && !this.isAdmissionActive)
    )
      this.isHistoryTabActive = true;
  }
}
