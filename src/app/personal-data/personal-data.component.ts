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

  public isQRCodeDisplayed: Boolean = false;

  public sizeChart: any;
  public weightChart: any;

  public isHistoryTabActive: Boolean = false;

  public vaccinesData = vaccinesData;

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

  public userVaccines: any[] = [];

  public lastAdmission: any = {
    date: '25/08/2023',
    reason: 'Bras cassé',
    hopital: 'Clinique Kennedy - 26200 Montélimar',
  };

  public lastConsultation: any = {
    date: '25/08/2023',
    reason: 'Rappel vaccin',
    doctor: "Julien LHERMITTE -Pole médical 26450 Cléon d'Andran",
  };

  constructor() {
    this.user = {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      usualName: '',
      birthName: '',
      bloodType: '',
      rhesus: '',
      birthDate: '',
      birthPlace: '',
      weight: 65,
      size: 160,
    };
    this.sizeChart = {};
    this.weightChart = {};
  }

  public addNewVaccine(): void {
    this.userVaccines.push({ name: '', date: '', lot: '' });
  }

  public changeTab(event: any): void {
    if (event.index === 3) this.isHistoryTabActive = true;
  }
}