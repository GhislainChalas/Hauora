import { Component } from '@angular/core';
import { AdmissionAction } from 'src/app/types/admission-action';

@Component({
  selector: 'app-modal-admission-action',
  templateUrl: './modal-admission-action.component.html',
  styleUrls: ['./modal-admission-action.component.css'],
})
export class ModalAdmissionActionComponent {
  public action: AdmissionAction = {
    date: '',
    hour: '',
    action: '',
  };
}
