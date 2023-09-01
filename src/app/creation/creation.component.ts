import { Component } from '@angular/core';
import { User } from '../types/user';
import { v4 as uuidv4 } from 'uuid';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent {
  public user: User;

  public countries: any = [];

  public isQRCodeDisplayed: Boolean = false;

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

  constructor(private dataService: DataService) {
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
      socialSecurityNumber: '',
      emergencyPeople: [
        {
          firstName: '',
          lastName: '',
          address: '',
          zipCode: '',
          city: '',
          nationality: '',
          phone: '',
          email: '',
        },
      ],
    };
  }

  public async ngOnInit(): Promise<void> {
    this.countries = await this.dataService.getCountries();
    await this.dataService.getUsers();
  }
}
