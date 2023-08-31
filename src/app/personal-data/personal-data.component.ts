import { Component, Input } from '@angular/core';
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

  public lastAdmissions: any[] = [
    {
      date: '25/08/2023',
      reason: 'Bras cassé',
      hospital: 'Clinique Kennedy - 26200 Montélimar',
      treatment: [
        {
          name: 'Doliprane 1000mg',
          delay: '1 cp matin midi et soir',
          duree: '10 jours',
        },
        {
          name: 'Tramadol 18mg',
          delay: '2 cp matin midi et soir si douleurs',
          duree: '3 jours',
        },
      ],
      observations: '',
      history: [
        {
          date: '25/08/2023',
          hour: '15:00',
          action: 'Prise de doliprane 1 cp',
        },
        {
          date: '25/08/2023',
          hour: '18:00',
          action: 'Pose de résine sur bras droit',
        },
        {
          date: '25/08/2023',
          hour: '21:35',
          action: 'Prise de doliprane 1 cp suite douleur',
        },
      ],
      status: 'active',
    },
    {
      date: '24/08/2023',
      reason: 'Entorse pied gauche',
      hospital: 'Clinique La parisière - 26300 Bourg de péage',
      treatment: [
        {
          name: 'Doliprane 1000mg',
          delay: '1 cp matin midi et soir',
          duree: '10 jours',
        },
        {
          name: 'Tramadol 18mg',
          delay: '2 cp matin midi et soir si douleurs',
          duree: '3 jours',
        },
      ],
      observations: '',
      history: [
        {
          date: '24/08/2023',
          hour: '18:22',
          action: 'Prise de doliprane 1 cp',
        },
        {
          date: '24/08/2023',
          hour: '19:00',
          action: 'Pose de résine sur bras droit',
        },
        {
          date: '24/08/2023',
          hour: '22:47',
          action: 'Prise de doliprane 1 cp suite douleur',
        },
      ],
      status: 'closed',
    },
  ];

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

  constructor() {
    this.user = {
      id: uuidv4(),
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
    this.lastAdmissions[0].status === 'active'
      ? (this.isAdmissionActive = true)
      : null;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user.emergencyPeople.push({
      firstName: 'Test',
      lastName: 'Test',
      address: 'Adresse test',
      zipCode: '26000',
      city: 'Valence',
      nationality: 'Française',
      email: 'test@test.com',
      phone: '0475000000',
    });
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
