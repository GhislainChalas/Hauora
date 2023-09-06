import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseProvider } from './base.provider';

@Injectable({ providedIn: 'root' })
export class AdmissionProvider extends BaseProvider {
  constructor(public override http: HttpClient) {
    super(http, 'admissions');
  }

  public async getAdmissionsByPatientId(id: String): Promise<any[]> {
    this.path = `admissions/${id}`;
    return super.getData();
  }

  public async getLastAdmissions(patientId: String): Promise<any> {
    this.path = `admissions/${patientId}/last`;
    return super.getData();
  }

  public async postAdmission(body: any): Promise<any> {
    return await super.postData(body);
  }

  public async closeAdmission(id: String): Promise<any> {
    this.path = `admissions/${id}/close`;
    return await super.putData();
  }
}
