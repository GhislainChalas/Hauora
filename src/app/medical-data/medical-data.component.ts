import { Component, Input } from '@angular/core';
import medicalReference from 'src/data/blood_analysis.json';

@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrls: ['./medical-data.component.css'],
})
export class MedicalDataComponent {
  @Input() public isReadOnly: boolean = true;
  @Input() public doctor: any = {};

  public displayedColumns: String[] = ['Test', 'Donnée'];

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
