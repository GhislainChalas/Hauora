import { Injectable } from '@angular/core';
import { PatientProvider } from '../providers/patient.provider';

@Injectable({ providedIn: 'root' })
export class PatientService {
  constructor(private patientProvider: PatientProvider) {}

  public async getPatient(id: string): Promise<any> {
    return await this.patientProvider.getPatient(id);
  }

  public async createPatient(body: any): Promise<any> {
    return await this.patientProvider.createPatient(body);
  }
}
