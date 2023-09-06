import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmissionService } from 'src/app/services/admission.service';

@Component({
  selector: 'app-modal-close-admission',
  templateUrl: './modal-close-admission.component.html',
  styleUrls: ['./modal-close-admission.component.css'],
})
export class ModalCloseAdmissionComponent {
  constructor(
    private admissionService: AdmissionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public async closeAdmission(): Promise<any> {
    return await this.admissionService.closeAdmission(this.data.id);
  }
}
