import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseProvider } from './base.provider';

@Injectable({ providedIn: 'root' })
export class PatientProvider extends BaseProvider {
  constructor(public override http: HttpClient) {
    super(http, 'patients');
  }

  public async getPatient(id: string): Promise<any> {
    this.path = `patients/${id}`;
    return await super.getData();
  }

  public async createPatient(body: any): Promise<any> {
    return super.postData(body);
  }
}
