import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdmissionProvider {
  private uri = 'http://localhost:3000';
  private headers = { 'Access-Control-Allow-Origin': '*' };

  constructor(private http: HttpClient) {}

  public async getLastAdmissions(patientId: String): Promise<any> {
    return lastValueFrom(
      this.http.get(`${this.uri}/admissions/last/${patientId}`, {
        headers: this.headers,
      })
    );
  }

  public async postAdmission(body: any): Promise<any> {
    return lastValueFrom(
      this.http.post(`${this.uri}/patients/create`, body, {
        headers: this.headers,
      })
    );
  }
}
