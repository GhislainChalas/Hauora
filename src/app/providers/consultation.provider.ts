import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseProvider } from './base.provider';

@Injectable({ providedIn: 'root' })
export class ConsultationProvider extends BaseProvider {
  constructor(public override http: HttpClient) {
    super(http, 'consultations');
  }

  public async getLastConsultations(patientId: String): Promise<any> {
    this.path = `consultations/${patientId}/last`;
    return await this.getData();
  }

  public async postConsultation(body: any): Promise<any> {
    return await super.postData(body);
  }
}
