import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import data from 'src/data/blood_analysis.json';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent {
  private sortedData = data.adult;
  public displayedColumns: string[] = ['Nom', 'Min', 'Max', 'Unité'];

  constructor() {
    this.sortedData.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }

  public referenceData = new MatTableDataSource(this.sortedData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.referenceData.filter = filterValue.trim().toLowerCase();
  }
}
