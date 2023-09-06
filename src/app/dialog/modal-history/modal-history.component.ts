import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmissionService } from 'src/app/services/admission.service';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-modal-history',
  templateUrl: './modal-history.component.html',
  styleUrls: ['./modal-history.component.css'],
})
export class ModalHistoryComponent {
  public dataSource: any[] = [];
  public displayedAdmissionsColumns: String[] = [
    'date',
    'reason',
    'hospital',
    'status',
  ];
  public displayedConsultationColumns: String[] = ['date', 'reason', 'doctor'];

  constructor(
    private admissionService: AdmissionService,
    private consultationService: ConsultationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  public async ngOnInit(): Promise<void> {
    const { type, user } = this.data;
    if (type === 'admission') {
      this.dataSource = await this.admissionService.getAdmissionsByPatientId(
        user
      );
    } else if (type === 'consultation') {
      this.dataSource =
        await this.consultationService.getConsultationsByPatientId(user);
    }
  }
}
