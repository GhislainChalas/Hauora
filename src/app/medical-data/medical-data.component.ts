import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import medicalReference from 'src/data/blood_analysis.json';

@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrls: ['./medical-data.component.css'],
})
export class MedicalDataComponent {
  @Input() public isReadOnly: boolean = true;
  @Input() public doctor: any = {};
  @Input() public emergencyPeople: any[] = [];

  public dataSource = new MatTableDataSource<any>();

  public displayedColumns: String[] = ['Test', 'Donnée'];
  public displayedEmergencyColumns: String[] = [
    'firstName',
    'lastName',
    'address',
    'city',
    'email',
    'phone',
  ];

  public data: any = {
    date: '01/08/2023',
    type: 'Prise de sang',
    rows: [
      { name: 'globules rouges', count: 0.5 },
      { name: 'globules blancs', count: 850000000 },
    ],
  };

  constructor() {
    this.getReferenceData();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataSource = new MatTableDataSource<any>(this.emergencyPeople);
  }

  public getReferenceData(): void {
    this.data.rows.forEach((row: any, index: number) => {
      const ref = medicalReference.adult.find((el: any) =>
        el.name.toLowerCase().includes(row.name)
      );
      this.data.rows[index].min = ref?.min;
      this.data.rows[index].max = ref?.max;
    });

    console.log(this.data);
  }
}
