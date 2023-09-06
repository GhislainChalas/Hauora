import {
  Component,
  Input,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdmissionActionComponent } from '../dialog/modal-admission-action/modal-admission-action.component';
import { MatTable } from '@angular/material/table';
import { ModalCloseAdmissionComponent } from '../dialog/modal-close-admission/modal-close-admission.component';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
})
export class AdmissionComponent {
  @Input() public admission: any = {};
  @Input() public doctor: any = {};
  @Output() public closeAdmissionEventEmitter: EventEmitter<Boolean> =
    new EventEmitter();

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

  public openCloseModal(): void {
    this.dialog
      .open(ModalCloseAdmissionComponent, {
        disableClose: true,
        data: { id: this.admission._id },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) this.closeAdmissionEventEmitter.emit(true);
      });
  }
}
