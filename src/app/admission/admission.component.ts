import { Component, Input } from '@angular/core';

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
}
