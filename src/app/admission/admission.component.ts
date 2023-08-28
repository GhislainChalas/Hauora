import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdmissionActionComponent } from '../dialog/modal-admission-action/modal-admission-action.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
})
export class AdmissionComponent {
  @Input() public admission: any = {};
  @Input() public doctor: any = {};

  public displayedTreatmentColumns: string[] = ['name', 'delay', 'duree'];
  public displayedHistoryColumns: string[] = ['date', 'hour', 'action'];

  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog
      .open(ModalAdmissionActionComponent, { disableClose: true })
      .afterClosed()
      .subscribe((data) => {
        data.date = data.date.toDateString();
        this.admission.history = this.admission.history.concat([data]);
      });
  }
}
