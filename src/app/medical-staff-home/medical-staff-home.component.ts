import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-staff-home',
  templateUrl: './medical-staff-home.component.html',
  styleUrls: ['./medical-staff-home.component.css'],
})
export class MedicalStaffHomeComponent {
  public events: any[] = [];
  public displayedEventsColumns: String[] = [
    'icon',
    'event',
    'patient',
    'date',
  ];

  public patients: any[] = [
    { firstName: 'Test', lastName: 'last' },
    { firstName: 'Second', lastName: 'Test' },
  ];
}
