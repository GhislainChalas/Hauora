import { Injectable } from '@angular/core';
import { AdmissionProvider } from '../providers/admission.provider';
@Injectable({ providedIn: 'root' })
export class AdmissionService {
  constructor(private admissionProvider: AdmissionProvider) {}

  public async getAdmissionsByPatientId(id: String): Promise<any[]> {
    return await this.admissionProvider.getAdmissionsByPatientId(id);
  }

  public async getLastAdmissions(id: String): Promise<any[]> {
    return await this.admissionProvider.getLastAdmissions(id);
  }

  public async postAdmission(body: any): Promise<any> {
    const result = await this.admissionProvider.postAdmission(body);
    return result;
  }

  public async closeAdmission(id: String): Promise<any> {
    return await this.admissionProvider.closeAdmission(id);
  }
}
