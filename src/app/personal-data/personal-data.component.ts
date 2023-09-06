import { AdmissionService } from './../services/admission.service';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../types/user';
import vaccinesData from '../../data/vaccines.json';
import { MatTabGroup } from '@angular/material/tabs';
import { ConsultationService } from '../services/consultation.service';

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

  public lastConsultations: any[] = [];

  constructor(
    private admissionService: AdmissionService,
    private consultationService: ConsultationService
  ) {
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
  }

  public async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (this.user && this.user._id) {
      this.lastAdmissions = await this.admissionService.getLastAdmissions(
        this.user._id
      );
      if (
        this.lastAdmissions[0] &&
        this.lastAdmissions[0].status === 'active'
      ) {
        this.isAdmissionActive = true;
      }
      this.lastConsultations =
        await this.consultationService.getLastConsultations(this.user._id);
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
