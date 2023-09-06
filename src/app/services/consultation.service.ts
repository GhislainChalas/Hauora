import { Injectable } from '@angular/core';
import { ConsultationProvider } from '../providers/consultation.provider';
@Injectable({ providedIn: 'root' })
export class ConsultationService {
  constructor(private consultationProvider: ConsultationProvider) {}

  public async getLastConsultations(id: String): Promise<any[]> {
    return await this.consultationProvider.getLastConsultations(id);
  }

  public async postConsultation(body: any): Promise<any> {
    return await this.consultationProvider.postConsultation(body);
  }
}
